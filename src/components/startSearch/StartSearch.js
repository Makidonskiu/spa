import React from 'react';
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// Navigation
import { useNavigate } from 'react-router-dom';
// Style
import './startSearch.css';
//Components
import { fetchVideo } from '../fetchVideo/fetchVideo'

export const StartSearch = ({ value, setValue, inputRef, setVideo }) => {
  const navigate = useNavigate();

  const onClick = () => {
    if(value !== '') {
      navigate('/home');
      fetchVideo(value,setVideo)
    }
  };

  const clickEnter = (e) => {
    if(e.key === 'Enter' && value !== '') onClick();
  }

  React.useEffect( () => {
    inputRef.current?.focus()
  }, [inputRef])
  
  return (
    <div className="start-search">
      <h1>Поиск видео</h1>
      <InputGroup className="mb-3 max-but center">
        <Form.Control
          ref={inputRef}
          value={value}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Что хотите посмотреть ?"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={clickEnter}
        />
        <Button onClick={onClick} className="w-button" variant="info" id="button-addon1">
          Найти
        </Button>
      </InputGroup>
    </div>
  );
};
