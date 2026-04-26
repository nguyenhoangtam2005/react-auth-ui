import React from 'react';
import { Select } from 'antd';

const directionOptions = [
  { value: null, label: 'Tất cả hướng' },
  { value: 'outbound', label: 'Outbound' },
  { value: 'inbound', label: 'Inbound' }
];

const FilterInput = ({ value, onChange }) => (
  <Select
    placeholder="Chọn hướng cuộc gọi"
    style={{ minWidth: 160 }}
    value={value}
    onChange={onChange}
    options={directionOptions}
  />
);

export default FilterInput;