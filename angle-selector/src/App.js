import React, {useState} from 'react';
import './App.css'; // Make sure to create this CSS file

function App() {

  const [inputValue, setInputValue] = useState();

  const handleInputChange = (event) => {
    let value = parseInt(event.target.value, 10);
    // if (isNaN(value)) value = 0;
    setInputValue(Math.max(0, Math.min(360, value))); // Clamp the value between 0 and 360
  };  

  const handleChange = (event) => {
    setInputValue(Number(event.target.value));
  };

  return (
    <div className="App">
      <div className="input-container">
        <label>
          Text input: 
          <input 
            type="number" 
            name="myInput" 
            min="0" 
            max="360" 
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
        <input type="range" min="0" max="360" className="slider" value={inputValue} onChange={handleChange}/>
      </div>
  
      <div className="radio-buttons">

          <label>
            <input type="radio" name="myRadio" value="0" checked={inputValue === 0} onChange={handleChange}/>
            0
          </label>

          <label>
            <input type="radio" name="myRadio" value="45" checked={inputValue === 45} onChange={handleChange}/>
            45
          </label>

          <label>
            <input type="radio" name="myRadio" value="90" checked={inputValue === 90} onChange={handleChange}/>
            90
          </label>

          <label>
            <input type="radio" name="myRadio" value="180" checked={inputValue === 180} onChange={handleChange}/>
            180
          </label>

      </div>
    </div>
  );
}

export default App;
