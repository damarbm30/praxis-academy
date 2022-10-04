import React from "react";
import { Space, Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    align: "center",
    width: "fit-content",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    align: "center",
    width: "fit-content",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    align: "center",
    width: "fit-content",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size={"small"}>
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
    align: "center",
    width: "fit-content",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney",
  },
];

const Todo = () => <Table bordered columns={columns} dataSource={data} style={{ width: "50%", margin: "0 auto" }} />;

export default Todo;
