import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './assets/styles/global.css';
import BubbleEffect from './components/BubbleEffect'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, text) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text } : task)));
    setCurrentTask(null);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskInput addTask={addTask} editTask={editTask} currentTask={currentTask} />
      <TaskList
      
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        setEditTask={setCurrentTask}
      />
      <BubbleEffect /> 
      <div className="bubble-container">
      {/* Adding several bubbles */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <Footer />
    </div>
    </div>
  );
};

export default App;
