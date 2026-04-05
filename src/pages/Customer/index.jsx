import React from 'react';
import './customer.css';
import MainLayout from '../../components/layout/MainLayout';
import Inputsearch from '../../components/common/InputSearch/InputSearch';
import Tabs from '../../components/common/Tabs/tabs'
import '../../components/layout/MainLayout.css';
import CustomerTable from '../../components/common/CustomerTable/customerTable';

function Customer() {
  return (
   <MainLayout>
     <h1 className='Title_callManagement'>Quản lý khách hàng</h1>
     <div className='container'>
       <div className='Input_search'>
         <Inputsearch />
       </div>
       <div className='Tabs'>
         <Tabs />
       </div>
       <CustomerTable />
     </div>
   </MainLayout>
  );
}

export default Customer;
