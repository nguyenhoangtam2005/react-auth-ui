import React from 'react';
import { Table } from 'antd';

const MeetingRoom = ({ searchKeyword = '' }) => {
  const dataSource = [
    { id: 'C001', titlePhong: '(Hỗ trợ phòng)', kpiPhong: 'Phòng 101', pile: 12345, dienVi: 2, chuanPhong: 'User #2' },
    { id: 'C002', titlePhong: '(Liên phòng họp)', kpiPhong: 'Phòng 102', pile: 23456, dienVi: 1, chuanPhong: 'User #1' },
    { id: 'C003', titlePhong: '(Hỗ trợ phòng họp)', kpiPhong: 'Phòng 103', pile: 34567, dienVi: 3, chuanPhong: 'User #2' },
    { id: 'C004', titlePhong: '(Liên phòng họp)', kpiPhong: 'Phòng 104', pile: 45678, dienVi: 2, chuanPhong: 'User #4' },
    { id: 'C005', titlePhong: '(Liên phòng họp)', kpiPhong: 'Phòng 105', pile: 56789, dienVi: 1, chuanPhong: 'User #5' },
    { id: 'C006', titlePhong: '(Hỗ trợ phòng)', kpiPhong: 'Phòng 106', pile: 12345, dienVi: 2, chuanPhong: 'User #2' },
    { id: 'C007', titlePhong: '(Liên phòng họp)', kpiPhong: 'Phòng 107', pile: 34567, dienVi: 3, chuanPhong: 'User #3' },
    { id: 'C008', titlePhong: '(Liên phòng họp)', kpiPhong: 'Phòng 108', pile: 56789, dienVi: 1, chuanPhong: 'User #5' },
    { id: 'C009', titlePhong: '(Hỗ trợ phòng)', kpiPhong: 'Phòng 109', pile: 45678, dienVi: 2, chuanPhong: 'User #4' },
    { id: 'C010', titlePhong: '(Liên phòng họp)', kpiPhong: 'Phòng 110', pile: 56789, dienVi: 1, chuanPhong: 'User #5' },
  ];

  const keyword = searchKeyword.trim().toLowerCase();
  const filteredData = keyword
    ? dataSource.filter((item) =>
        [item.id, item.titlePhong, item.kpiPhong, item.pile, item.dienVi, item.chuanPhong].some(
          (value) => value !== undefined && String(value).toLowerCase().includes(keyword)
        )
      )
    : dataSource;

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', width: 80 },
    { title: 'Tên phòng', dataIndex: 'titlePhong', key: 'titlePhong' },
    { title: 'Mã phòng', dataIndex: 'kpiPhong', key: 'kpiPhong' },
    { title: 'Pin', dataIndex: 'pile', key: 'pile', align: 'right' },
    { title: 'Đơn vị', dataIndex: 'dienVi', key: 'dienVi', align: 'center' },
    { title: 'Chủ phòng', dataIndex: 'chuanPhong', key: 'chuanPhong' },
  ];

  return (
    <Table
      style={{ width: '100%' }}
      dataSource={filteredData}
      columns={columns}
      pagination={{
        current: 1,
        pageSize: 10,
        total: filteredData.length,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '50'],
        showTotal: (total, range) => `${range[0]}-${range[1]} / ${total} page`,
      }}
      rowKey="id"
      bordered
    />
  );
};

export default MeetingRoom;
