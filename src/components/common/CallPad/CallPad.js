// CallPad.js
import React, { useState } from 'react';
import { Card, Button, Input, message } from 'antd';
import { DeleteOutlined, PhoneOutlined } from '@ant-design/icons';
import './CallPad.css';

const CallPad = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNumberClick = (num) => {
    if (phoneNumber.length < 15) {
      setPhoneNumber(phoneNumber + num);
    }
  };

  const handleDelete = () => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };

  const handleCall = () => {
    if (phoneNumber) {
      message.success(`Đang gọi đến số: ${phoneNumber}`);
    } else {
      message.warning('Vui lòng nhập số điện thoại');
    }
  };

  const buttons = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#']
  ];

  return React.createElement(Card, 
    { title: "Bàn phím gọi", className: "call-pad" },
    React.createElement('div', { className: "phone-display" },
      React.createElement(Input, {
        value: phoneNumber,
        placeholder: "Nhập số điện thoại",
        size: "large",
        className: "phone-input",
        readOnly: true
      })
    ),
    React.createElement('div', { className: "keypad" },
      buttons.map((row, rowIndex) =>
        React.createElement('div', { key: rowIndex, className: "keypad-row" },
          row.map((btn) =>
            React.createElement(Button, {
              key: btn,
              className: "keypad-btn",
              size: "large",
              onClick: () => handleNumberClick(btn)
            }, btn)
          )
        )
      )
    ),
    React.createElement('div', { className: "action-buttons" },
      React.createElement(Button, {
        danger: true,
        icon: React.createElement(DeleteOutlined),
        size: "large",
        onClick: handleDelete,
        className: "action-btn"
      }, "Xóa"),
      React.createElement(Button, {
        type: "primary",
        icon: React.createElement(PhoneOutlined),
        size: "large",
        onClick: handleCall,
        className: "action-btn call-btn"
      }, "Gọi")
    )
  );
};

export default CallPad;