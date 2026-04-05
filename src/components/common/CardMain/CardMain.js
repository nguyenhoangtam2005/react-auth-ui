import React from 'react';
import { Card, Row, Col } from 'antd';
import './CardMain.css';

const CardMain = () => {
  const cards = [
    {
      title: 'Tổng số (Extensions)',
      total: 70,
      label: 'Nhân viên',
      bars: [
        { label: 'Online', value: 30, color: '#30C64B' },
        { label: 'Offline', value: 25, color: '#C7CED8' },
        { label: 'DND', value: 15, color: '#EB3C3C' },
      ],
    },
    {
      title: 'Hàng chờ (Queue)',
      total: 80,
      label: 'Members',
      bars: [
        // Hiển thị thanh màu xanh cho trạng thái hoạt động và đỏ cho tạm dừng
        { label: 'Hoạt động', value: 40, color: '#30C64B' },
        { label: 'Tạm dừng', value: 40, color: '#EB3C3C' },
      ],
    },
  ];

  return (
    <div className="summary-grid">
      {cards.map((card, idx) => {
        const total = card.total || 1;
        return (
          <Card className="summary-card" bordered key={idx}>
            <div className="summary-header">
              <div className="summary-title">{card.title}</div>
            </div>
            <div className="summary-total">{card.total}</div>
            <div className="summary-label">{card.label}</div>

            <div className="stacked-bar">
              {card.bars.map((bar, i) => (
                <div
                  key={i}
                  className="stacked-segment"
                  style={{
                    width: `${(bar.value / total) * 100}%`,
                    backgroundColor: bar.color,
                  }}
                />
              ))}
            </div>

            <div className="legend">
              {card.bars.map((bar, i) => (
                <div className="legend-item" key={i}>
                  <span
                    className="legend-dot"
                    style={{ backgroundColor: bar.color }}
                  />
                  <span className="legend-text">
                    {bar.label} ({bar.value})
                  </span>
                </div>
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default CardMain;
