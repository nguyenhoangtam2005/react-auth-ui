import React from 'react';
import { Table, Tag } from 'antd';

const MachineBranch = () => {
  const dataSource = [
    { soNoiBo: 101, tenNhanh: 'Nhánh 101', trangThai: 'Online', dnd: 'Bật', loai: 'Cá nhân', chuCuocGoi: 'Tắt', hoatDong: 'Hoạt động' },
    { soNoiBo: 102, tenNhanh: 'Nhánh 102', trangThai: 'Offline', dnd: 'Tắt', loai: 'Service', chuCuocGoi: 'Tắt', hoatDong: 'Tạm khóa' },
    { soNoiBo: 103, tenNhanh: 'Nhánh 103', trangThai: 'Online', dnd: 'Bật', loai: 'IVR', chuCuocGoi: 'Bật', hoatDong: 'Hoạt động' },
    { soNoiBo: 104, tenNhanh: 'Nhánh 104', trangThai: 'Offline', dnd: 'Tắt', loai: 'IVR', chuCuocGoi: 'Tắt', hoatDong: 'Hoạt động' },
    { soNoiBo: 105, tenNhanh: 'Nhánh 105', trangThai: 'Offline', dnd: 'Bật', loai: 'ACD', chuCuocGoi: 'Bật', hoatDong: 'Hoạt động' },
    { soNoiBo: 106, tenNhanh: 'Nhánh 106', trangThai: 'Offline', dnd: 'Tắt', loai: 'Service', chuCuocGoi: 'Bật', hoatDong: 'Hoạt động' },
    { soNoiBo: 107, tenNhanh: 'Nhánh 107', trangThai: 'Offline', dnd: 'Bật', loai: 'IVR', chuCuocGoi: 'Bật', hoatDong: 'Hoạt động' },
    { soNoiBo: 108, tenNhanh: 'Nhánh 108', trangThai: 'Offline', dnd: 'Bật', loai: 'Service', chuCuocGoi: 'Tắt', hoatDong: 'Hoạt động' },
    { soNoiBo: 109, tenNhanh: 'Nhánh 109', trangThai: 'Offline', dnd: 'Bật', loai: 'ACD', chuCuocGoi: 'Bật', hoatDong: 'Hoạt động' },
    { soNoiBo: 110, tenNhanh: 'Nhánh 110', trangThai: 'Offline', dnd: 'Bật', loai: 'IVR', chuCuocGoi: 'Bật', hoatDong: 'Hoạt động' },
  ];

  const columns = [
    { title: 'Số nội bộ', dataIndex: 'soNoiBo', key: 'soNoiBo', width: 100 },
    { title: 'Tên nhánh', dataIndex: 'tenNhanh', key: 'tenNhanh' },
    {
      title: 'Trạng thái',
      dataIndex: 'trangThai',
      key: 'trangThai',
      render: (status) => (
        <Tag color={status === 'Online' ? 'green' : 'red'}>{status}</Tag>
      ),
    },
    {
      title: 'DND',
      dataIndex: 'dnd',
      key: 'dnd',
      render: (dnd) => <Tag color={dnd === 'Bật' ? 'blue' : 'default'}>{dnd}</Tag>,
    },
    { title: 'Loại', dataIndex: 'loai', key: 'loai' },
    {
      title: 'Chữ cuộc gọi',
      dataIndex: 'chuCuocGoi',
      key: 'chuCuocGoi',
      render: (call) => <Tag color={call === 'Bật' ? 'green' : 'default'}>{call}</Tag>,
    },
    {
      title: 'Hoạt động',
      dataIndex: 'hoatDong',
      key: 'hoatDong',
      render: (active) => <Tag color={active === 'Hoạt động' ? 'success' : 'error'}>{active}</Tag>,
    },
  ];

  return (
    <Table
      style={{ width: '100%' }}
      dataSource={dataSource}
      columns={columns}
      pagination={{
        current: 1,
        pageSize: 10,
        total: 50, // Tổng số bản ghi giả định, có thể thay bằng dữ liệu thật
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '50'],
        showTotal: (total, range) => `${range[0]}-${range[1]} / ${total} page`,
      }}
      rowKey="soNoiBo"
      bordered
    />
  );
};

export default MachineBranch;