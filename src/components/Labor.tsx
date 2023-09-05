import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addLaborAsyncThunk } from 'store/thunks/laborThunk';
import { AppDispatch } from 'store';
import Navigation from 'components/Navigation';
// import { Input } from '@prism/dropcloth/dist/components/input/input';
// import { Button } from '@prism/dropcloth/dist/components/button/button';

const Labor = () => {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [price, setPrice] = useState(0);
  const [calculated, setCalculated] = useState('0.00');

  const dispatch = useDispatch<AppDispatch>();

  const handleCalculate = () => {
    const calculatedTotal: string = (length * width * price).toFixed(2);
    setCalculated(calculatedTotal);

    dispatch(addLaborAsyncThunk(calculatedTotal));
  };

  const handleReset = () => {
    setLength(0);
    setWidth(0);
    setPrice(0);
    setCalculated('0.00');
  };

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
      <Navigation />
      <h1 className='swdc-typeset-display-1 swdc-mt-[50px] swdc-mb-[30px]'>
        Labor
      </h1>
      <div className='input-container'>
        <p className='swdc-typeset-ui-2'>$/sqft</p>
        <input value={price} onChange={(e: any) => handlePrice(e)} className='swdc-input swdc-w-[initial!important]' />
      </div>
      <div className='input-container'>
        <p className='swdc-typeset-ui-2'>Length</p>
        <input value={length} onChange={(e: any) => handleLength(e)} className='swdc-input swdc-w-[initial!important]' />
      </div>
      <div className='input-container'>
        <p className='swdc-typeset-ui-2'>Width</p>
        <input value={width} onChange={(e: any) => handleWidth(e)} className='swdc-input swdc-w-[initial!important]' />
      </div>
      <div className='swdc-flex swdc-justify-center swdc-my-[30px] swdc-mx-[auto] swdc-gap-[20px]'>
        <button onClick={handleCalculate}>
          Calculate
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
      <p className='swdc-typeset-display-3'>Labor price: ${calculated}</p>
    </div>
  );
};

export default Labor;
