import todoApi from "./baseUrl";

export const createTodo = async (newTask, todos, setTodos) => {
  try {
    const response = await todoApi.post("/create", newTask, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // setTodos((prevState) => [...prevState, response.data]);
    setTodos((prevState) => [...prevState, newTask]);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTodos = async (setTodos) => {
  try {
    const results = await todoApi.get("/create");
    if (results && results.data) {
      setTodos(results.data);
      localStorage.setItem("Todos", JSON.stringify(results.data));
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (editTask, setTodos, handleFinishEdit) => {
  try {
    const response = await todoApi.put(
      `/create/${editTask.id}`,
      { title: editTask.title, description: editTask.description },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // without map method, the old todo will be included
    setTodos((prevStat) => {
      // map every todo in todos, check if the mapped todo id is the same with the one we are editing
      // if true, then replace it with the new todo, else, leave it be
      return prevStat.map((task) => (task.id === editTask.id ? { ...response.data } : task));
    });
    handleFinishEdit();
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deleteTodo = async (id) => {
  try {
    const results = await todoApi.delete(`/create/${id}`);
    console.log(results.data);
    console.log("Local storage deleteTodo: ", JSON.parse(localStorage.getItem("Todos")));
  } catch (error) {
    console.log(error.response.data.message);
  }
};

// export const addTodoDummy = async () => {
//   try {
//     const results = await todoApi.post(
//       `/todos/add`,
//       { todo: "Use DummyJSON in the project", completed: false, userId: 5 },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(results.data);
//   } catch (error) {
//     console.log(error.response.data.message);
//   }
// };

// export const updateTodoDummy = async () => {
//   try {
//     const results = todoApi.put(
//       "/todos/1",
//       {
//         completed: false,
//       },
//       { headers: { "Content-Type": "application/json" } }
//     );
//     console.log(results);
//   } catch (error) {
//     console.log(error.response.data.message);
//   }
// };
