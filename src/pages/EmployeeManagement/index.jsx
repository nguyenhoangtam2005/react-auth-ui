import React, { useState } from 'react';
import FillterInput from '../../components/common/FilterInput/FilterInput';
import Button from '../../components/common/Button/Button';
import '../../components/layout/MainLayout.css';
import './EmployeeManagement.css';
import InputSearch from '../../components/common/InputSearch/InputSearch';
import EmployeeManagementTable from '../../components/common/EmployeeManagementTable/EmployeeManagementTable';
import MyTabs from '../../components/common/Tabs/tabs';

function Users() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const userTabItems = [
    {
      key: 'agent-active',
      label: 'Agent (Hoạt động)',
      children: <EmployeeManagementTable role="agent" status="active" searchKeyword={searchKeyword} />
    },
    {
      key: 'agent-inactive',
      label: 'Agent (Ngưng)',
      children: <EmployeeManagementTable role="agent" status="inactive" searchKeyword={searchKeyword} />
    },
    {
      key: 'admin-active',
      label: 'Admin (Hoạt động)',
      children: <EmployeeManagementTable role="admin" status="active" searchKeyword={searchKeyword} />
    },
    {
      key: 'admin-inactive',
      label: 'Admin (Ngưng)',
      children: <EmployeeManagementTable role="admin" status="inactive" searchKeyword={searchKeyword} />
    }
  ];

  return (
    <div>
      <div className="body_content">
        <h1>Quản lý nhân viên</h1>
        <div className="inputserach_btn_fillter">
          <div className="containerinputbnt">
            <div className="InputSearch">
              <InputSearch onSearch={setSearchKeyword} value={searchKeyword} />
            </div>
            <div className="fillterbtn">
              <FillterInput />
              <Button />
            </div>
          </div>
        </div>
        <div className='EmployeeManagement_Table'>
          <MyTabs items={userTabItems} defaultActiveKey="agent-active" />
        </div>
      </div>
    </div>
  );
}

export default Users;
