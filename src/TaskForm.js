import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      onAddTask({ id: Date.now(), name: taskName, completed: false });
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskName} onChange={handleInputChange} />
      <button type="submit">Añadir Tarea</button>
    </form>
  );
};

export default TaskForm;
