import React from 'react';
import FillterInput from '../../components/common/FilterInput/FilterInput';
import Button from '../../components/common/Button/Button';
import '../../components/layout/MainLayout.css';
import './EmployeeManagement.css';
import InputSearch from '../../components/common/InputSearch/InputSearch'
import EmployeeManagementTable from '../../components/common/EmployeeManagementTable/EmployeeManagementTable'
import MyTabs from '../../components/common/Tabs/tabs';

function Users() {

   const userTabItems = [
    {
      key: 'agent-active',
      label: 'Agent (Hoạt động)',
      children: <EmployeeManagementTable role="agent" status="active" />
    },
    {
      key: 'agent-inactive',
      label: 'Agent (Ngưng)',
      children: <EmployeeManagementTable role="agent" status="inactive" />
    },
    {
      key: 'admin-active',
      label: 'Admin (Hoạt động)',
      children: <EmployeeManagementTable role="admin" status="active" />
    },
    {
      key: 'admin-inactive',
      label: 'Admin (Ngưng)',
      children: <EmployeeManagementTable role="admin" status="inactive" />
    }
  ];

  return (
<div>
  <h1>Quản lý nhân viên</h1>
  <div className="body_content">
    <div className="inputserach_btn_fillter">
      <div className="containerinputbnt">
        <div className="InputSearch">
          <InputSearch />
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
