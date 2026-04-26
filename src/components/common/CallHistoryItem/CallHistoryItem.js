import React from 'react';
import { Table, Tag } from 'antd';
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  CopyOutlined
} from '@ant-design/icons';

const e = React.createElement;

const getDirectionTag = (type) => {
  if (type === 'outbound') {
    return e(
      Tag,
      { color: 'blue', icon: e(ArrowUpOutlined) },
      'Outbound'
    );
  }
  return e(
    Tag,
    { color: 'purple', icon: e(ArrowDownOutlined) },
    'Inbound'
  );
};

const getStatusTag = (status) => {
  const map = {
    success: { color: 'green', text: 'Hoàn thành' },
    missed: { color: 'orange', text: 'Không trả lời' },
    busy: { color: 'red', text: 'Bận' },
    failed: { color: 'red', text: 'Không khả dụng' }
  };

  const item = map[status] || map.success;

  return e(Tag, { color: item.color }, item.text);
};

const columns = [
  {
    title: 'Thời gian',
    dataIndex: 'time',
    key: 'time'
  },
  {
    title: 'Hướng',
    dataIndex: 'direction',
    key: 'direction',
    render: (value) => getDirectionTag(value)
  },
  {
    title: 'Từ',
    dataIndex: 'from',
    key: 'from'
  },
  {
    title: 'Đến',
    dataIndex: 'to',
    key: 'to'
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: (value) => getStatusTag(value)
  },
  {
    title: 'Thời lượng',
    dataIndex: 'duration',
    key: 'duration'
  },
  {
    title: 'Call ID',
    dataIndex: 'callId',
    key: 'callId',
    render: (text) =>
      e(
        'div',
        { className: 'call-id' },
        text,
        e(CopyOutlined, { className: 'copy-icon' })
      )
  }
];

const data = [
  {
    key: 1,
    time: '01/01/2026 10:00:00',
    direction: 'outbound',
    from: '0901234567',
    to: '0912345678',
    status: 'success',
    duration: '3m 10s',
    callId: 'abc-123'
  },
  {
    key: 2,
    time: '01/01/2026 10:05:00',
    direction: 'inbound',
    from: '0901234567',
    to: '0912345678',
    status: 'missed',
    duration: '0m 00s',
    callId: 'abc-124'
  }
];

const CallHistoryTable = ({ directionFilter, searchKeyword }) => {
  let filteredData = data;
  if (directionFilter) {
    filteredData = filteredData.filter((item) => item.direction === directionFilter);
  }
  if (searchKeyword && searchKeyword.trim() !== '') {
    const keyword = searchKeyword.trim().toLowerCase();
    filteredData = filteredData.filter(item =>
      (item.time && item.time.toLowerCase().includes(keyword)) ||
      (item.from && item.from.toLowerCase().includes(keyword)) ||
      (item.to && item.to.toLowerCase().includes(keyword)) ||
      (item.status && item.status.toLowerCase().includes(keyword)) ||
      (item.callId && item.callId.toLowerCase().includes(keyword))
    );
  }
  return e(
    'div',
    { className: 'call-table-wrapper' },
    e(Table, {
      columns: columns,
      dataSource: filteredData,
      pagination: false,
      bordered: false
    })
  );
};

export default CallHistoryTable;