import React, { useState } from 'react';
import tasks from '../tasks';
import FancyText from './FancyText';
import './TaskGenerator.css';

const motivationalMessages = [
  "Keep pushing forward!",
  "You're doing great!",
  "Stay positive, work hard!",
  "Every step counts!",
  "Believe in yourself!"
];

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const nextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const toggleTaskCompletion = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted;
    setCurrentTaskIndex(taskIndex); // Update state to re-render component
  };

  const currentTask = tasks[currentTaskIndex];
  const currentMessage = motivationalMessages[currentTaskIndex % motivationalMessages.length];

  return (
    <div className="task-generator">
      <FancyText title text="Your Task:" />
      <div className="task">
        <p>{currentTask.name}</p>
        <p>{currentTask.isCompleted ? "Completed ✔" : "Pending"}</p>
        <button onClick={() => toggleTaskCompletion(currentTask.id)}>
          {currentTask.isCompleted ? "Mark as Pending" : "Mark as Completed"}
        </button>
      </div>
      <button onClick={nextTask}>Next Task</button>
      <FancyText text={currentMessage} />
    </div>
  );
};

export default TaskGenerator;
