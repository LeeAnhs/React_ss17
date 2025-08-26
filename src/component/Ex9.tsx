import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import ConfirmModal from "../component/Model";
import "../style/Ex9.css";

const LOCAL_KEY = "todo-list";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const data = localStorage.getItem(LOCAL_KEY);
    if (data) setTodos(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    const trimmed = value.trim();
    if (!trimmed) {
      setError("Tên công việc không được để trống");
      return;
    }
    if (todos.some((t) => t.name.toLowerCase() === trimmed.toLowerCase())) {
      setError("Tên công việc không được trùng");
      return;
    }
    setTodos([...todos, { id: Date.now(), name: trimmed, done: false }]);
    setValue("");
    setError("");
  };

  const handleToggle = (id) => {
    setTodos((old) =>
      old.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const handleOpenDelete = (id, name) => {
    setDeleteTarget({ id, name });
  };

  const handleCloseModal = () => setDeleteTarget(null);

  const handleConfirmDelete = () => {
    setTodos((old) => old.filter((t) => t.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  const doneCount = todos.filter(t => t.done).length;

  return (
    <div className="todoapp-main">
      <div className="todoapp-box">
        <h3 className="todoapp-title">Danh sách công việc</h3>
        <div className="todo-input-row">
          <input
            className="todo-input"
            type="text"
            placeholder="Nhập tên công việc"
            value={value}
            onChange={e => {
              setValue(e.target.value);
              setError("");
            }}
            onKeyDown={e => {
              if (e.key === "Enter") handleAdd();
            }}
          />
          <button className="todo-add-btn" onClick={handleAdd}>Thêm</button>
          {error && <div className="todo-error">{error}</div>}
        </div>
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleOpenDelete}
        />
        <div className="todoapp-footer">
          Công việc đã hoàn thành: {doneCount} / {todos.length}
        </div>
      </div>
      {deleteTarget && (
        <ConfirmModal
          taskName={deleteTarget.name}
          onCancel={handleCloseModal}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default TodoApp;