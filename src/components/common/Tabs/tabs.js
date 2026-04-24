import React from 'react';
import { Tabs } from 'antd';

const MyTabs = ({ items, defaultActiveKey = '1' }) => {
  return (
    <Tabs 
      defaultActiveKey={defaultActiveKey} 
      items={items} 
    />
  );
};

export default MyTabs;