import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  PhoneOutlined,
  ApartmentOutlined,
  HistoryOutlined,
  ClockCircleOutlined,
  VideoCameraOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
import Inputsearch from '../common/InputSearch/InputSearch';
import Avatar from '../common/Avatar/avatar';
import './MainLayout.css';
import Logo from '../../logo.svg'

const { Header, Content, Footer, Sider } = Layout;

const menuItems = [
  { key: '/Dashboard', icon: <DashboardOutlined />, label: 'Tổng quan' },
  { key: '/customers', icon: <TeamOutlined />, label: 'Khách hàng' },
  { key: '/employees', icon: <UserOutlined />, label: 'Nhân viên' },
  { key: '/calls', icon: <PhoneOutlined />, label: 'Gọi' },
  { key: '/MachineBranch', icon: <ApartmentOutlined />, label: 'Nhánh máy' },
  { key: '/CallHistory', icon: <HistoryOutlined />, label: 'Lịch sử cuộc gọi' },
  { key: '/queue', icon: <ClockCircleOutlined />, label: 'Hàng chờ' },
  { key: '/MeetingRoom', icon: <VideoCameraOutlined />, label: 'Phòng họp' },
];

const defaultBreadcrumb = [
  { title: 'Home' },
  { title: <a href="">Application Center</a> },
  { title: <a href="">Application List</a> },
  { title: 'An Application' },
];


const MainLayout = ({ children, breadcrumbItems = defaultBreadcrumb }) => {
  const handleMenuClick = ({ key }) => {
    navigate(key);   // key chính là đường dẫn (VD: '/customers')
  };

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Layout className="main-layout">
      <Sider breakpoint="lg" collapsedWidth="0">
       <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <img src={Logo} alt="Logo" style={{ height: 32 }} />
       </div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]} 
          items={menuItems}
          onClick={handleMenuClick}           
        />
      </Sider>
      <Layout>
        <Header className="layout-header">
          {/* <Inputsearch /> */}
          <Avatar />
        </Header>
        <div className="breadcrumb">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <Content style={{ margin: '12px 16px 0' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;