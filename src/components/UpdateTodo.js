import React, { useState } from "react";
import { useNavigate } from "react-router";
import { updateTodo } from "../services";

const UpdateTodo = ({ todo, onUpdateTodo }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(todo.title);
  const [completed, setCompleted] = useState(todo.completed);

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await updateTodo(todo.id, title, completed);
    onUpdateTodo(res);
    navigate("/");
  };

  return (
    <div>
      <header>
        <h1 className="text-muted">Update todo</h1>
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTodo;
