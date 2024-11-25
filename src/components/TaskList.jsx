import React from 'react';
import TaskItem from './TaskItem';
import '../assets/styles/global.css';


const TaskList = ({ tasks, deleteTask, toggleComplete, setEditTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          setEditTask={setEditTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
