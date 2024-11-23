import React, { useState } from 'react';

const TaskInput = ({ addTask, editTask, currentTask }) => {
  const [task, setTask] = useState(currentTask ? currentTask.text : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      editTask(currentTask.id, task);
    } else {
      addTask(task);
    }
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskInput;
