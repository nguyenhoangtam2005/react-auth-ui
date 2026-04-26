import React, { useState } from 'react';
import { Select } from 'antd';
import Inputsearch from '../../components/common/InputSearch/InputSearch';
import Tabs from '../../components/common/Tabs/tabs';
import TableMachineBranch from '../../components/common/TableMachineBranch/TableMachineBranch';
import '../../components/layout/MainLayout.css';
import './MachineBranch.css';

function MachineBranch() {
  const [trangThaiFilter, setTrangThaiFilter] = useState(null);
  const [dndFilter, setDndFilter] = useState(null);
  const [hoatDongFilter, setHoatDongFilter] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div>
      <div className="body_content">
        <h1>Nhánh máy</h1>
        <div className='search_filtermenu'>
          <Inputsearch onSearch={setSearchKeyword} />
          <div className="Dropsdown" style={{ display: 'flex', gap: 8 }}>
            <Select
              style={{ minWidth: 120, height: 32 }}
              placeholder="Trạng thái"
              value={trangThaiFilter}
              onChange={v => setTrangThaiFilter(v)}
              options={[
                { value: 'Online', label: 'Online' },
                { value: 'Offline', label: 'Offline' },
              ]}
            />
            <Select
              style={{ minWidth: 120, height: 32 }}
              placeholder="DND"
              value={dndFilter}
              onChange={v => setDndFilter(v)}
              options={[
                { value: 'Bật', label: 'Bật' },
                { value: 'Tắt', label: 'Tắt' },
              ]}
            />
            <Select
              style={{ minWidth: 120, height: 32 }}
              placeholder="Hoạt động"
              value={hoatDongFilter}
              onChange={v => setHoatDongFilter(v)}
              options={[
                { value: 'Hoạt động', label: 'Hoạt động' },
                { value: 'Tạm khóa', label: 'Tạm khóa' },
              ]}
            />
          </div>
        </div>
        <div className="tabmenu">
          <Tabs />
        </div>
        <TableMachineBranch
          trangThaiFilter={trangThaiFilter}
          dndFilter={dndFilter}
          hoatDongFilter={hoatDongFilter}
          searchKeyword={searchKeyword}
        />
      </div>
    </div>
  );
}

export default MachineBranch;
