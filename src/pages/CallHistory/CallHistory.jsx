import React from 'react';
import './CallHistory.css';
import MainLayout from '../../components/layout/MainLayout';
import TableHisstory from '../../components/common/TableCallHistory/TableCallHistory';
import Inputsearch from '../../components/common/InputSearch/InputSearch';
import Dropsdown from '../../components/common/Dropdown/dropdown';
import Tabs from '../../components/common/Tabs/tabs';

function CallHistory() {
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
      </div>
        <TableHisstory></TableHisstory>
      </div>
    </MainLayout>
  );
}

export default CallHistory;