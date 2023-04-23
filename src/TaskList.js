import React, { useState } from 'react';

function TaskList({ tasks, addTask }) {
  const [newTask, setNewTask] = useState(''); // state to hold new task input value

  // function to handle new task input change
  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  // function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTask !== '') {
      addTask({
        name: newTask,
        duration: 0,
        subCategory: '',
        everyday: false,
        solitary: true,
        screen: false,
        quarter: 0,
      });
      setNewTask('');
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          New Task:
          <input type="text" value={newTask} onChange={handleNewTaskChange} />
        </label>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
