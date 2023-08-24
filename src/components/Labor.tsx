import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Input } from '@prism/dropcloth';

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
      <div className='nav-link-container'>
        <Link to='/' className='swdc-button swdc-button--text nav-link' data-text='Home'>
          <span>Back Home</span>
        </Link>
      </div>
      <h1 className='swdc-typeset-display-2'>Labor</h1>
      <div className='input-container'>
        <p className='swdc-typeset-ui-2'>$/sqft</p>
        <Input
          value={price}
          onChange={(e: any) => handlePrice(e)}
          style={{ width: 'initial' }}
        />
      </div>
      <div className='input-container'>
        <p className='swdc-typeset-ui-2'>Length</p>
        <Input
          value={length}
          onChange={(e: any) => handleLength(e)}
          style={{ width: 'initial' }}
        />
      </div>
      <div className='input-container'>
        <p className='swdc-typeset-ui-2'>Width</p>
        <Input
          value={width}
          onChange={(e: any) => handleWidth(e)}
          style={{ width: 'initial' }}
        />
      </div>
      <Button
        variant='filled'
        onClick={handleCalculate}>
          Calculate
      </Button>
      <Button
        variant='outlined'
        onClick={handleCalculate}>
          Reset
      </Button>
      <p className='swdc-typeset-display-3'>Labor price: ${calculated}</p>
    </div>
  );
};

export default Labor;
