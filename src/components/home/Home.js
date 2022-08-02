import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import axios from 'axios'

import "./home.css";

export const Home = ({ value, setValue }) => {

    const [date, setData] = React.useState(null)

    React.useEffect(()=>{
        (async function (){
            const data  = await axios.get('https://www.googleapis.com/youtube/v3/search')
            setData(data)
        })()
    }, [])
    console.log(date)
  return (
    <div className='home'>
      <h2>Поиск видео</h2>
      <InputGroup className="mb-3 max-but">
        <Form.Control
          value={value}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Что хотите посмотреть ?"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button  className="w-button" variant="info" id="button-addon1">
          Найти
        </Button>
      </InputGroup>
    </div>
  );
};
