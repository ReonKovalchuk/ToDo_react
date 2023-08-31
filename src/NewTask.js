import React from "react";

export default function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <input className="form-control"
        name="name"
        placeholder="New task"
        value={newTask.name || ""}
        onChange={handleChange} />
      <button className="btn btn-outline-dark " type="submit" >Add task</button>
    </form>
  );
}