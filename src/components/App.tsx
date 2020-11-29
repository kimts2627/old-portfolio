import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import  Sidebar from './Sidebar';
import  Main from './Main';
import  Nav from './Nav';
import '../App.css';

function App() {
  return (
    <div className='App'>
      <Main />
      <Sidebar />
      <Nav />
    </div>
  );
}

export default App;
