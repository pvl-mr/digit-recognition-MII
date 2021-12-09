import React from 'react';
import './App.css';
import Draw from './components/Draw';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route exact path='/' element={<About />} />
          <Route path='/draw' element={<Draw />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
