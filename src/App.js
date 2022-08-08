import React from 'react';

import './App.css';
import { Header, StartSearch, Home, Favorite, Register } from './components/index';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [value, setValue] = React.useState('');
  const [ favorites, setFavorites ] = React.useState([]);
  const [ regis, setRegis ] = React.useState([]);

  // if(!(regis.login === 'alex' && regis.password === 'mos')){
  //   return <Register setRegis={setRegis}/>
  // }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<StartSearch value={value} setValue={setValue} />} />
        <Route path="/home" element={<Home value={value} setValue={setValue} favorites={favorites} setFavorites={setFavorites}/>} />
        <Route path="/favorite" element={<Favorite favorites={favorites} setFavorites={setFavorites} setValue={setValue}/>} />
      </Routes>
    </div>
  );
}

export default App;
