import React from 'react';
import './App.css';
import './scribbr.css';
import HomeTemplate from './screens/HomeTemplate';
import Modal from 'react-modal';

Modal.setAppElement('#root')


function App() {

  return (
    <div className="App">
      <HomeTemplate />
    </div>
  );
}

export default App;
