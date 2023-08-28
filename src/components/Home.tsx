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
      <h1 className='swdc-typeset-display-1 swdc-mt-[50px] swdc-mb-[30px]'>
        Home
      </h1>
      <div className='swdc-flex swdc-justify-center swdc-gap-[50px]'>
        <div className='labor-column'>
          <p className='swdc-typeset-ui-2 swdc-mb-[10px]'>
            <b>Labor History</b>
          </p>
          {laborHistory.map((entry: string, i: number) => (
            <p className='swdc-typeset-ui-3 swdc-p-[5px]' key={i}>
              ${entry}
            </p>
          ))}
        </div>
        <div className='material-column'>
          <p className='swdc-typeset-ui-2 swdc-mb-[10px]'>
            <b>Material History</b>
          </p>
          {materialHistory.map((entry: string, i: number) => (
            <p className='swdc-typeset-ui-3 swdc-p-[5px]' key={i}>
              {entry} gallons
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
