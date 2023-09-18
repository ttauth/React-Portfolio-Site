import React from 'react';
import Nav from './components/Nav/Nav';
import Logos from './components/Nav/Logos';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <h1>Hi, I'm Ty!</h1>
        <img
          src="src/assets/profilePic.png" 
          alt="Profile"
          className="circular-image"
        />
        <Logos />
      </div>
    </>
  );
}

export default App;