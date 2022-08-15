import React from 'react';

import './App.css';
import { Header, StartSearch, Home, Favorite, Register, SaveSearch } from './components/index';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [value, setValue] = React.useState('');
  const [ favorites, setFavorites ] = React.useState([]);
  const [ regis, setRegis ] = React.useState([]);
  const [ res, setRes ] = React.useState({
    login: '',
    password: '',
  });

  React.useEffect( () => {
    const regi = JSON.parse(localStorage.getItem('reg'))
    setRes({
      login: regi.login,
      password:regi.password
    })
  }, [])

  if(!(res.login === 'alex' && res.password === 'mos')){
    return <Register setRegis={setRegis}/>
  }

  console.log(res)
  return (
    <div className="App">
      <Header regis={regis} setRes={setRes}/>
      <Routes>
        <Route path="/" element={<StartSearch value={value} setValue={setValue} />} />
        <Route path="/home" element={<Home value={value} setValue={setValue} favorites={favorites} setFavorites={setFavorites}/>} />
        <Route path="/favorite" element={<Favorite favorites={favorites} setFavorites={setFavorites} setValue={setValue}/>} />
        <Route path="/save" element={<SaveSearch value={value}/>}/>
      </Routes>
    </div>
  );
}

export default App;
