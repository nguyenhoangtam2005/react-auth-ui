import React from 'react';
import { Layout, Menu, theme } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons';

import { Breadcrumb } from 'antd';
import './UsersLayout.css';
import Inputsearch from '../common/InputSearch/InputSearch';
import FillterInput from '../common/FilterInput/FilterInput';
import Tabs from '../common/Tabs/tabs'
import Avatar from '../common/Avatar/avatar';
import StatisticsCards from '../common/StatisticsCards/StatisticsCards';
import CallPad from '../common/CallPad/CallPad';
import EmployeeTable from '../common/EmployeeTable/EmployeeTable';
import CallHistoryItem from '../common//CallHistoryItem/CallHistoryItem';
const { Header, Content, Footer, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);
const App = () => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ display: 'Flex' ,justifyContent: 'space-between', padding: '0 20px 0 20px', background: '#ffffff' }}> 
            <Inputsearch> </Inputsearch >
            <Avatar></Avatar>
        </Header>
        <div className='breadcrumb' style={{margin: '12px 0px 0px 20px'}}>
               <Breadcrumb
      items={[
        {
          title: 'Home',
        },
        {
          title: <a href="">Application Center</a>,
        },
        {
          title: <a href="">Application List</a>,
        },
        {
          title: 'An Application',
        },
      ]}
    />
        </div>
        <Content style={{ margin: '12px 16px 0' }}>
         <div className='content'>
            <div>
                <div className="card_container">
                  <StatisticsCards ></StatisticsCards >
                  <div className="container_call">
                    <CallPad></CallPad>
                    <EmployeeTable></EmployeeTable>
                  </div>
                </div>
                  <div className="tablehome">
                    <h1 className='title_tablecalltoday'>Cuộc gọi hôm nay</h1>
                    <div className="inputseach_FillterInput">
                       <Inputsearch></Inputsearch>
                       <FillterInput></FillterInput>
                    </div>
                    <Tabs></Tabs>
                    <CallHistoryItem></CallHistoryItem>
                  </div>
            </div>
         </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
