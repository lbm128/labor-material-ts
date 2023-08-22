import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addLabor } from '../store/thunks/laborThunk';

const Labor = () => {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [price, setPrice] = useState(0);
  const [calculated, setCalculated] = useState(0);

  const dispatch = useDispatch();

  const handleCalculate = () => {
    const calculatedTotal = (length * width * price).toFixed(2);
    setCalculated(calculatedTotal);

    dispatch(addLabor({calculatedTotal}));
  };

  const handleReset = () => {
    setLength(0);
    setWidth(0);
    setPrice(0);
    setCalculated(0);
  }

  const handleLength = (e) => {
    setLength(e.target.value);
  };

  const handleWidth = (e) => {
    setWidth(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div>
      <div className="nav-link-container">
        <Link to="/" className="nav-link" data-text="Home">
          <span>Back Home</span>
        </Link>
      </div>
      <h1>Labor</h1>
      <div className="input-container">
        <p>$/sqft</p>
        <input value={price} onChange={handlePrice} />
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
      <p>Labor price: ${calculated}</p>
    </div>
  );
};

export default Labor;
