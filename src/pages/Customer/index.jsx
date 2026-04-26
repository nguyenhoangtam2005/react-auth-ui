import React, { useState } from 'react';
import './customer.css';
import Inputsearch from '../../components/common/InputSearch/InputSearch';
import MyTabs from '../../components/common/Tabs/tabs';
import '../../components/layout/MainLayout.css';
import CustomerTable from '../../components/common/CustomerTable/customerTable';

const Customer = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const customerTabItems = [
    {
      key: '1',
      label: 'Hoạt động',
      children: <CustomerTable status="active" searchKeyword={searchKeyword} />
    },
    {
      key: '2',
      label: 'Chưa hoạt động',
      children: <CustomerTable status="inactive" searchKeyword={searchKeyword} />
    },
  ];

  return (
    <div>
      <div className='container'>
        <div className="body_content">
          <h1 className='Title_callManagement'>Quản lý khách hàng</h1>
          <div className='Input_search'>
            <Inputsearch onSearch={setSearchKeyword} value={searchKeyword} />
          </div>
          <div className='Tabs'>
            <MyTabs items={customerTabItems} defaultActiveKey="1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
