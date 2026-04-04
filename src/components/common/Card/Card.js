import React from 'react';
import { Card, Row, Col } from 'antd';
import {
  PhoneOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from '@ant-design/icons';
import './Card.css';
import CallAnswerRate from '../CallAnswerRate/CallAnswerRate';

const CallStatsCard = () => {
  const stats = [
    {
      title: 'Tổng cuộc gọi',
      value: 125,
      change: -8,
      changeText: 'Giảm 8% so với hôm qua',
      icon: <PhoneOutlined />,
      bg: '/Allcall.png',
    },
    {
      title: 'Đã trả lời',
      value: 125,
      change: 14,
      changeText: 'Tăng 14% so với hôm qua',
      icon: <CheckCircleOutlined />,
      bg: '/Repcall.png',
    },
    {
      title: 'Cuộc gọi nhỡ',
      value: 125,
      change: -8,
      changeText: 'Giảm 8% so với hôm qua',
      icon: <CloseCircleOutlined />,
      bg: '/MissedCall.png',
    },
  ];

  return (
    <div className="call-stats-container">
      <Row gutter={[16, 16]}>
        {stats.map((stat, index) => (
          <Col xs={24} md={6} key={index}>
            <Card
              className="stat-card gradient"
              hoverable
              style={{ backgroundImage: `url(${stat.bg})` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-title">{stat.title}</div>

              <div className="stat-value">
                <span className="value-number">{stat.value}</span>
              </div>

              <div className="change-row">
                <ArrowUpOutlined
                  className="change-arrow"
                  style={{ display: stat.change > 0 ? 'inline' : 'none' }}
                />
                <ArrowDownOutlined
                  className="change-arrow"
                  style={{ display: stat.change < 0 ? 'inline' : 'none' }}
                />
                <span className="change-text">{stat.changeText}</span>
              </div>
            </Card>
          </Col>
        ))}
        <Col xs={24} md={6}>
          <CallAnswerRate />
        </Col>
      </Row>
    </div>
  );
};

export default CallStatsCard;
