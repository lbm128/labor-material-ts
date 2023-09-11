import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@prism/dropcloth/dist/components/button/button';

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
        <input aria-label='sqftGallon' value={sqftGal} onChange={(e: any) => handleSqftGal(e)} className='swdc-rounded-sm swdc-border-[1.5px] swdc-border-black/40 swdc-p-1 swdc-font-bold focus:swdc-border-black/100' />
      </div>
      <div className='input-container'>
        <p className='swdc-typeset-ui-2'>Length</p>
        <input aria-label='length' value={length} onChange={(e: any) => handleLength(e)} className='swdc-rounded-sm swdc-border-[1.5px] swdc-border-black/40 swdc-p-1 swdc-font-bold focus:swdc-border-black/100' />
      </div>
      <div className='input-container'>
        <p className='swdc-typeset-ui-2'>Width</p>
        <input aria-label='width' value={width} onChange={(e: any) => handleWidth(e)} className='swdc-rounded-sm swdc-border-[1.5px] swdc-border-black/40 swdc-p-1 swdc-font-bold focus:swdc-border-black/100' />
      </div>
      <div className='swdc-flex swdc-justify-center swdc-my-[30px] swdc-mx-[auto] swdc-gap-[20px]'>
        <Button variant='filled' aria-label='calculate' onClick={handleCalculate}>
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
