import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import axios from 'axios';

import list from '../../image/list.png';
import grid from '../../image/grid.png';
import imgVideo from '../../image/Video.png';

import './home.css';
import { Cart } from '../index';

const a = '<<';
const b = '>>';

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


export const Home = ({ value, setValue }) => {
  const [activeRules, setActiveRules] = React.useState(false);

  React.useEffect(() => {
    
  }, []);

  return (
    <div className="home">
      <h2>Поиск видео</h2>
      <InputGroup className="mb-3 height">
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

      <div className="home-header">
        <p>
          Видео по запросу{' '}
          <span>
            {' '}
            {a} {value} {b}
          </span>
        </p>
        <div>
            <img onClick={()=> setActiveRules(true)} src={list} alt="rules" />
            <img onClick={()=> setActiveRules(false)} src={grid} alt="rules" />
        </div>
      </div>
      <div className={!activeRules ? 'home-video' : 'home-video2'}>
        {items.map((item, index) => (
          <Cart key={index} text={item.text} img={item.img} textSup={item.textSup} activeRules={activeRules} />
        ))}
      </div>
    </div>
  );
};
