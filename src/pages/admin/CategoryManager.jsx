import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { Button, Space, Table } from "antd";
import Search from "antd/es/transfer/search";
import React from "react";

export default function CategoryManager() {
  const handleChangeStatus = (key) => {
   
    const updatedData = data.map((item) => {
      if (item.key === key) {
        return {
          ...item,
          status: item.status === "Active" ? "Inactive" : "Active", 
        };
      }
      return item;
    });

    setData(updatedData);
    message.success("Status changed successfully!");
  };

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      status: false ? "Active" : "Inactive",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      status: true ? "Active" : "inactive",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status === "Active" ? (
          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            Active
          </span>
        ) : (
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            Inactive
          </span>
        ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="link"
            icon={<SwapOutlined />}
            onClick={() => handleChangeStatus(record.key)}
          ></Button>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => console.log("Edit", record.key)}
          ></Button>
          <Button
            type="link"
            icon={<DeleteOutlined />}
            danger
            onClick={() => console.log("Delete", record.key)}
          ></Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className=" p-5">
        <div className="flex justify-between items-center">
          <h3>Default Tables</h3>
          <div className="mb-5 flex items-center">
            <div className="mr-5 ">
              <Search className="!hover:bg-[#b3b3e9] " />
            </div>
            <Button className="p-5  bg-[#daf4f2] text-[#0ab5aa] hover:!bg-[#0ab5aa] hover:!text-white !border-none">
              <PlusCircleOutlined />
              Add Category
            </Button>
          </div>
        </div>

        <div>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </>
  );
}
