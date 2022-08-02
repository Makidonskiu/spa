import React from 'react';

import './App.css';
import { Header, StartSearch, Home } from './components/index';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [value, setValue] = React.useState('');

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<StartSearch value={value} setValue={setValue} />} />
        <Route path="/home" element={<Home value={value} setValue={setValue} />} />
      </Routes>
    </div>
  );
}

export default App;
