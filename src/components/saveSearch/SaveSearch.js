import React from 'react';

import { IntegerStep } from '../index';

import { Button } from 'antd';

import { useNavigate } from 'react-router-dom';

import './save.css';

export const SaveSearch = ({ value, setValue, favorites, setFavorites, number, setNumber}) => {
  const navigate = useNavigate();

  const startSearchSave = (data, step) => {
    const obj = {
      data: data,
      itemStep: step,
    };
    navigate('/home');
    setFavorites([...favorites, obj]);
    localStorage.setItem('saveSearch', JSON.stringify([...favorites, obj]));
  };

  return (
    <div className="saveSearch">
      <div className="saveSearchInputs">
        <h4>
          <b>Сохранить запрос</b>
        </h4>
        <div className="input">
          <label className="saveLabel" htmlFor="request">
            Запрос
          </label>
          <input className="saveInput" id="request" type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
        </div>
        <div className="input">
          <label className="saveLabel" htmlFor="title">
            Название
          </label>
          <input className="saveInput" id="title" type="text" placeholder="Укажите название" />
        </div>
        <div className="input">
          <label className="saveLabel" htmlFor="sort">
            Сортировать по
          </label>
          <input className="saveInput" id="sort" type="text" placeholder="Без сортировки" />
        </div>
        <div className="slider">
          <IntegerStep setNumber={setNumber} />
        </div>
        <div className="saveButtons">
          <Button
            onClick={() => navigate('/home')}
            className="saveButton"
            type="primary"
            ghost={false}>
            Не сохранять
          </Button>
          <Button
            onClick={()=>startSearchSave(value, number)}
            className="saveButton"
            type="primary"
            ghost={false}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
};
