import React from 'react';

import './App.css';
import { Header, StartSearch, Home, Favorite, Register, SaveSearch } from './components/index';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [value, setValue] = React.useState('');
  const [favorites, setFavorites] = React.useState([]);
  const [regis, setRegis] = React.useState([]);
  const [video, setVideo] = React.useState([]);
  const [number, setNumber] = React.useState(1)
  const isMounted = React.useRef(true)
  
  const [res, setRes] = React.useState({
    login: '',
    password: '',
  });
  const inputRef = React.useRef(null);

  const objState = {
    value,
    setValue,
    favorites,
    setFavorites,
    regis,
    setRegis,
    video,
    setVideo,
    res,
    setRes,
    inputRef,
    number, 
    setNumber,
  };

  React.useEffect(() => {
    isMounted.current = true
    const regi = JSON.parse(localStorage.getItem('reg')) || [...regis];
    console.log(regi)
    if (regi.login === 'alex' ) {
      setRegis({
        login: regi.login,
        password: regi.password,
      });
     isMounted.current = false
  }
  console.log(regi, regis)
  }, [isMounted.current]);

  if (isMounted.current) {
    return <Register isMounted={isMounted} setRegis={setRegis} />;
  }
    return (
      <div className="App">
        <Header isMounted={isMounted} setRes={setRes} />
        <Routes>
          <Route path="/" element={<StartSearch {...objState} />} />
          <Route path="/home" element={<Home {...objState} />} />
          <Route path="/favorite" element={<Favorite {...objState} />} />
          <Route path="/save" element={<SaveSearch {...objState} />} />
        </Routes>
      </div>
    );
}

export default App;
