import React from 'react';

import { Button } from 'antd';
import './favorite.css';
import { useNavigate } from 'react-router-dom';
import { fetchVideo } from '../fetchVideo/fetchVideo';

export const Favorite = ({ favorites, setFavorites, setValue, setVideo}) => {
  const clickRemove = () => {
    setFavorites([])
    localStorage.removeItem('saveSearch')
  };
  const navigate = useNavigate()

  const clickFavorite = (e, number) => {
    fetchVideo(e.target.innerText, setVideo, number)
    setValue(e.target.innerText)
    navigate('/home')
  }

  const itemRemove = (id) => {
    setFavorites([...favorites.filter((_, index)=> index !== id)])
    localStorage.setItem('saveSearch', JSON.stringify([...favorites]))
  }
 
  React.useEffect( ()=> {
    const saveSearch = JSON.parse(localStorage.getItem('saveSearch'))
    console.log(saveSearch)
    if(saveSearch){
      setFavorites([...saveSearch])
    }else{
      setFavorites(favorites)
    }
  }, [])

  return (
    <div className="favorite">
      <h2>Избранное</h2>
      {(favorites?.length > 0) &&
        <>
          { favorites && favorites.map((item, index) => (
            <div className="favorite-div" key={`${index}_${item}`}>
              <b className='favorite-b' onClick={(e)=>clickFavorite(e, item.itemStep)} >{item?.data}</b>
              <span onClick={()=>itemRemove(index)} className='favorite-span'>&times;</span>
            </div>
          ))}
          <Button onClick={clickRemove} type="primary">Очистить</Button>
        </>
      }
    </div>
  );
};
