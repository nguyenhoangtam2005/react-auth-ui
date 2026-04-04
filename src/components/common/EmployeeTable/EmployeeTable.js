// EmployeeTable.js
import React, { useState } from 'react';
import { Card, Table, Button, Space, Tag, message, Popconfirm, Input } from 'antd';
import { PhoneOutlined, SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import './EmployeeTable.css';

const EmployeeTable = () => {
  const [searchText, setSearchText] = useState('');
  const [dataSource, setDataSource] = useState([
    { key: '1', extension: '101', name: 'Nguyễn Văn A', department: 'Kinh doanh', status: 'online' },
    { key: '2', extension: '102', name: 'Trần Thị B', department: 'Hành chính', status: 'busy' },
    { key: '3', extension: '103', name: 'Lê Văn C', department: 'Kỹ thuật', status: 'online' },
    { key: '4', extension: '104', name: 'Phạm Thị D', department: 'Nhân sự', status: 'offline' },
    { key: '5', extension: '105', name: 'Hoàng Văn E', department: 'Marketing', status: 'online' },
  ]);

  const handleCall = (extension, name) => {
    message.success(`Đang gọi đến Extension ${extension} - ${name}`);
  };

  const handleDelete = (key) => {
    setDataSource(dataSource.filter(item => item.key !== key));
    message.success('Đã xóa nhân viên');
  };

  const getStatusTag = (status) => {
    const statusMap = {
      online: { color: 'success', text: 'Trực tuyến' },
      busy: { color: 'warning', text: 'Bận' },
      offline: { color: 'default', text: 'Ngoại tuyến' }
    };
    const { color, text } = statusMap[status] || statusMap.offline;
    return React.createElement(Tag, { color: color }, text);
  };

  const columns = [
    {
      title: 'Extension',
      dataIndex: 'extension',
      key: 'extension',
      width: 100,
      sorter: (a, b) => a.extension.localeCompare(b.extension),
    },
    {
      title: 'Tên nhân viên',
      dataIndex: 'name',
      key: 'name',
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: 'Phòng ban',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status) => getStatusTag(status),
    },
    {
      title: 'Thao tác',
      key: 'action',
      width: 150,
      render: (_, record) => {
        return React.createElement(Space, { size: "small" },
          React.createElement(Button, {
            type: "link",
            icon: React.createElement(PhoneOutlined),
            onClick: () => handleCall(record.extension, record.name)
          }, "Gọi"),
          React.createElement(Popconfirm, {
            title: "Xóa nhân viên?",
            description: `Bạn có chắc muốn xóa ${record.name}?`,
            onConfirm: () => handleDelete(record.key),
            okText: "Xóa",
            cancelText: "Hủy"
          },
            React.createElement(Button, {
              type: "link",
              danger: true,
              icon: React.createElement(DeleteOutlined)
            }, "Xóa")
          )
        );
      }
    }
  ];

  return React.createElement(Card, 
    { 
      title: "Danh sách nhân viên",
      className: "employee-table-card",
      extra: React.createElement(Input, {
        placeholder: "Tìm kiếm nhân viên...",
        prefix: React.createElement(SearchOutlined),
        value: searchText,
        onChange: (e) => setSearchText(e.target.value),
        style: { width: 200 },
        allowClear: true
      })
    },
    React.createElement(Table, {
      columns: columns,
      dataSource: dataSource,
      pagination: { pageSize: 5, showSizeChanger: true, showTotal: (total) => `Tổng ${total} nhân viên` }
    })
  );
};

export default EmployeeTable;