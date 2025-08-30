import { useState } from "react";
import Header from "./components/Header";
import ToDoInput from "./components/TodoInput";
import ToDoList from "./components/TodoList";
import todos from "./components/Todos";
import { completeTask, onInputChange } from "./components/Handle";

function App() {
  const [todoData, setTodos] = useState(todos);
  return (
    <>
      <Header />
      <ToDoInput
        todos={todoData}
        setTodos={setTodos}
        onInputChange={onInputChange}
      />
      <ToDoList
        todos={todoData}
        setTodos={setTodos}
        completeTask={completeTask}
      />
    </>
  );
}

export default App;
