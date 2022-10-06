import { todoList } from "../utils/dummy";
import todoApi from "./baseUrl";

export const createTodo = async (newTask, setTodos) => {
  try {
    const response = await todoApi.post("/todos", newTask);
    setTodos((prevState) => [...prevState, response.data]);
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const getTodos = async (todos, setTodos) => {
  try {
    const results = await todoApi.get("/todos");
    setTodos(todoList);
    console.log("Results: ", results.data.todos);
    console.log("Todos: ", todos);
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const updateTodo = async (editTask, setTodos, handleFinishEdit) => {
  try {
    const response = await todoApi.put(`/todos/${editTask.id}`, editTask);
    // without map method, the old todo will be included
    setTodos((prevStat) => {
      // map every todo in todos, check if the mapped todo id is the same with the one we are editing
      // if true, then replace it with the new todo, else, leave it be
      return prevStat.map((task) => (task.id === editTask.id ? editTask : task));
    });
    handleFinishEdit();
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const deleteTodo = async (id) => {
  try {
    const results = await todoApi.delete(`todos/${id}`);
    console.log(results.data);
  } catch (error) {
    console.log(error.response.data.message);
  }
};
