import React from 'react';
import { Table, Tag, Space } from 'antd';
import './EmployeeManagementTable.css';
import {
  EyeOutlined,
  DeleteOutlined
} from '@ant-design/icons';

const UserTable = ({ role, status, searchKeyword = '' }) => {

  const mockData = [
    { id: 1, email: 'admin1@gmail.com', role: 'Admin', role_en: 'admin', code: 'ADM001', status: 'Hoạt động', status_en: 'active' },
    { id: 2, email: 'agent1@gmail.com', role: 'Agent', role_en: 'agent', code: 'AGT001', status: 'Ngưng', status_en: 'inactive' },
    { id: 3, email: 'agent2@gmail.com', role: 'Agent', role_en: 'agent', code: 'AGT002', status: 'Hoạt động', status_en: 'active' },
    { id: 4, email: 'admin2@gmail.com', role: 'Admin', role_en: 'admin', code: 'ADM002', status: 'Ngưng', status_en: 'inactive' },
    { id: 5, email: 'agent3@gmail.com', role: 'Agent', role_en: 'agent', code: 'AGT003', status: 'Hoạt động', status_en: 'active' },
    { id: 6, email: 'admin3@gmail.com', role: 'Admin', role_en: 'admin', code: 'ADM003', status: 'Hoạt động', status_en: 'active' },
    { id: 7, email: 'agent4@gmail.com', role: 'Agent', role_en: 'agent', code: 'AGT004', status: 'Ngưng', status_en: 'inactive' },
    { id: 8, email: 'admin4@gmail.com', role: 'Admin', role_en: 'admin', code: 'ADM004', status: 'Ngưng', status_en: 'inactive' },
    { id: 9, email: 'agent5@gmail.com', role: 'Agent', role_en: 'agent', code: 'AGT005', status: 'Hoạt động', status_en: 'active' },
    { id: 10, email: 'admin5@gmail.com', role: 'Admin', role_en: 'admin', code: 'ADM005', status: 'Hoạt động', status_en: 'active' },
    { id: 11, email: 'agent6@gmail.com', role: 'Agent', role_en: 'agent', code: 'AGT006', status: 'Ngưng', status_en: 'inactive' },
    { id: 12, email: 'admin6@gmail.com', role: 'Admin', role_en: 'admin', code: 'ADM006', status: 'Ngưng', status_en: 'inactive' },
    { id: 13, email: 'agent7@gmail.com', role: 'Agent', role_en: 'agent', code: 'AGT007', status: 'Hoạt động', status_en: 'active' },
    { id: 14, email: 'admin7@gmail.com', role: 'Admin', role_en: 'admin', code: 'ADM007', status: 'Hoạt động', status_en: 'active' },
    { id: 15, email: 'agent8@gmail.com', role: 'Agent', role_en: 'agent', code: 'AGT008', status: 'Ngưng', status_en: 'inactive' },
    { id: 16, email: 'admin8@gmail.com', role: 'Admin', role_en: 'admin', code: 'ADM008', status: 'Hoạt động', status_en: 'active' },
    { id: 17, email: 'agent9@gmail.com', role: 'Agent', role_en: 'agent', code: 'AGT009', status: 'Hoạt động', status_en: 'active' },
    { id: 18, email: 'admin9@gmail.com', role: 'Admin', role_en: 'admin', code: 'ADM009', status: 'Ngưng', status_en: 'inactive' },
    { id: 19, email: 'agent10@gmail.com', role: 'Agent', role_en: 'agent', code: 'AGT010', status: 'Ngưng', status_en: 'inactive' },
    { id: 20, email: 'admin10@gmail.com', role: 'Admin', role_en: 'admin', code: 'ADM010', status: 'Hoạt động', status_en: 'active' },
    { id: 21, email: 'agent11@gmail.com', role: 'Agent', role_en: 'agent', code: 'AGT011', status: 'Hoạt động', status_en: 'active' },
    { id: 22, email: 'admin11@gmail.com', role: 'Admin', role_en: 'admin', code: 'ADM011', status: 'Ngưng', status_en: 'inactive' },
    { id: 23, email: 'agent12@gmail.com', role: 'Agent', role_en: 'agent', code: 'AGT012', status: 'Ngưng', status_en: 'inactive' },
    { id: 24, email: 'admin12@gmail.com', role: 'Admin', role_en: 'admin', code: 'ADM012', status: 'Hoạt động', status_en: 'active' },
    { id: 25, email: 'agent13@gmail.com', role: 'Agent', role_en: 'agent', code: 'AGT013', status: 'Hoạt động', status_en: 'active' },
    { id: 26, email: 'admin13@gmail.com', role: 'Admin', role_en: 'admin', code: 'ADM013', status: 'Ngưng', status_en: 'inactive' },
    { id: 27, email: 'agent14@gmail.com', role: 'Agent', role_en: 'agent', code: 'AGT014', status: 'Ngưng', status_en: 'inactive' },
    { id: 28, email: 'admin14@gmail.com', role: 'Admin', role_en: 'admin', code: 'ADM014', status: 'Hoạt động', status_en: 'active' },
    { id: 29, email: 'agent15@gmail.com', role: 'Agent', role_en: 'agent', code: 'AGT015', status: 'Hoạt động', status_en: 'active' },
    { id: 30, email: 'admin15@gmail.com', role: 'Admin', role_en: 'admin', code: 'ADM015', status: 'Ngưng', status_en: 'inactive' }
  ];

  const getFilteredData = () => {
    let filtered = mockData;

    if (role) {
      filtered = filtered.filter(item => item.role_en === role);
    }

    if (status) {
      filtered = filtered.filter(item => item.status_en === status);
    }

    const keyword = searchKeyword.trim().toLowerCase();
    if (keyword) {
      filtered = filtered.filter((item) =>
        [item.id, item.email, item.role, item.code, item.status].some(
          (value) => value !== undefined && String(value).toLowerCase().includes(keyword)
        )
      );
    }

    return filtered;
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role) => {
        return React.createElement(
          Tag,
          {
            className: role === 'Admin' ? 'tag-admin' : 'tag-agent'
          },
          role
        );
      }
    },
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      render: (code) => {
        return React.createElement(
          Tag,
          { className: 'tag-code' },
          code
        );
      }
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        return React.createElement(
          Tag,
          {
            className: status === 'Hoạt động' ? 'tag-active' : 'tag-stop'
          },
          status
        );
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        return React.createElement(
          Space,
          null,
          React.createElement(EyeOutlined, { className: 'icon view' }),
          React.createElement(DeleteOutlined, { className: 'icon delete' })
        );
      }
    }
  ];

  const filteredData = getFilteredData();

  return React.createElement(Table, {
    columns: columns,
    dataSource: filteredData,
  });
};

export default UserTable;
