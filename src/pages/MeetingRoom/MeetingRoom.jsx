import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MeetingRoom from '../../components/common/TableMeetingRoom/TableMeetingRoom';
import Inputsearch from '../../components/common/InputSearch/InputSearch';

function Meeting() {
  return (
    <MainLayout>
      <h1>Phòng hợp</h1>
      <div className="body_content">
      <Inputsearch></Inputsearch>
      <MeetingRoom></MeetingRoom>
      </div>
    </MainLayout>
  );
}

export default Meeting;