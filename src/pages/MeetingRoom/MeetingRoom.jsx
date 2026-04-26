import React, { useState } from 'react';
import MeetingRoom from '../../components/common/TableMeetingRoom/TableMeetingRoom';
import Inputsearch from '../../components/common/InputSearch/InputSearch';

function Meeting() {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div>
      <div className="body_content">
        <h1>Phòng họp</h1>
        <Inputsearch onSearch={setSearchKeyword} value={searchKeyword}></Inputsearch>
        <MeetingRoom searchKeyword={searchKeyword}></MeetingRoom>
      </div>
    </div>
  );
}

export default Meeting;
