// Deploy Link 
https://66ad7f9664f3fcffd6378237--harmonious-pudding-c5e351.netlify.app/

// React Componnet file
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const img =
  "https://cdn11.bigcommerce.com/s-ri7ypgcv6a/images/stencil/608x608/products/24765/774152/BT457YE-R029-A__29413.1718884117.jpg?c=1";

const main =
  "https://cdn.caratlane.com/media/catalog/product/J/R/JR05926-1YP600_1_lar.jpg";

const Product = {
  name: "Drizzle 0.51ct Lab Grown Diamond Ring R-00363WHT",
  metalColor: [
    { color: "Yellow Gold" },
    { color: "Rose Gold" },
    { color: "White Gold" },
    { color: "Platinum" },
    { color: "Silver" },
  ],
  price: "INR 999,99",
  sizes: ["6nm", "7nm", "9nm", "10nm"],
  materialType: "Diamond",
  stoneColors: ["White", "Blue", "Pink", "Yellow", "Green"],
  metalTypes: [
    { type: "22K", color: "Yellow Gold" },
    { type: "18K", color: "Rose Gold" },
    { type: "14K", color: "White Gold" },
    { type: "10K", color: "Platinum" },
    { type: "9K", color: "Silver" },
  ],
};
const App = () => {
  const Navigate = useNavigate();
  const [Msg, setMsg] = useState(1);
  const HANNDLEMESSAGE = () => {
    const msg1 = `Hello, Talk to a  Jewellery expert now!`;
    const phoneNumber = "8000817296";
    const productName = encodeURIComponent(Product?.name);
    const productPrice = encodeURIComponent(Product?.price);
    const productDescription = encodeURIComponent(
      `I would like to know more about the following product:\n\nName: ${
        Product?.name
      }\nPrice: ${Product?.price}\nMetal Color: ${
        Product?.metalColor[0].color
      }\nAvailable Sizes: ${Product?.sizes[0]}\nMaterial Type: ${
        Product?.materialType[0]
      }\nStone Colors: ${Product?.stoneColors.slice(0, 1)}\nMetal Types: ${
        Product?.metalTypes[0].type
      }`
    );
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${
      Msg === 1 ? msg1 : productDescription
    }`;
    const newprompt = prompt("msgno");
    setMsg(newprompt);
    return window.location.href = (whatsappUrl);
  };
  return (
    <>
      <div className="section">
        <div className="image-container">
          <div className="thumb-image">
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
          </div>
          <div className="main-image">
            <img src={main} alt="kj" />
          </div>
        </div>
        <div className="details-container">
          <div className="content">
            <h1>{Product?.name}</h1>
            <span>{Product?.price}</span>
            <div className="select">
              <div className="first-row">
                <div className="slr">
                  <label htmlFor="metal">Metal Types</label>
                  <select id="metal">
                    {Product?.metalTypes.map((val) => (
                      <option value={val?.type}>{val?.type}</option>
                    ))}
                  </select>
                </div>
                <div className="slr">
                  <label htmlFor="metal">Metal Color</label>
                  <select id="metal">
                    {Product?.metalTypes.map((val) => (
                      <option value={val?.color}>{val?.color}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="first-row">
                <div className="slr">
                  <label htmlFor="metal">Diamond Types</label>
                  <select id="metal">
                    {Product?.metalColor.map((val) => (
                      <option value={val?.color}>{val?.color}</option>
                    ))}
                  </select>
                </div>
                <div className="slr">
                  <label htmlFor="metal">Color Stone</label>
                  <select id="metal">
                    {Product?.stoneColors.map((val) => (
                      <option value={val}>{val}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="select">
              <div
                className="first-row"
                style={{ width: "50%", border: "none", marginTop: "-10px" }}
              >
                <div className="slr" style={{ border: "none" }}>
                  <label htmlFor="metal">Sizes</label>
                  <div id="metal-id">
                    {Product?.sizes.map((val) => (
                      <div value={val} className="id">
                        {val}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="product-accordian">
              <div className="pd">Product Details</div>
              <div className="mt">Material Details</div>
              <div className="pb">Price Breakup</div>
            </div>
            <div className="btn">
              <div className="cart">Add To Cart</div>
              <div className="wislist">Add To Wishlist</div>
            </div>
            <a target="_blank" onClick={() => HANNDLEMESSAGE()}>
              <div className="wa">
                <div className="left">
                  <img
                    src="https://www.svgrepo.com/show/106976/whatsapp.svg"
                    width={"40px"}
                  />
                </div>
                <div className="con">
                  <h4>
                    Optigo Apps <span>Online</span>
                  </h4>
                  <h3>Need Help ? Chat With Us</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
// Scss Style File


.section {
  height: 100vh;
  display: flex;
  padding: 0 50px;
  /* background-color: teal; */
  .image-container {
    flex: 1;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100vh;
    .thumb-image {
      display: flex;
      flex-direction: column;
      gap: 10px;
      img {
        width: 100px;
        height: 140px;
        margin: 0 15px;
        object-fit: cover;
        &:nth-child(1) {
          border: 2px solid black;
        }
      }
    }
    .main-image {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 70%;
      img {
        width: 100%;
        background-color: rgba(51, 50, 50, 0.171);
        height: 93.5%;
        object-fit: scale-down;
        mix-blend-mode: multiply;
      }
    }
  }
  .details-container {
    flex: 1;
    height: auto;
    display: flex;
    justify-content: flex-start;
    padding: 10px 20px;
    flex-direction: column;
    top: 0;
    h1 {
      font-weight: 550;
    }
    span {
      font-size: 22px;
      font-weight: 500;
      color: rgba(29, 26, 26, 0.938);
    }
    .select {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-top: 15px;
      .first-row {
        display: flex;
        height: 80px;
        align-items: center;
        border-bottom: 2px solid rgba(190, 189, 189, 0.479);
        .slr {
          flex: 1;
          display: flex;
          border-right: 2px solid rgba(190, 189, 189, 0.479);
          flex-direction: column;
          &:nth-child(2) {
            border: none;
            margin-left: 20px;
          }
          select {
            width: 50%;
            padding: 8px 0;
            border: none;
            outline: none;
            background-repeat: no-repeat;
            background-position: right 10px center;
            background-size: 10px;
          }

          select option {
            color: var(--select-color, #ffffff);
            background-color: var(--select-bg, gray);
          }
        }
      }
      #metal-id {
        display: flex;
        gap: 15px;
        .id {
          border: 2px solid rgba(39, 37, 37, 0.151);
          padding: 7px 8px;
          border-radius: 3px;
          font-size: 14px;
          outline: none;
          background-color: rgba(131, 116, 116, 0.062);
          &:active {
            background-color: rgba(85, 82, 82, 0.137);
          }
        }
      }
    }
    .product-accordian {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 30px;
      div {
        height: 40px;
        border: 1px solid rgba(68, 66, 66, 0.438);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
      }
    }
    .btn {
      width: 100%;
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
      div {
        height: 50px;
        background: #c20000;
        border-radius: 3px;
        color: white;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        &:nth-child(2) {
          background-color: rgba(190, 189, 189, 0.479);
          color: gray;
        }
      }
    }
a{
  text-decoration: none;
  color: inherit;
  .wa {
    display: flex;
    align-items: center;
    background-color: #363636;
    width: 60%;
    border-radius: 5px;
    padding: 15px 8px;
    margin-bottom: 15px;
    .left {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .con {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 6px;
      h4 {
        font-size: 15px;
        color: rgba(174, 202, 131, 0.637);
        font-weight: 500;
        span {
          font-size: 13px;
          background-color: greenyellow;
          border-radius: 5px;
          padding: 1px 2px;
          margin-left: 5px;
        }
      }
      h3 {
        font-size: 16px;
        color: white;
        font-weight: 500;
        margin-top: -3px;
      }
    }
  }
}
  }
}
