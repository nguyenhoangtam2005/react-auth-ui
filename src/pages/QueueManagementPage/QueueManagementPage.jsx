import React from 'react';
import './QueueManagementPage.css';
import MainLayout from '../../components/layout/MainLayout';
import Inputsearch from '../../components/common/InputSearch/InputSearch';
import Tabs from '../../components/common/Tabs/tabs'
import '../../components/layout/MainLayout.css';
import QueueManagementPage from '../../components/common/QueueTable/QueueTable'
import Dropsdown from '../../components/common/Dropdown/dropdown'

function Customer() {
  return (
   <MainLayout>
    <h1 className='Title_callManagement'>Hàng chờ</h1>
   <div className="body_content">
     <div className='container'>
       <div className='Input_search'>
         <Inputsearch />
          <div className="dropsdown">
            <Dropsdown />
            <Dropsdown />
          </div>
       </div>
       <div className='Tabs'>
         <Tabs />
       </div>
       <QueueManagementPage />
     </div>
   </div>
   </MainLayout>
  );
}

export default Customer;
