import React from 'react';
import './App.css';
import FancyText from './components/FancyText';
import TaskGenerator from './components/TaskGenerator';

const App = () => {
  return (
    <div className="App">
      <FancyText title text="Task Management and Motivation App" />
      <TaskGenerator />
      <footer>
        <p>© 2024 Your Company Name</p>
      </footer>
    </div>
  );
};

export default App;
