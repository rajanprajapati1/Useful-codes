import { Badge, DialogBox } from "griffinui";
import { useState, useCallback } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./index.css";
import _ from 'lodash';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState([25, 75]);

  // Debounced function for handling slider and input changes
  const debouncedSetSliderValue = useCallback(
    _.debounce((values) => {
      setSliderValue(values);
      console.log(values);
    }, 300),
    []
  );

  const handleSliderInput = (values) => {
    debouncedSetSliderValue(values);
  };

  const handleNumberInputChange = (index, event) => {
    const newValue = parseFloat(event.target.value);
    setSliderValue((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = isNaN(newValue) ? prevValues[index] : newValue;
      debouncedSetSliderValue(newValues);
      return newValues;
    });
  };

  const handleConfirm = () => {
    console.log("Confirmed!");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    console.log("Cancelled!");
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-screen flex flex-col gap-4 bg-teal-500">
      <div className="flex justify-center flex-col gap-3 items-center h-screen bg-gray-100">
        <div className="slider w-1/2 flex flex-col">
          <RangeSlider
            id="range-slider"
            value={sliderValue}
            onInput={handleSliderInput}
            min={0}
            max={100}
            step={0.1}
          />
          <div className="box">
            <input
              type="number"
              step={0.1}
              max={100}
              min={0}
              value={sliderValue[0]}
              onChange={(e) => handleNumberInputChange(0, e)}
              className="border rounded-sm bg-teal-500 text-black"
            />
            <input
              type="number"
              step={0.1}
              max={100}
              min={0}
              value={sliderValue[1]}
              onChange={(e) => handleNumberInputChange(1, e)}
              className="border rounded-sm bg-teal-500 text-black"
            />
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Open Confirm Modal
        </button>
        <DialogBox
          isOpen={isModalOpen}
          onClose={handleCancel}
          onConfirm={handleConfirm}
          message="Are you sure you want to proceed with this action?"
          confirmText="Confirm"
          cancelText="Cancel"
          confirmButtonStyle="bg-red-500 text-white"
          cancelButtonStyle="bg-gray-400 text-white"
          variant="SpaceX"
        />
      </div>
    </div>
  );
};

export default App;
