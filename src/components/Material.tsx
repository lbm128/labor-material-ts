import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addMaterial } from '../store/thunks/materialThunk';

const Material = () => {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [sqftGal, setSqftGal] = useState(0);
  const [calculated, setCalculated] = useState(0);

  const dispatch = useDispatch();

  const handleCalculate = () => {
    const calculatedTotal = ((length * width) / sqftGal).toFixed(2);
    setCalculated(calculatedTotal);

    dispatch(addMaterial({calculatedTotal}));
  };

  const handleReset = () => {
    setLength(0);
    setWidth(0);
    setSqftGal(0);
    setCalculated(0);
  }

  const handleLength = (e) => {
    setLength(e.target.value);
  };

  const handleWidth = (e) => {
    setWidth(e.target.value);
  };

  const handleSqftGal = (e) => {
    setSqftGal(e.target.value);
  };

  return (
    <div>
      <div className="nav-link-container">
        <Link to="/" className="nav-link" data-text="Home">
          <span>Back Home</span>
        </Link>
      </div>
      <h1>Material</h1>
      <div className="input-container">
        <p>sqft/gallon</p>
        <input value={sqftGal} onChange={handleSqftGal} />
      </div>
      <div className="input-container">
        <p>Length</p>
        <input value={length} onChange={handleLength} />
      </div>
      <div className="input-container">
        <p>Width</p>
        <input value={width} onChange={handleWidth} />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <button onClick={handleReset}>Reset</button>
      <p>{calculated} gallons required</p>
    </div>
  );
};

export default Material;