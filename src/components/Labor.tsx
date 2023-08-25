import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Menu, MenuTrigger, MenuContent, Button, Input } from '@prism/dropcloth';

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
      <Menu placement='bottom-start'>
        <MenuTrigger asChild style={{ marginTop: '30px' }}>
          <Button variant='outlined'>Menu</Button>
        </MenuTrigger>
        <MenuContent className='test-menu' style={{ padding: '15px' }}>
          <div className='swdc-flex swdc-flex-col' style={{ gap: '15px' }}>
            <div className='nav-link-container'>
              <Link to='/' className='swdc-button swdc-button--filled' data-text='Home'>
                <span>Home</span>
              </Link>
            </div>
            <div className='nav-link-container'>
              <Link to='/labor' className='swdc-button swdc-button--outlined' data-text='Home'>
                <span>Labor</span>
              </Link>
            </div>
            <div className='nav-link-container'>
              <Link to='/material' className='swdc-button swdc-button--filled' data-text='Home'>
                <span>Material</span>
              </Link>
            </div>
          </div>
        </MenuContent>
      </Menu>
      <h1 className='swdc-typeset-display-1' style={{ margin: '50px 0 30px 0' }}>
        Labor
      </h1>
      <div className='input-container'>
        <p className='swdc-typeset-ui-2'>$/sqft</p>
        <Input value={price} onChange={(e: any) => handlePrice(e)} style={{ width: 'initial' }} />
      </div>
      <div className='input-container'>
        <p className='swdc-typeset-ui-2'>Length</p>
        <Input value={length} onChange={(e: any) => handleLength(e)} style={{ width: 'initial' }} />
      </div>
      <div className='input-container'>
        <p className='swdc-typeset-ui-2'>Width</p>
        <Input value={width} onChange={(e: any) => handleWidth(e)} style={{ width: 'initial' }} />
      </div>
      <div className='swdc-flex swdc-justify-center' style={{ margin: '30px auto', gap: '20px' }}>
        <Button variant='filled' onClick={handleCalculate}>
          Calculate
        </Button>
        <Button variant='outlined' onClick={handleReset}>
          Reset
        </Button>
      </div>
      <p className='swdc-typeset-display-3'>Labor price: ${calculated}</p>
    </div>
  );
};

export default Labor;
