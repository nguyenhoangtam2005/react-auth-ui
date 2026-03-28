import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import './Home.scss';
import Header from '../../components/header';
import { Flex, Space, Table, Tag } from 'antd';
import Homeheader from '../../components/header'
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];


function Home() {
  return (
  <div className='container'>
    <Homeheader></Homeheader>
   <Table dataSource={dataSource} columns={columns} />;
  </div>
  );
}

export default Home;
