import React from 'react';
import Inputsearch from '../../components/common/InputSearch/InputSearch';
import FillterInput from '../../components/common/FilterInput/FilterInput';
import Tabs from '../../components/common/Tabs/tabs';
import StatisticsCards from '../../components/common/StatisticsCards/StatisticsCards';
import CallPad from '../../components/common/CallPad/CallPad';
import EmployeeTable from '../../components/common/EmployeeTable/EmployeeTable';
import CallHistoryItem from '../../components/common/CallHistoryItem/CallHistoryItem';
import '../../components/layout/MainLayout.css';
import './Users.css';

function Users() {
  return (
    <div>
      <div className="body_content">
        <h1>Call Center</h1>
        <div className="card_container">
          <StatisticsCards />
          <div className="container_call">
            <CallPad />
            <EmployeeTable />
          </div>
        </div>
        <div className="tablehome">
          <h1 className="title_tablecalltoday">Cuộc gọi hôm nay</h1>
          <div className="inputseach_FillterInput">
            <Inputsearch />
            <FillterInput />
          </div>
          <Tabs />
          <CallHistoryItem />
        </div>
      </div>
    </div>
  );
}

export default Users;
