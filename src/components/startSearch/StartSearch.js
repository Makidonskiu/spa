import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useNavigate } from 'react-router-dom';

import './startSearch.css';

export const StartSearch = ({ value, setValue }) => {
  const navigate = useNavigate();

  const onClick = () => {
    if(value !== '') navigate('/home');
  };

  const clickEnter = (e) => {
    if(e.key === 'Enter' && value !== '') navigate('/home');
  }
  
  return (
    <div className="start-search">
      <h1>Поиск видео</h1>
      <InputGroup className="mb-3 max-but center">
        <Form.Control
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
