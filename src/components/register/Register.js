import React from 'react';
import { Button, Form, Input } from 'antd';
import logo from '../../image/sibdev-logo.png';

import './register.css'
import { useNavigate } from 'react-router-dom';

export const Register = ({setRegis}) => {
    const onFinish = (values) => setRegis(values);
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const navigate = useNavigate()
  return (
    <div className='register'>
      <img className='register-img' src={logo} alt="logo" />
      <p className='register-img'><b>Вход</b></p>
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
          <Button onClick={()=> navigate('/')} type="primary" htmlType="submit"> 
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
