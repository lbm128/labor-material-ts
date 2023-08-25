import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { loadLaborAsyncThunk } from 'store/thunks/laborThunk';
import { loadMaterialAsyncThunk } from 'store/thunks/materialThunk';
import { AppDispatch } from 'store';
import Navigation from 'components/Navigation';



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
      <Navigation />
      <h1 className='swdc-typeset-display-1' style={{ margin: '50px 0 30px 0' }}>
        Home
      </h1>
      <div className='swdc-flex swdc-justify-center' style={{gap: "50px"}}>
        <div className='labor-column'>
          <p className='swdc-typeset-ui-2' style={{marginBottom: '10px'}}>
            <b>Labor History</b>
          </p>
          {laborHistory.map((entry: string, i: number) => (
            <p className='swdc-typeset-ui-3' key={i} style={{padding: '5px'}}>
              ${entry}
            </p>
          ))}
        </div>
        <div className='material-column'>
          <p className='swdc-typeset-ui-2' style={{marginBottom: '10px'}}>
            <b>Material History</b>
          </p>
          {materialHistory.map((entry: string, i: number) => (
            <p className='swdc-typeset-ui-3' key={i} style={{padding: '5px'}}>
              {entry} gallons
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
