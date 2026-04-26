import React from "react";
import { Table, Tag } from "antd";
import "./QueueTable.css";

const QueueTable = ({ statusFilter, searchKeyword }) => {

  const dataSource = [
    {
      key: "1",
      queueCode: "Q001",
      extension: "105",
      priority: 3,
      status: "pause",
      waitTime: "0s",
      maxTime: "120s"
    },
    {
      key: "2",
      queueCode: "Q002",
      extension: "105",
      priority: 0,
      status: "active",
      waitTime: "0s",
      maxTime: "120s"
    },
    {
      key: "2",
      queueCode: "Q002",
      extension: "105",
      priority: 0,
      status: "active",
      waitTime: "0s",
      maxTime: "120s"
    },
    {
      key: "2",
      queueCode: "Q002",
      extension: "105",
      priority: 0,
      status: "active",
      waitTime: "0s",
      maxTime: "120s"
    },
    {
      key: "2",
      queueCode: "Q002",
      extension: "105",
      priority: 0,
      status: "active",
      waitTime: "0s",
      maxTime: "120s"
    },
    {
      key: "2",
      queueCode: "Q002",
      extension: "105",
      priority: 0,
      status: "active",
      waitTime: "0s",
      maxTime: "120s"
    },
    {
      key: "2",
      queueCode: "Q002",
      extension: "105",
      priority: 0,
      status: "active",
      waitTime: "0s",
      maxTime: "120s"
    },
    {
      key: "2",
      queueCode: "Q002",
      extension: "105",
      priority: 0,
      status: "active",
      waitTime: "0s",
      maxTime: "120s"
    }
  ];

  const renderPriority = (priority) => {
    const color = priority === 0 ? "red" : "gold";
    return React.createElement(Tag, { color }, "#" + priority);
  };

  const renderStatus = (status) => {
    let color = "default";
    let text = "";

    if (status === "active") {
      color = "green";
      text = "Hoạt động";
    } else if (status === "pause") {
      color = "orange";
      text = "Tạm ngừng";
    }

    return React.createElement(Tag, { color }, text);
  };

  const columns = [
    {
      title: "Hàng chờ",
      dataIndex: "queueCode",
      key: "queueCode"
    },
    {
      title: "Extension",
      dataIndex: "extension",
      key: "extension"
    },
    {
      title: "Ưu tiên",
      dataIndex: "priority",
      key: "priority",
      render: renderPriority
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: renderStatus
    },
    {
      title: "Delay",
      dataIndex: "waitTime",
      key: "waitTime"
    },
    {
      title: "Thời gian đổ chuông",
      dataIndex: "maxTime",
      key: "maxTime"
    }
  ];

  let filteredData = dataSource;
  if (statusFilter) {
    filteredData = filteredData.filter(item => item.status === statusFilter);
  }
  if (searchKeyword && searchKeyword.trim() !== '') {
    const keyword = searchKeyword.trim().toLowerCase();
    filteredData = filteredData.filter(item =>
      (item.queueCode && item.queueCode.toLowerCase().includes(keyword)) ||
      (item.extension && item.extension.toLowerCase().includes(keyword)) ||
      (item.priority !== undefined && String(item.priority).includes(keyword)) ||
      (item.status && item.status.toLowerCase().includes(keyword))
    );
  }
  return React.createElement(Table, {
    columns: columns,
    dataSource: filteredData,
    pagination: {
      pageSize: 10,
      showSizeChanger: true
    },
    bordered: false
  });
};

export default QueueTable;