import { useState } from "react";
import { Button, Space, Table, Modal, Input, Form } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const Todo = () => {
  const [isModal, setIsModal] = useState(false);
  const [task, setTask] = useState({ title: "", description: "" });
  const [editTask, setEditTask] = useState("");
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
      align: "center",
      width: "fit-content",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "2",
      align: "center",
      width: "fit-content",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "3",
      align: "center",
      width: "fit-content",
    },
    {
      title: "Action",
      key: "4",
      render: (record) => (
        <Space size={"middle"}>
          <EditOutlined onClick={() => handleEditTask(record)} style={{ fontSize: "16px" }} />
          <DeleteOutlined onClick={""} style={{ color: "red", fontSize: "16px" }} />
        </Space>
      ),
      align: "center",
      width: "fit-content",
    },
  ];

  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
  };

  const handleAddTask = () => {
    setTask("");

    const newTask = {
      id: dataSource.length ? dataSource[dataSource.length - 1].id + 1 : 1,
      key: dataSource.length ? dataSource[dataSource.length - 1].key + 1 : 1,
      title: task.title,
      description: task.description,
    };

    setDataSource((prevState) => [...prevState, newTask]);
    handleCloseModal();
  };

  const handleDeleteTask = (record) => {};

  const handleEditTask = (record) => {
    setIsModal(true);
    setEditTask(...record);
  };

  return (
    <main className="Todo">
      <header className="Todo__header">
        <Modal
          title="Task"
          okText="Submit"
          open={isModal}
          onCancel={handleCloseModal}
          onOk={handleAddTask}
          transitionName=""
        >
          <Form>
            <Space direction="vertical" size="middle" style={{ display: "flex" }}>
              <Input
                placeholder="Title"
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                value={task.title}
              />
              <TextArea
                placeholder="Description"
                rows={4}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
                value={task.description}
              />
            </Space>
          </Form>
        </Modal>
        <Button onClick={handleOpenModal} type="primary" style={{ marginBottom: "2rem" }}>
          Add new task
        </Button>
        <Table bordered columns={columns} dataSource={dataSource} style={{ width: "80%", margin: "0 auto" }} />
      </header>
    </main>
  );
};

export default Todo;
