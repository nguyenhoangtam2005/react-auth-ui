import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import FillterInput from '../../components/common/FilterInput/FilterInput';
import Button from '../../components/common/Button/Button';
import '../../components/layout/MainLayout.css';
import './EmployeeManagement.css';
import InputSearch from '../../components/common/InputSearch/InputSearch'
import EmployeeTable from '../../components/common/EmployeeManagementTable/EmployeeManagementTable'


function Users() {
  return (
    <MainLayout>
      <h1>Quản lý nhân viên</h1>
      <div className="body_content">
      <div className="inputserach_btn_fillter">
       <div className="containerinputbnt">
          <div className="InputSearch">
           <InputSearch></InputSearch>
         </div>
          <div className="fillterbtn">
            <FillterInput></FillterInput>
            <Button ></Button>
          </div>
       </div>
          </div>
            <div className='EmployeeManagement_Table'>
            <EmployeeTable></EmployeeTable>
          </div>
      </div>
    </MainLayout>
  );
}

export default Users;
