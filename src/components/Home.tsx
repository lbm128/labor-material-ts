import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { loadLabor } from "../store/thunks/laborThunk";
import { loadMaterial } from "../store/thunks/materialThunk";

const Home = () => {
  const laborHistory = useSelector(({ labor }) => {
    return labor.laborHistory;
  });
  const materialHistory = useSelector(({ material }) => {
    return material.materialHistory;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLabor());
    dispatch(loadMaterial());
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div className="nav-link-container">
        <Link to="/labor" className="nav-link" data-text="Home">
          <span>Labor</span>
        </Link>
      </div>
      <div className="nav-link-container">
        <Link to="/material" className="nav-link" data-text="Home">
          <span>Material</span>
        </Link>
      </div>
      <div className='history-chart'>
        <div>
          <p><b>Labor History</b></p>
          {laborHistory.map((entry, i) => <p key={i}>${entry}</p>)}
        </div>
        <div>
          <p><b>Material History</b></p>
          {materialHistory.map((entry, i) => <p key={i}>{entry} gallons</p>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
