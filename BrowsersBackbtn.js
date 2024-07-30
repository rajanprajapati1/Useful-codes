class HistoryNavigation {
    static init()
    {
        if(HistoryNavigation.is_init===true){
            return;
        }
        HistoryNavigation.is_init=true;

        let history_stack=[];
        let n=0;
        let  current_state={timestamp:Date.now()+n};
        n++;
        let init_HNState;
        if(history.state!==null){
            current_state=history.state.HNState;
            history_stack=history.state.HNState.history_stack;
            init_HNState=history.state.HNState;
        } else {
            init_HNState={timestamp:current_state.timestamp,history_stack};
        }
        let listenerPushState=function(params){
            params=Object.assign({state:null},params);
            params.state=params.state!==null?Object.assign({},params.state):{};
            let h_state={ timestamp:Date.now()+n};
            n++;
            let key = history_stack.indexOf(current_state.timestamp);
            key=key+1;
            history_stack.splice(key);
            history_stack.push(h_state.timestamp);
            h_state.history_stack=history_stack;
            params.state.HNState=h_state;
            current_state=h_state;
            return params;
        };
        let listenerReplaceState=function(params){
            params=Object.assign({state:null},params);
            params.state=params.state!==null?Object.assign({},params.state):null;
            let h_state=Object.assign({},current_state);
            h_state.history_stack=history_stack;
            params.state.HNState=h_state;
            return params;
        };
        let desc=Object.getOwnPropertyDescriptors(History.prototype);
        delete desc.constructor;
        Object.defineProperties(History.prototype,{

            replaceState:Object.assign({},desc.replaceState,{
                value:function(state,title,url){
                    let params={state,title,url};
                    HistoryNavigation.dispatchEvent('history.state.replace',params);
                    params=Object.assign({state,title,url},params);
                    params=listenerReplaceState(params);
                    desc.replaceState.value.call(this,params.state,params.title,params.url);
                }
            }),
            pushState:Object.assign({},desc.pushState,{
                value:function(state,title,url){
                    let params={state,title,url};
                    HistoryNavigation.dispatchEvent('history.state.push',params);
                    params=Object.assign({state,title,url},params);
                    params=listenerPushState(params);
                    return desc.pushState.value.call(this, params.state, params.title, params.url);
                }
            })
        });
        HistoryNavigation.addEventListener('popstate',function(event){
            let HNState;
            if(event.state==null){
                HNState=init_HNState;
            } else {
                HNState=event.state.HNState;
            }
            let key_prev=history_stack.indexOf(current_state.timestamp);
            let key_state=history_stack.indexOf(HNState.timestamp);
            let delta=key_state-key_prev;
            let params={delta,event,state:Object.assign({},event.state)};
            delete params.state.HNState;
            HNState.history_stack=history_stack;
            if(event.state!==null){
                event.state.HNState=HNState;
            }
            current_state=HNState;
            HistoryNavigation.dispatchEvent('history.go',params);
        });

    }
    static addEventListener(...arg)
    {
        window.addEventListener(...arg);
    }
    static removeEventListener(...arg)
    {
        window.removeEventListener(...arg);
    }
    static dispatchEvent(event,params)
    {
        if(!(event instanceof Event)){
            event=new Event(event,{cancelable:true});
        }
        event.params=params;
        window.dispatchEvent(event);
    };
}
HistoryNavigation.init();

// exemple

HistoryNavigation.addEventListener('popstate',function(event){
    console.log('Will not start because they blocked the work');
});
HistoryNavigation.addEventListener('history.go',function(event){
    event.params.event.stopImmediatePropagation();// blocked popstate listeners
    console.log(event.params);
    // back or forward - see event.params.delta

});
HistoryNavigation.addEventListener('history.state.push',function(event){
    console.log(event);
});
HistoryNavigation.addEventListener('history.state.replace',function(event){
    console.log(event);
});
history.pushState({h:'hello'},'','');
history.pushState({h:'hello2'},'','');
history.pushState({h:'hello3'},'','');
history.back();
