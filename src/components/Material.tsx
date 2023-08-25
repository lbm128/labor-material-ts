import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Menu, MenuTrigger, MenuContent, Button, Input } from '@prism/dropcloth';

import { addMaterialAsyncThunk } from 'store/thunks/materialThunk';
import { AppDispatch } from 'store';

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
  }

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
      <Menu placement="bottom-start">
        <MenuTrigger asChild  style={{marginTop: '30px'}}>
          <Button variant="outlined">
            Menu
          </Button>
        </MenuTrigger>
        <MenuContent className="test-menu" style={{padding: "15px"}}>
          <div className='swdc-flex swdc-flex-col' style={{gap: "15px"}}>
            <div className='nav-link-container' >
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
      <h1 className='swdc-typeset-display-1' style={{margin: '50px 0 30px 0'}}>Material</h1>
      <div className='input-container'>
        <p className='swdc-typeset-ui-2'>sqft/gallon</p>
        <Input
          value={sqftGal}
          onChange={(e: any) => handleSqftGal(e)}
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
      <div style={{margin: '30px 0'}}>
        <Button
          variant='filled'
          onClick={handleCalculate}>
            Calculate
        </Button>
        <Button
          variant='outlined'
          onClick={handleReset}>
            Reset
        </Button>
      </div>
      <p className='swdc-typeset-display-3'>{calculated} gallons required</p>
    </div>
  );
};

export default Material;