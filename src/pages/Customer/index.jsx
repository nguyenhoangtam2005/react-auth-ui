import React from 'react';
import './customer.css';
import Inputsearch from '../../components/common/InputSearch/InputSearch';
import MyTabs from '../../components/common/Tabs/tabs';
import '../../components/layout/MainLayout.css';
import CustomerTable from '../../components/common/CustomerTable/customerTable';

const Customer = () => {
  const customerTabItems = [
    {
      key: '1',
      label: 'Hoạt động',
      children: <CustomerTable status="active" />  
    },
    {
      key: '2',
      label: 'Chưa hoạt động',
      children: <CustomerTable status="inactive" />
    },
  ];

  return (
    <div>
      <h1 className='Title_callManagement'>Quản lý khách hàng</h1>
      <div className='container'>
        <div className='Input_search'>
          <Inputsearch />
        </div>
        <div className='Tabs'>
          <MyTabs items={customerTabItems} defaultActiveKey="1" />
        </div>
      </div>
    </div>
  );
}; 

export default Customer; 