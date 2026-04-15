import React, { useState } from "react";
import { Table, Tag, Tabs, Tooltip, Button, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

export default function CallTable() {
  const [activeTab, setActiveTab] = useState("all");

  const data = [
    {
      key: "1",
      time: "dd/mm/yyyy, 00:00",
      type: "Inbound",
      from: "090xxxxxxx",
      to: "091xxxxxxx",
      status: "Hoàn thành",
      duration: "3m 10s",
      callId: "abc-123",
    },
    {
      key: "2",
      time: "dd/mm/yyyy, 00:00",
      type: "Inbound",
      from: "090xxxxxxx",
      to: "091xxxxxxx",
      status: "Bận",
      duration: "1m 20s",
      callId: "abc-123",
    },
    {
      key: "3",
      time: "dd/mm/yyyy, 00:00",
      type: "Outbound",
      from: "090xxxxxxx",
      to: "091xxxxxxx",
      status: "Không khả dụng",
      duration: "2m 20s",
      callId: "abc-123",
    },
    {
      key: "4",
      time: "dd/mm/yyyy, 00:00",
      type: "Outbound",
      from: "090xxxxxxx",
      to: "091xxxxxxx",
      status: "Không trả lời",
      duration: "2m 40s",
      callId: "abc-123",
    },
  ];

  const statusColor = {
    "Hoàn thành": "green",
    "Bận": "red",
    "Không trả lời": "orange",
    "Không khả dụng": "gold",
  };

  const columns = [
    {
      title: "Thời gian",
      dataIndex: "time",
    },
    {
      title: "Hướng",
      dataIndex: "type",
      render: (type) => (
        <Tag color={type === "Inbound" ? "blue" : "default"}>
          {type}
        </Tag>
      ),
    },
    {
      title: "Từ",
      dataIndex: "from",
    },
    {
      title: "Đến",
      dataIndex: "to",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (status) => (
        <Tag color={statusColor[status]}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Thời lượng",
      dataIndex: "duration",
    },
    {
      title: "Call ID",
      dataIndex: "callId",
      render: (id) => (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {id}
          <Tooltip title="Sao chép">
            <Button
              size="small"
              icon={<CopyOutlined />}
              onClick={() => {
                navigator.clipboard.writeText(id);
                message.success("Đã copy");
              }}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  const filteredData =
    activeTab === "all"
      ? data
      : data.filter((item) => item.status === activeTab);

  return (
    <div style={{ padding: 20, width: '100%' }}>
      <Tabs defaultActiveKey="all" onChange={setActiveTab}>
        <TabPane tab="Tất cả (40)" key="all" />
        <TabPane tab="Hoàn thành (10)" key="Hoàn thành" />
        <TabPane tab="Không trả lời (3)" key="Không trả lời" />
        <TabPane tab="Bận (1)" key="Bận" />
        <TabPane tab="Không khả dụng (2)" key="Không khả dụng" />
      </Tabs>

      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
}