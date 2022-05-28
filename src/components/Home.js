/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router";

import { deleteTodo } from "../services";
import "./Home.css";

import { Link } from "react-router-dom";

const Home = ({ todos, onDelete, setEditTodo }) => {
  const navigate = useNavigate();

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    onDelete(id);
  };

  const handleTodoClick = (todo) => {
    setEditTodo(todo);
    navigate("/update");
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Todo
            </Link>
            <Link to="/new">New Todo</Link>
          </div>
        </nav>
      </header>

      <main className="app-container">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {todos.map((todo, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? "Completed" : "Pending"}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => handleTodoClick(todo)}
                    >
                      Update
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default Home;
