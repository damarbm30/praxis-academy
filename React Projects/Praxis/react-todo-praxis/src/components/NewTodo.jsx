import { Space, Modal, Input, Form } from "antd";
import { useEffect } from "react";
import { createTodo } from "../services/services";

const { TextArea } = Input;

const NewTodo = ({ todos, setTodos, task, setTask, isAdding, handleCloseModal }) => {
  const handleAddTask = () => {
    setTask("");

    // const id = todos.length ? todos[todos.length - 1].id + 1 : 1;

    const newTask = {
      title: task.title,
      description: task.description,
    };

    createTodo(newTask, todos, setTodos);
    handleCloseModal();
  };

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Modal
      title="Add New Todo"
      okText="Submit"
      open={isAdding}
      onCancel={handleCloseModal}
      onOk={handleAddTask}
      transitionName=""
    >
      <Form>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Input placeholder="Title" onChange={(e) => setTask({ ...task, title: e.target.value })} value={task.title} />
          <TextArea
            placeholder="Description"
            rows={4}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            value={task.description}
          />
        </Space>
      </Form>
    </Modal>
  );
};

export default NewTodo;
