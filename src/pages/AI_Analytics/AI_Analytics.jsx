import React from 'react';
import { Card, Col, Row, Statistic, Table, Tag } from 'antd';

const summaryCards = [
  { key: 'calls', title: 'Cuoc goi da phan tich', value: 1280, suffix: 'cuoc' },
  { key: 'rate', title: 'Ti le nhan dien dung', value: 96.4, suffix: '%' },
  { key: 'warning', title: 'Canh bao chat luong', value: 18, suffix: 'muc' },
  { key: 'agents', title: 'Nhan vien duoc cham diem', value: 42, suffix: 'nguoi' },
];

const insightData = [
  {
    key: '1',
    agent: 'Nguyen Van A',
    team: 'Inbound',
    score: 92,
    sentiment: 'Tich cuc',
    status: 'Tot',
  },
  {
    key: '2',
    agent: 'Tran Thi B',
    team: 'Outbound',
    score: 78,
    sentiment: 'Trung tinh',
    status: 'Can theo doi',
  },
  {
    key: '3',
    agent: 'Le Van C',
    team: 'CSKH',
    score: 65,
    sentiment: 'Tieu cuc',
    status: 'Can cai thien',
  },
];

const columns = [
  {
    title: 'Nhan vien',
    dataIndex: 'agent',
    key: 'agent',
  },
  {
    title: 'Nhom',
    dataIndex: 'team',
    key: 'team',
  },
  {
    title: 'Diem AI',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: 'Cam xuc',
    dataIndex: 'sentiment',
    key: 'sentiment',
    render: (value) => {
      const colorMap = {
        'Tich cuc': 'green',
        'Trung tinh': 'gold',
        'Tieu cuc': 'red',
      };

      return <Tag color={colorMap[value] || 'default'}>{value}</Tag>;
    },
  },
  {
    title: 'Danh gia',
    dataIndex: 'status',
    key: 'status',
  },
];

function AIAnalytics() {
  return (
    <div className="body_content">
      <h1>Phan tich AI</h1>
      <p style={{ marginBottom: 24, color: '#64748b' }}>
        Tong hop nhanh cac chi so AI va danh sach goi y uu tien de theo doi.
      </p>

      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {summaryCards.map((item) => (
          <Col xs={24} sm={12} lg={6} key={item.key}>
            <Card bordered={false}>
              <Statistic title={item.title} value={item.value} suffix={item.suffix} />
            </Card>
          </Col>
        ))}
      </Row>

      <Card title="Tong quan phan tich gan day" bordered={false}>
        <Table
          columns={columns}
          dataSource={insightData}
          rowKey="key"
          pagination={false}
        />
      </Card>
    </div>
  );
}

export default AIAnalytics;
