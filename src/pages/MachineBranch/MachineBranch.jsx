import React from 'react';
import './MachineBranch.css';
import MainLayout from '../../components/layout/MainLayout';
import TableMachineBranch from '../../components/common/TableMachineBranch/TableMachineBranch';
import Inputsearch from '../../components/common/InputSearch/InputSearch';
import Dropsdown from '../../components/common/Dropdown/dropdown';
import Tabs from '../../components/common/Tabs/tabs';

function MachineBranch() {
  return (
    <MainLayout>
      <h1>Nhánh máy</h1>
      <div className="body_content">
       <div className='search_filtermenu'>
        <Inputsearch></Inputsearch>
        <div className="Dropsdown">
        <Dropsdown></Dropsdown>
        <Dropsdown></Dropsdown>
        </div>
      </div>
      <div className="tabmenu">
      <Tabs></Tabs>
      </div>
        <TableMachineBranch></TableMachineBranch>
      </div>
    </MainLayout>
  );
}

export default MachineBranch;