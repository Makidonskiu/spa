import React from 'react';
import { Button, Form, Input } from 'antd';
import logo from '../../image/sibdev-logo.png';

import './register.css';
import { useNavigate } from 'react-router-dom';

export const Register = ({ setRegis, isMounted }) => {
  const navigate = useNavigate()

  const onFinish = (values) => {
    if(values.login ==='alex' && values.password === 'mos'){
      isMounted.current = false
      localStorage.setItem('reg', JSON.stringify(values));
      setRegis({
        login: values.login,
        password: values.password
      });
      navigate('/')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="register">
      <img className="register-img" src={logo} alt="logo" />
      <p className="register-img">
        <b>Вход</b>
      </p>
      <Form
        name="basic"
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 10,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item
          label="Логин"
          name="login"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите логин!',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите пароль!',
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 7,
            span: 16,
          }}>
          <Button onClick={onFinish} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
