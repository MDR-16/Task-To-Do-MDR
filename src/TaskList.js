import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
  return (
    <div>
      <h2>Tus Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskComplete={onTaskComplete}
            onTaskDelete={onTaskDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
