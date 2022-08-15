import React from 'react'
import { Col, InputNumber, Row, Slider } from 'antd';

export const IntegerStep = () => {
    const [inputValue, setInputValue] = React.useState(1);
  
    const onChange = (newValue) => {
      setInputValue(newValue);
    };
  return (
    <Row>
        <Col span={18}>
          <Slider
            min={1}
            max={50}
            onChange={onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
            style={{
              width: '350px',
            }}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={50}
            style={{
              margin: '0 50px',
              width: '60px',
              height: '35px',
              textAlign: 'center'
            }}
            value={inputValue}
            onChange={onChange}
          />
        </Col>
      </Row>
  )
}


