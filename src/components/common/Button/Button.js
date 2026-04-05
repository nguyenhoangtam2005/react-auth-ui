import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button as AntButton} from 'antd'; // Đổi alias
import './Button.css';
const Button = () => {  // Đổi từ App thành Button
  const [size ] = useState('large');
  return (
     <AntButton type="primary"  icon={<DownloadOutlined />} size={size} style={{ marginLeft: '12px' }}>
         Download
     </AntButton>
  );
};

export default Button;  // Export Button