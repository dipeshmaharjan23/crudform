import React, { useEffect, useState } from "react";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import { getTodos } from "./services";
import UpdateTodo from "./components/UpdateTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await getTodos();

      setTodos(res);
    };

    fetchTodos();
  }, []);

  const onDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const onTodoAdd = (todo) => {
    todos.push(todo);
  };

  const onUpdateTodo = (todo) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return todo;
      }

      return item;
    });

    setTodos(updatedTodos);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/new" element={<AddTodo onTodoAdd={onTodoAdd} />} />
        <Route
          exact
          path="/update"
          element={<UpdateTodo onUpdateTodo={onUpdateTodo} todo={editTodo} />}
        />

        <Route exact path="/edit/:id" element={<EditUser />} />
        <Route
          exact
          path="/"
          element={
            <Home todos={todos} onDelete={onDelete} setEditTodo={setEditTodo} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
