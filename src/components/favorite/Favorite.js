import React from 'react';

import { Button } from 'antd';
import './favorite.css';
import { useNavigate } from 'react-router-dom';

export const Favorite = ({ favorites, setFavorites, setValue }) => {
  const clickRemove = () => setFavorites([]);
  const navigate = useNavigate()
  const clickFavorite = (e) => {
    setValue(e.target.innerText)
    navigate('/home')
  }
  return (
    <div className="favorite">
      <h2>Избранное</h2>
      {favorites.length ? (
        <>
          {favorites.map((item, index) => (
            <p onClick={clickFavorite} className="favorite-p cur" key={`${index}_${item}`}>
              <b>{item}</b>
            </p>
          ))}
          <Button onClick={clickRemove} type="primary">Очистить</Button>
        </>
      ) : (
        []
      )}
    </div>
  );
};
