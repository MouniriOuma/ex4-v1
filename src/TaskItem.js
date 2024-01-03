import React from 'react';

function TaskItem({ task }) {
  return (
    <div>
      <input type="checkbox" checked={task.completed} disabled />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
    </div>
  );
}

export default TaskItem;
