import React from "react";

const icons = {
  edit: (
    <span role="img" aria-label="edit" style={{ color: "#f4b400" }}>✏️</span>
  ),
  del: (
    <span role="img" aria-label="delete" style={{ color: "#ea4335" }}>🗑️</span>
  ),
};

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="todo-list">
      {todos.map((t) => (
        <li key={t.id} className="todo-list-item">
          <input
            type="checkbox"
            checked={t.done}
            onChange={() => onToggle(t.id)}
          />
          <span className={t.done ? "todo-done" : ""}>{t.name}</span>
          <button className="todo-icon-btn" title="Edit" disabled>
            {icons.edit}
          </button>
          <button
            className="todo-icon-btn"
            title="Delete"
            onClick={() => onDelete(t.id, t.name)}
          >
            {icons.del}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;