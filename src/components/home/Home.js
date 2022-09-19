import React from 'react';
//Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//image
import list from '../../image/list.png';
import grid from '../../image/grid.png';
import imgVideo from '../../image/Video.png';
import favorite from '../../image/Vector.png'
//CSS Commponent Router
import './home.css';
import { Link } from 'react-router-dom';
//Components
import { Cart } from '../index';
import { VideoYouTube } from '../videoYouTube/VideoYouTube'
import { fetchVideo } from '../fetchVideo/fetchVideo';


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

export const Home = ({ value, setValue, video, setVideo }) => {
  const [activeRules, setActiveRules] = React.useState(false);

  const clickEnter = (e) => {
    if(e.key === 'Enter' && value !== '') {
      clickHomeSearch()
    };
  }

  const clickHomeSearch = () => {
    fetchVideo(value, setVideo)
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
          onKeyPress={clickEnter} 
        /> 
        <Button onClick={clickHomeSearch} className="w-button" variant="info" id="button-addon1">
          Найти
        </Button>
      </InputGroup>
       { value ? <Link to={'/save'}><img className='home-img cur' height={'25px'} src={favorite} alt="favorite" /></Link> : <img className='home-img' height={'25px'} src={favorite} alt="favorite" />}
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
        { video?.length > 0
        ? 
          <VideoYouTube video={video} activeRules={activeRules}/>
        : 
        items.map((item, index) => (
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
