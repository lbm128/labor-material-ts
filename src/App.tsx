import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'App.css';
import Home from 'components/Home';
import Labor from 'components/Labor';
import Material from 'components/Material';

import { setupStore } from 'store';
const { store } = setupStore();

function App() {
  return (
    <div className='swdc-container-md App'>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/labor' element={<Labor />} />
            <Route path='/material' element={<Material />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
