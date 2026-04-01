import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Flex, Layout, Menu, theme } from 'antd';
import { Breadcrumb } from 'antd';
import './layoutnew.css';
import Inputsearch from '../components/InputSearch/InputSearch'
import { AudioOutlined } from '@ant-design/icons';
import Card from '../components/Card/Card';
import CardMain from '../components/card_main/card';
import Table from '../components/table_home/table'
import Inputfilter from '../components/Input_fillter/input';
import Avatar from '../components/Avatar/avatar';
import StatisticsCards from '../components/StatisticsCards/StatisticsCards';
const suffix = <AudioOutlined style={{ fontSize: 16, color: '#1677ff' }} />;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const { Header, Content, Footer, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
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
