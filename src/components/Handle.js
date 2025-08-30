export const completeTask = (todos, id, setTodos) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};

export const onInputChange = (todoData, setTodos, name) => {
  if (!name.trim()) return;
  const todo = { id: Date.now(), name: name, completed: false };
  setTodos([...todoData, todo]);
};
