import React from 'react';
import { Table, Tag, Button, Space, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const CustomerTable = (props) => {
  const { dataSource, onEdit, onDelete, loading = false, pagination, status } = props;

  const allMockData = [
    { id: 1, phone: '0901234567', name: 'Nguyễn Văn A', status: 'Hoạt động', staff: 'admin (Ext 1001)' },
    { id: 2, phone: '0912345678', name: 'Trần Thị B', status: 'Chưa hoạt động', staff: 'sale (Ext 1002)' },
    { id: 3, phone: '0923456789', name: 'Lê Văn C', status: 'Hoạt động', staff: 'admin (Ext 1001)' },
    { id: 4, phone: '0934567890', name: 'Phạm Thị D', status: 'Chưa hoạt động', staff: 'sale (Ext 1002)' },
    { id: 5, phone: '0945678901', name: 'Hoàng Văn E', status: 'Hoạt động', staff: 'admin (Ext 1001)' },
  ];

  const getFilteredData = () => {
    if (dataSource) return dataSource;
    
    if (status) {
      if (status === 'active') {
        return allMockData.filter(item => item.status === 'Hoạt động');
      } else if (status === 'inactive') {
        return allMockData.filter(item => item.status === 'Chưa hoạt động');
      }
    }
    
    return allMockData;
  };

  const filteredData = getFilteredData();

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
      render: (phone) => phone || '(+84) XXX XXX XXX',
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (statusText) => {
        const isActive = statusText === 'Hoạt động';
        return React.createElement(
          Tag,
          { color: isActive ? 'green' : 'orange' },
          statusText
        );
      },
    },
    {
      title: 'Nhân viên phụ trách',
      dataIndex: 'staff',
      key: 'staff',
      render: (staff) => staff || 'hanhtn (Ext 1000)',
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => {
        return React.createElement(
          Space,
          { size: 'middle' },
          React.createElement(
            Button,
            {
              type: 'link',
              icon: React.createElement(EditOutlined),
              onClick: () => onEdit && onEdit(record),
            },
            'Chỉnh sửa'
          ),
          React.createElement(
            Popconfirm,
            {
              title: 'Bạn có chắc chắn muốn xóa?',
              onConfirm: () => onDelete && onDelete(record),
              okText: 'Có',
              cancelText: 'Không',
            },
            React.createElement(
              Button,
              {
                type: 'link',
                danger: true,
                icon: React.createElement(DeleteOutlined),
              },
              'Xóa'
            )
          )
        );
      },
    },
  ];

  return React.createElement(Table, {
    columns,
    dataSource: filteredData,
    rowKey: 'id',
    loading,
    pagination: pagination || {
      pageSize: 10,
      showSizeChanger: true,
      showTotal: (total) => `Tổng ${total} khách hàng`
    },
    className: 'customer-table',
    bordered: true,
  });
};

export default CustomerTable;