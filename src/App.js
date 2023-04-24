import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './SearchPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>  
        <Route exact path='/' element={< Home />}></Route>  
        <Route exact path='/search' element={< SearchPage />}></Route>  
        {/* <Route exact path='/contact' element={< Contact />}></Route> */}
      </Routes> 
      </BrowserRouter> 
    </div>
  );
}

export default App;
