import React from 'react';
import { Table, Tag, Space } from 'antd';
import './EmployeeManagementTable.css'
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons';


const UserTable = (props) => {

  const mockData = [
    {
      id: 1,
      email: 'admin@gmail.com',
      role: 'Admin',
      code: 'ADM001',
      status: 'Hoạt động'
    },
    {
      id: 2,
      email: 'agent1@gmail.com',
      role: 'Agent',
      code: 'AGT001',
      status: 'Ngưng'
    },
    {
      id: 3,
      email: 'agent2@gmail.com',
      role: 'Agent',
      code: 'AGT002',
      status: 'Hoạt động'
    }
  ];

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

  return React.createElement(Table, {
    columns: columns,
    dataSource: props.data || mockData, // 👈 fallback vào data mẫu
    rowKey: 'id',
    pagination: false
  });
};

export default UserTable;