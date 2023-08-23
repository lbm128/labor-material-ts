import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Labor from './components/Labor';
import Material from './components/Material';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/labor" element={<Labor />} />
            <Route path="/material" element={<Material />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
