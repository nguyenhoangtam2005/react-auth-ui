import React from 'react';
import MeetingRoom from '../../components/common/TableMeetingRoom/TableMeetingRoom';
import Inputsearch from '../../components/common/InputSearch/InputSearch';

function Meeting() {
  return (
    <div>
      <h1>Phòng hợp</h1>
      <div className="body_content">
      <Inputsearch></Inputsearch>
      <MeetingRoom></MeetingRoom>
      </div>
    </div>
  );
}

export default Meeting;