import React, { useState } from 'react';
import { Select } from 'antd';
import './QueueManagementPage.css';
import Inputsearch from '../../components/common/InputSearch/InputSearch';
import '../../components/layout/MainLayout.css';
import QueueTable from '../../components/common/QueueTable/QueueTable';
import Dropsdown from '../../components/common/Dropdown/dropdown';

const QueueManagementPage = () => {
  const [statusFilter, setStatusFilter] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  return (
    <div>
      <div className="body_content">
        <h1 className='Title_callManagement'>Hàng chờ</h1>
        <div className='container'>
          <div className='Input_search' style={{ display: 'flex', gap: 8 }}>
            <Inputsearch onSearch={setSearchKeyword} />
            <Select
              style={{ minWidth: 140, height: 32 }}
              placeholder="Trạng thái"
              value={statusFilter}
              onChange={v => setStatusFilter(v)}
              options={[
                { value: 'active', label: 'Hoạt động' },
                { value: 'pause', label: 'Tạm ngừng' },
              ]}
            />
          </div>
          <div className='Tabs'>
            {/* Sau này muốn thêm tab thì thêm vào đây */}
          </div>
          <QueueTable statusFilter={statusFilter} searchKeyword={searchKeyword} />
        </div>
      </div>
    </div>
  );
};

export default QueueManagementPage;
