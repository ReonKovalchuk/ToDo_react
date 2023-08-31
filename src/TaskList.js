import React from "react";

export default function TasksList({ allTasks, handleChange, handleDelete }) {
  return (
    <div className="mb-3">
      <ul className="list-group">

        {allTasks.map(({ name, done, id }) => (
          <li className="list-group-item list-item" key={id}>
            <i className="bi bi-list me-3 handle"></i>
            <label className={done ? "form-check-label done" : "form-check-label"}>
              <input className="form-check-input me-2" type="checkbox" id={id} defaultChecked={done} onChange={() => handleChange(id)} />
              {name}</label>
            <button type="button" className="icon-btn delete-btn" aria-label="Delete task" onClick={() => handleDelete(id)}>
              <i className="bi bi-trash-fill"></i>
            </button>

          </li>
        ))}

      </ul>
    </div>
  );
}