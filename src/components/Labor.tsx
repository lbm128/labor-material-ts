import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addLaborAsyncThunk } from 'store/thunks/laborThunk';
import { AppDispatch } from 'store';

const Labor = () => {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [price, setPrice] = useState(0);
  const [calculated, setCalculated] = useState('0.00');

  const dispatch = useDispatch<AppDispatch>();

  const handleCalculate = () => {
    const calculatedTotal: string = (length * width * price).toFixed(2);
    console.log(calculatedTotal);
    setCalculated(calculatedTotal);

    dispatch(addLaborAsyncThunk(calculatedTotal));
  };

  const handleReset = () => {
    setLength(0);
    setWidth(0);
    setPrice(0);
    setCalculated('0.00');
  }

  const handleLength = (e: Event) => {
    const target = e.target as HTMLInputElement;
    
    setLength(Number(target.value));
  };

  const handleWidth = (e: Event) => {
    const target = e.target as HTMLInputElement;
    
    setWidth(Number(target.value));
  };

  const handlePrice = (e: Event) => {
    const target = e.target as HTMLInputElement;

    setPrice(Number(target.value));
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
        <input value={price} onChange={(e: any) => handlePrice(e)} />
      </div>
      <div className="input-container">
        <p>Length</p>
        <input value={length} onChange={(e: any) => handleLength(e)} />
      </div>
      <div className="input-container">
        <p>Width</p>
        <input value={width} onChange={(e: any) => handleWidth(e)} />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <button onClick={handleReset}>Reset</button>
      <p>Labor price: ${calculated}</p>
    </div>
  );
};

export default Labor;
