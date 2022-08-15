import React from 'react';

import { IntegerStep } from '../index';

import { Button } from 'antd';

import './save.css';

export const SaveSearch = ({ value }) => {
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
          <input className="saveInput" id="request" type="text" placeholder={value} />
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
          <IntegerStep />
        </div>
        <div className="saveButtons">
          <Button className="saveButton" type="primary" ghost={false}>
            Не изменять
          </Button>
          <Button className="saveButton" type="primary" ghost={false}>
            Изменить
          </Button>
        </div>
      </div>
    </div>
  );
};
