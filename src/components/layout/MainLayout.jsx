import React from 'react';
import { Layout, Menu } from 'antd';
import { Breadcrumb } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Inputsearch from '../common/InputSearch/InputSearch';
import Avatar from '../common/Avatar/avatar';
import './MainLayout.css';

const { Header, Content, Footer, Sider } = Layout;

const menuItems = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);

const defaultBreadcrumb = [
  { title: 'Home' },
  { title: <a href="">Application Center</a> },
  { title: <a href="">Application List</a> },
  { title: 'An Application' },
];

const MainLayout = ({ children, breadcrumbItems = defaultBreadcrumb }) => {
  return (
    <Layout className="main-layout">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={menuItems} />
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
