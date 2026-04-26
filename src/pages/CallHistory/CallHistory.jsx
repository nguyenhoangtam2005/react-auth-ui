import React, { useState } from 'react';
import './CallHistory.css';
import TableHisstory from '../../components/common/TableCallHistory/TableCallHistory';
import Inputsearch from '../../components/common/InputSearch/InputSearch';
function CallHistory() {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div>
      <div className="body_content">
        <h1>Lịch sử cuộc gọi</h1>
        <div className='search_filtermenu'>
          <Inputsearch onSearch={setSearchKeyword} value={searchKeyword}></Inputsearch>
        </div>
        <div className="tabmenu">
        </div>
        <TableHisstory searchKeyword={searchKeyword}></TableHisstory>
      </div>
    </div>
  );
}

export default CallHistory;
