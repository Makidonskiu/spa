import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// import axios from 'axios';

import list from '../../image/list.png';
import grid from '../../image/grid.png';
import imgVideo from '../../image/Video.png';
import favorite from '../../image/Vector.png'

import './home.css';
import { Cart } from '../index';
import { Link } from 'react-router-dom';

const a = '<< ';
const b = ' >>';

const items = [
  { text: 'Как научится крассиво кодить', img: imgVideo, textSup: 'Школа криворуких тебя научит' },
  { text: 'Как научится крассиво кодить', img: imgVideo, textSup: 'Школа криворуких тебя научит' },
  { text: 'Как научится крассиво кодить', img: imgVideo, textSup: 'Школа криворуких тебя научит' },
  { text: 'Как научится крассиво кодить', img: imgVideo, textSup: 'Школа криворуких тебя научит' },
  { text: 'Как научится крассиво кодить', img: imgVideo, textSup: 'Школа криворуких тебя научит' },
  { text: 'Как научится крассиво кодить', img: imgVideo, textSup: 'Школа криворуких тебя научит' },
  { text: 'Как научится крассиво кодить', img: imgVideo, textSup: 'Школа криворуких тебя научит' },
  { text: 'Как научится крассиво кодить', img: imgVideo, textSup: 'Школа криворуких тебя научит' },
  { text: 'Как научится крассиво кодить', img: imgVideo, textSup: 'Школа криворуких тебя научит' },
  { text: 'Как научится крассиво кодить', img: imgVideo, textSup: 'Школа криворуких тебя научит' },
  { text: 'Как научится крассиво кодить', img: imgVideo, textSup: 'Школа криворуких тебя научит' },
  { text: 'Как научится крассиво кодить', img: imgVideo, textSup: 'Школа криворуких тебя научит' },
];

export const Home = ({ value, setValue, favorites, setFavorites }) => {
  const [activeRules, setActiveRules] = React.useState(false);

  const onFavorites = () => setFavorites([...favorites, value])

  const clickEnter = (e) => {
    if(e.key === 'Enter' && value !== '') {
      setFavorites([...favorites, value]);
    };
  }

  return (
    <div className="home">
      <h2>Поиск видео</h2>
      <InputGroup className="mb-3 height form-boots">
        <Form.Control
          value={value}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Что хотите посмотреть ?"
          onChange={(e) => setValue(e.target.value)}
        /> 
        <Button className="w-button" variant="info" id="button-addon1">
          Найти
        </Button>
      </InputGroup>
       <Link to={'/favorite'}><img className='home-img' onKeyPress={clickEnter} onClick={onFavorites} height={'20px'} src={favorite} alt="favorite" /></Link>
      <div className="home-header">
        <p>
          Видео по запросу
          <span className='home-span'>{a}</span>{value}<span>{b}</span>
        </p>
        <div>
          <img onClick={() => setActiveRules(true)} src={list} alt="rules" />
          <img onClick={() => setActiveRules(false)} src={grid} alt="rules" />
        </div>
      </div>
      <div className={!activeRules ? 'home-video' : 'home-video2'}>
        {items.map((item, index) => (
          <Cart
            key={index}
            text={item.text}
            img={item.img}
            textSup={item.textSup}
            activeRules={activeRules}
          />
        ))}
      </div>
    </div>
  );
};
