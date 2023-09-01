// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import NewTask from './NewTask';
import TasksList from './TaskList';
import tasks from './tasks';

function App() {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value, done: false }));
  };

  const [allTasks, setAllTasks] = useState(tasks || []);
  const finishedTasks = allTasks.filter((task) => task.done);
  const unfinishedTasks = allTasks.filter((task) => !task.done);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.name) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});

  };
  const handleCheckboxChange = (id) => {
    const index = allTasks.findIndex((task) => task.id === id);
    allTasks[index].done = !allTasks[index].done;
    setAllTasks(() => [...allTasks]);

  };
  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));

  };
  return (
    <div className="app-container" id="app">
      <h1>Todo list </h1>
      <div className="todo-app">
        <small className="counter mb-2 ms-2">{finishedTasks.length} done, {unfinishedTasks.length} more to go </small>
        <NewTask newTask={newTask}
          handleChange={handleChange}
          handleSubmit={handleSubmit} />
        <TasksList allTasks={unfinishedTasks} handleDelete={handleDelete} handleChange={handleCheckboxChange} />
        <TasksList allTasks={finishedTasks} handleDelete={handleDelete} handleChange={handleCheckboxChange} />
      </div>
    </div>
  );
}

export default App;
