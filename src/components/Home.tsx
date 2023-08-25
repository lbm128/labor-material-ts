import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { loadLaborAsyncThunk } from 'store/thunks/laborThunk';
import { loadMaterialAsyncThunk } from 'store/thunks/materialThunk';
import { AppDispatch } from 'store';

const Home = () => {
  const laborHistory = useSelector(({ labor }) => {
    return labor.laborHistory;
  });
  const materialHistory = useSelector(({ material }) => {
    return material.materialHistory;
  });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadLaborAsyncThunk());
    dispatch(loadMaterialAsyncThunk());
  }, []);

  return (
    <div>
      <div className='swdc-flex swdc-justify-between' style={{marginTop: '30px'}}>
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
      <h1 className='swdc-typeset-display-1' style={{margin: '50px 0 30px 0'}}>Home</h1>
      <div className='history-chart'>
        <div>
          <p className='swdc-typeset-ui-2'><b>Labor History</b></p>
          {laborHistory.map((entry: string, i: number) => <p className='swdc-typeset-ui-3' key={i}>${entry}</p>)}
        </div>
        <div>
          <p className='swdc-typeset-ui-2'><b>Material History</b></p>
          {materialHistory.map((entry: string, i: number) => <p className='swdc-typeset-ui-3' key={i}>{entry} gallons</p>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
