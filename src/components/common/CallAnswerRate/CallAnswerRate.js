import React from 'react';
import { Card, Progress } from 'antd';
import { PercentageOutlined } from '@ant-design/icons';
import './CallAnswerRate.css';

const CallAnswerRate = ({ answeredCalls = 125, totalCalls = 1250 }) => {
  const answerRate = totalCalls > 0 ? (answeredCalls / totalCalls) * 100 : 0;
  const percentDisplay = `${Math.round(answerRate)}%`;

  return (
    <Card bordered={false} className="call-answer-rate-card">
      <div className="car-header-row">
        <div className="car-icon-badge">
          <PercentageOutlined />
        </div>
        <div className="car-title">Tỷ lệ trả lời</div>
      </div>

      <div className="car-body">
        <div className="car-metric">
          <div className="car-value">{answeredCalls}</div>
          <div className="car-label">Cuộc gọi được trả lời</div>
        </div>
        <div className="car-progress">
          <Progress
            type="circle"
            percent={answerRate}
            format={() => percentDisplay}
            strokeColor="#295fef"
            trailColor="#e5e7eb"
            strokeWidth={10}
            width={100}
          />
        </div>
      </div>
    </Card>
  );
};

export default CallAnswerRate;
