import React, { useState } from 'react';

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    onTaskComplete(task.id);
  };

  const handleDelete = () => {
    onTaskDelete(task.id);
  };

   return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        backgroundColor: completed ? 'red' : 'white', // Cambia a rojo cuando está completada
      }}
    >
      {task.name}
      <button onClick={handleComplete}>{completed ? 'Desmarcar' : 'Completar'}</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
