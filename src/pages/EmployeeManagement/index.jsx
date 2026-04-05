import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import FillterInput from '../../components/common/FilterInput/FilterInput';
import Button from '../../components/common/Button/Button';
import '../../components/layout/MainLayout.css';
import './EmployeeManagement.css';
import EmployeeTable from '../../components/common/EmployeeManagementTable/EmployeeManagementTable'


function Users() {
  return (
    <MainLayout>
      <div className="body_content">
      <div className="inputserach_btn_fillter">
          <div className="fillterbtn">
            <FillterInput></FillterInput>
            <Button ></Button>
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
