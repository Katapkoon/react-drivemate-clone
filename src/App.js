import './App.css';

import { BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'
import { Component,useState } from 'react';

import Home from './pages/HomePage'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignInPage';
import ResponsiveAppBar from './components/AppBar';


function App() {
  return (
   
      <div>

        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </div>
      
  );
}

export default App;
