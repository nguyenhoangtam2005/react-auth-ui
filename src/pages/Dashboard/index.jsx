import React from 'react';
import Inputsearch from '../../components/common/InputSearch/InputSearch';
import Card from '../../components/common/Card/Card';
import CardMain from '../../components/common/CardMain/CardMain';
import Table from '../../components/common/DataTable/DataTable';
import Inputfilter from '../../components/common/FilterInput/FilterInput';
import './Dashboard.css';
import '../../components/layout/MainLayout.css';

function Dashboard() {
  return (
    <div>
      <div className="body_content">
        <h1>Dashboard giám sát</h1>
        <Card />
         <CardMain />
      </div>
      <div className="tablehome">
        <h1 className="title_table">Cuộc gọi hôm nay</h1>
        <div className="search_fillter">
          <Inputsearch />
          <Inputfilter />
        </div>
        <Table />
      </div>
    </div>
  );
}

export default Dashboard;
