import React from 'react';
import { DownOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import './dropdown.css'
const handleButtonClick = e => {
  message.info('Click on left button.');
  console.log('click left button', e);
};
const handleMenuClick = e => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const App = () => (
  <Space wrap>
 <Dropdown menu={menuProps}>
      <Button onClick={handleButtonClick} icon={<DownOutlined />} iconPlacement="end">
        DND
      </Button>
    </Dropdown>
  </Space>
);
export default App;