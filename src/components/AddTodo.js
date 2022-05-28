import React, { useState } from "react";
import { useNavigate } from "react-router";
import { addTodo } from "../services";

const AddTodo = ({ onTodoAdd }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await addTodo(title, completed);
    onTodoAdd(res);
    navigate("/");
  };

  return (
    <div>
      <header>
        <h1 className="text-muted">Create new todo</h1>
      </header>
      <div className="app-container">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              placeholder="Enter title"
              value={title}
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>

          <div className="form-check mb-3">
            <input
              id="completed"
              type="checkbox"
              className="form-check-input"
              value={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            ></input>
            <label className="form-check-label" htmlFor="completed">
              Completed
            </label>
          </div>

          <button type="submit" disabled={!title} className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
