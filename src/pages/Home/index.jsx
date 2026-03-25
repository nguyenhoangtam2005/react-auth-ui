import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import './Home.scss';
import Header from '../../components/header';


function Home() {
  return (
    <MainLayout header={<h3 className="home-title">Dashboard</h3>}>
      <div className="home-card">
       <Header></Header> 
        <p>Trang Home mẫu để sẵn cấu trúc.</p>
      </div>
    </MainLayout>
  );
}

export default Home;
