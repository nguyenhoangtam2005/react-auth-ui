import React from 'react';
import './StatisticsCards.css';
import {
  UserOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

const StatisticsCards = () => {
  const stats = [
    {
      title: 'Nhân viên online',
      value: 0,
      icon: UserOutlined,
      color: '#000000',
      bg: `${process.env.PUBLIC_URL}/online.png`,
    },
    {
      title: 'Tổng cuộc gọi',
      value: 0,
      icon: PhoneOutlined,
      color: '#000000',
      bg: `${process.env.PUBLIC_URL}/Allcall.png`,
    },
    {
      title: 'Cuộc gọi hoàn thành',
      value: 0,
      icon: PhoneOutlined,
      color: '#f59e0b',
      bg: `${process.env.PUBLIC_URL}/Repcall.png`,
    },
    {
      title: 'Cuộc gọi nhỡ',
      value: 0,
      icon: PhoneOutlined,
      color: '#ef4444',
      bg: `${process.env.PUBLIC_URL}/MissedCall.png`,
    }
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={`stat-card variant-${index}`}
            style={{ backgroundImage: `url(${stat.bg})` }}
          >
            <div 
              className="stat-icon" 
              style={{ 
                backgroundColor: `${stat.color}15`, 
                color: stat.color 
              }}
            >
              <Icon style={{ fontSize: '24px' }} />
            </div>
            <div className="stat-content">
              <h3 className="stat-title">{stat.title}</h3>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatisticsCards;
