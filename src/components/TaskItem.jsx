import React from 'react';
import { motion } from 'framer-motion';
import { FaTrash, FaEdit } from 'react-icons/fa';

const TaskItem = ({ task, deleteTask, toggleComplete, setEditTask }) => {
  return (
    <motion.div
      className={`task-item ${task.completed ? 'completed' : ''}`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span>{task.text}</span>
      <div className="actions">
        <FaEdit onClick={() => setEditTask(task)} />
        <FaTrash onClick={() => deleteTask(task.id)} />
      </div>
    </motion.div>
  );
};

export default TaskItem;
