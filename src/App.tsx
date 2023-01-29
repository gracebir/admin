import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register';

function App() {
  return (
    <div>
     <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
