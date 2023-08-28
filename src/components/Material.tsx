import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from '@prism/dropcloth';

import { addMaterialAsyncThunk } from 'store/thunks/materialThunk';
import { AppDispatch } from 'store';
import Navigation from 'components/Navigation';

const Material = () => {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [sqftGal, setSqftGal] = useState(0);
  const [calculated, setCalculated] = useState('0.00');

  const dispatch = useDispatch<AppDispatch>();

  const handleCalculate = () => {
    const calculatedTotal = ((length * width) / sqftGal).toFixed(2);
    setCalculated(calculatedTotal);

    dispatch(addMaterialAsyncThunk(calculatedTotal));
  };

  const handleReset = () => {
    setLength(0);
    setWidth(0);
    setSqftGal(0);
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

  const handleSqftGal = (e: Event) => {
    const target = e.target as HTMLInputElement;

    setSqftGal(Number(target.value));
  };

  return (
    <div>
      <Navigation />
      <h1 className='swdc-typeset-display-1 swdc-mt-[50px] swdc-mb-[30px]'>
        Material
      </h1>
      <div className='input-container'>
        <p className='swdc-typeset-ui-2'>sqft/gallon</p>
        <Input value={sqftGal} onChange={(e: any) => handleSqftGal(e)} className='swdc-input swdc-w-[initial!important]' />
      </div>
      <div className='input-container'>
        <p className='swdc-typeset-ui-2'>Length</p>
        <Input value={length} onChange={(e: any) => handleLength(e)} className='swdc-input swdc-w-[initial!important]' />
      </div>
      <div className='input-container'>
        <p className='swdc-typeset-ui-2'>Width</p>
        <Input value={width} onChange={(e: any) => handleWidth(e)} className='swdc-input swdc-w-[initial!important]' />
      </div>
      <div className='swdc-flex swdc-justify-center swdc-my-[30px] swdc-mx-[auto] swdc-gap-[20px]'>
        <Button variant='filled' onClick={handleCalculate}>
          Calculate
        </Button>
        <Button variant='outlined' onClick={handleReset}>
          Reset
        </Button>
      </div>
      <p className='swdc-typeset-display-3'>{calculated} gallons required</p>
    </div>
  );
};

export default Material;
