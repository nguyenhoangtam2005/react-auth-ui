import React from 'react';
import './QueueManagementPage.css';
import Inputsearch from '../../components/common/InputSearch/InputSearch';
import '../../components/layout/MainLayout.css';
import QueueTable from '../../components/common/QueueTable/QueueTable';
import Dropsdown from '../../components/common/Dropdown/dropdown';

const QueueManagementPage = () => {
  return (
    <div>
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
            {/* Sau này muốn thêm tab thì thêm vào đây */}
          </div>
          <QueueTable />
        </div>
      </div>
    </div>
  );
};

export default QueueManagementPage;