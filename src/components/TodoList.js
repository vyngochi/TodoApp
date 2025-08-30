import { useState } from "react";

function ToDoList({ todos, completeTask, setTodos }) {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const incompleteTodo = todos.filter((todo) => !todo.completed);

  const handleEdit = (id, name) => {
    setEditingId(id);
    setEditValue(name);
  };

  const handleSave = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, name: editValue } : todo
      )
    );
    setEditingId(null);
  };

  return (
    <div className="d-flex justify-content-center align-content-center w-25 mx-auto">
      <ul className="list-group w-100">
        {incompleteTodo.map((todo) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={todo.id}
            onMouseEnter={() => handleEdit(todo.id, todo.name)}
            onMouseLeave={() => handleSave(todo.id)}
          >
            {editingId === todo.id ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={() => handleSave(todo.id)}
                onKeyDown={(e) => e.key === "Enter" && handleSave(todo.id)}
                autoFocus
              ></input>
            ) : (
              todo.name
            )}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => completeTask(todos, todo.id, setTodos)}
            ></input>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
