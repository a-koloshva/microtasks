import React from 'react';

type SuperTodolistProps = {
  tasks: TaskType[];
  children: React.ReactNode;
};

type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

export const SuperTodolist = ({ tasks, children }: SuperTodolistProps) => {
  return (
    <div>
      <ul>
        {tasks.map(({ id, title, isDone }) => {
          return (
            <li>
              <input type="checkbox" checked={isDone} />
              <span>{id}-</span>
              <span>{title}</span>
            </li>
          );
        })}
      </ul>
      {children}
      <hr />
    </div>
  );
};
