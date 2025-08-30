import { useState } from "react";

export default function ToDoInput({ todos, setTodos, onInputChange }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onInputChange(todos, setTodos, value);
    setValue("");
  };

  return (
    <div>
      <form className="w-25 mx-auto">
        <div className="mb-3 d-flex gap-2 justify-content-center align-items-center">
          <input
            type="text"
            className="form-control-sm w-10"
            placeholder="Add New Todo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
