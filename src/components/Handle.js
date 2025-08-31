export const completeTask = async (todos, id, setTodos) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  try {
    await fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    });
    setTodos((preTodos) => preTodos.filter((todo) => todo.id !== id));
  } catch (error) {
    console.error("Error", error);
  }
};

export const onInputChange = async (todoData, setTodos, name) => {
  if (!name.trim()) return;
  const response = await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      completed: false,
    }),
  });

  const data = await response.json();

  setTodos((preTodos) => [...preTodos, data]);
};
