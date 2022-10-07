import { useEffect, useState } from "react";
import { Button, Space, Table, Modal } from "antd";
import { DeleteOutlined, EditOutlined, FileSearchOutlined } from "@ant-design/icons";

import { EditTodo, NewTodo } from "../components";
import { deleteTodo } from "../services/services";
import { todoList } from "../utils/dummy";

const Todo = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDetail, setIsDetail] = useState(false);

  const [task, setTask] = useState({ title: "", description: "" });
  const [editTask, setEditTask] = useState(null);

  const [todos, setTodos] = useState([]);
  const [recordData, setRecordData] = useState([]);

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
      title: "Action",
      dataIndex: "action",
      key: "3",
      render: (record) => {
        return (
          <Space size={"middle"}>
            <FileSearchOutlined onClick={() => handleTaskDetail()} />
            <EditOutlined onClick={() => handleEditTask(record)} />
            <DeleteOutlined onClick={() => handleDeleteTask()} style={{ color: "red" }} />
          </Space>
        );
      },
      align: "center",
      width: "20%",
    },
  ];

  const handleOpenModal = () => {
    setIsAdding(true);
  };

  const handleCloseModal = () => {
    setIsAdding(false);
    setIsDetail(false);
  };

  const handleTaskDetail = () => {
    setIsDetail(true);
  };

  const handleDeleteTask = () => {
    Modal.confirm({
      title: "Are you sure, you want to delete this task?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteTodo(recordData.id);
        setTodos((prevState) => {
          return prevState.filter((todo) => todo.id !== recordData.id);
        });
      },
    });
  };

  const handleEditTask = () => {
    setIsEditing(true);

    setEditTask({ ...recordData });
  };

  useEffect(() => {
    // getTodos(todos, setTodos);
    // deleteTodo(5);
    // addTodoDummy();
    // updateTodoDummy();
  }, [todos, todoList]);

  return (
    <main className="todo">
      <header className="todo__header">
        <Modal
          title="Task Detail"
          okText="Ok"
          open={isDetail}
          onCancel={handleCloseModal}
          onOk={handleCloseModal}
          transitionName=""
        >
          <p>Title: {recordData.title}</p>
          <p>Description: {recordData.description}</p>
        </Modal>
        <NewTodo
          todos={todos}
          setTodos={setTodos}
          task={task}
          setTask={setTask}
          isAdding={isAdding}
          handleCloseModal={handleCloseModal}
        />
        <EditTodo
          editTask={editTask}
          setEditTask={setEditTask}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setTodos={setTodos}
        />
        <Button onClick={handleOpenModal} type="primary" style={{ marginBottom: "2rem" }}>
          Add new task
        </Button>
        <Table
          bordered
          columns={columns}
          dataSource={todos}
          style={{ width: "80%", margin: "0 auto" }}
          onRow={(record) => {
            return {
              onMouseEnter: () => {
                setRecordData(record);
                console.log(recordData);
              },
            };
          }}
        />
      </header>
    </main>
  );
};

export default Todo;
