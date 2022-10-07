import { Space, Modal, Input, Form } from "antd";

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
        // without map method, the old todo will be included
        setTodos((prevStat) => {
          // map every todo in todos, check if the mapped todo id is the same with the one we are editing
          // if true, then replace it with the new todo, else, leave it be
          return prevStat.map((task) => (task.id === editTask.id ? editTask : task));
        });
        handleFinishEdit();
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
