import { useEffect, useState } from "react";
import { Button, Space, Table, Modal } from "antd";
import { DeleteOutlined, EditOutlined, FileSearchOutlined } from "@ant-design/icons";

import { EditTodo, NewTodo } from "../components";
import { getTodos, deleteTodo } from "../services/services";

const Todo = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [task, setTask] = useState({ title: "", description: "" });
  const [editTask, setEditTask] = useState(null);

  const [todos, setTodos] = useState([]);
  const [recordData, setRecordData] = useState([]);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "1",
      align: "center",
      width: "fit-content",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "2",
      render: (_, data) => {
        // console.log("RECORD: ", index);
        return (
          <Space size={"middle"}>
            <FileSearchOutlined onClick={() => handleTaskDetail(data)} />
            <EditOutlined onClick={() => handleEditTask(data)} />
            <DeleteOutlined onClick={() => handleDeleteTask(data)} style={{ color: "red" }} />
          </Space>
        );
      },
      align: "center",
      width: "20%",
    },
  ];

  const handleOpenModal = () => {
    setIsAdding(true);
    console.log(todos);
  };

  const handleCloseModal = () => {
    setIsAdding(false);
  };

  const handleTaskDetail = (data) => {
    console.log("Task detail: ", data);
    Modal.info({
      title: `${data.title}`,
      content: <p>{data.description}</p>,
    });
  };

  const handleDeleteTask = (data) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this task?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteTodo(data.id);
        setTodos((prevState) => {
          return prevState.filter((todo) => todo.id !== data.id);
        });
      },
    });
  };

  const handleEditTask = (data) => {
    setIsEditing(true);

    setEditTask({ ...data });
  };

  useEffect(() => {
    getTodos(setTodos);
  }, []);

  return (
    <main className="todo">
      <header className="todo__header">
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
          recordData={recordData}
        />
        <Button onClick={handleOpenModal} type="primary" style={{ marginBottom: "2rem" }}>
          Add new task
        </Button>
        <Table bordered columns={columns} dataSource={todos} style={{ width: "60%", margin: "0 auto" }} />
      </header>
    </main>
  );
};

export default Todo;
