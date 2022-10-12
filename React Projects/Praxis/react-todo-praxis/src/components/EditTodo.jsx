import { Space, Modal, Input, Form } from "antd";
import { updateTodo } from "../services/services";

const { TextArea } = Input;

const TodoEdit = ({ editTask, setEditTask, isEditing, setIsEditing, setTodos }) => {
  const handleFinishEdit = () => {
    setIsEditing(false);
  };

  return (
    <Modal
      title="Edit Your Todo"
      okText="Save"
      open={isEditing}
      onCancel={handleFinishEdit}
      onOk={() => {
        updateTodo(editTask, setTodos, handleFinishEdit);
      }}
      transitionName=""
    >
      <Form>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Input
            placeholder="New Title"
            onChange={(e) => setEditTask((prevStat) => ({ ...prevStat, title: e.target.value }))}
            value={editTask?.title}
          />
          <TextArea
            placeholder="New Description"
            rows={4}
            onChange={(e) => setEditTask((prevStat) => ({ ...prevStat, description: e.target.value }))}
            value={editTask?.description}
          />
        </Space>
      </Form>
    </Modal>
  );
};

export default TodoEdit;
