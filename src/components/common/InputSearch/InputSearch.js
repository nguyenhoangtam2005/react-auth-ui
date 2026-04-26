import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import './InputSearch.css';

const { Search } = Input;
const suffix = <AudioOutlined style={{ fontSize: 16, color: '#1677ff' }} />;

const InputSearch = ({ onSearch, placeholder = 'Tìm kiếm...', value }) => (
  <Space vertical>
    <Search
      className='inputsearch'
      placeholder={placeholder}
      enterButton="Search"
      size="large"
      suffix={suffix}
      value={value}
      onChange={(event) => onSearch && onSearch(event.target.value)}
      onSearch={(keyword) => onSearch && onSearch(keyword)}
      allowClear
    />
  </Space>
);

export default InputSearch;
