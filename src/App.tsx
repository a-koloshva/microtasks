import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';

export type TodolistsType = {
  id: string;
  title: string;
};

type TasksType = {
  [key: string]: DataFilterType;
};

type DataFilterType = {
  data: TaskType[];
  filter: FilterValuesType;
};

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

//TaskType[]

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
  let todolistID1 = v1();
  let todolistID2 = v1();

  // let [todolists, setTodolists] = useState<Array<todolistsType>>([
  //   { id: todolistID1, title: 'What to learn', filter: 'all' },
  //   { id: todolistID2, title: 'What to buy', filter: 'all' },
  // ]);

  // let [tasks, setTasks] = useState({
  //   [todolistID1]: [
  //     { id: v1(), title: 'HTML&CSS', isDone: true },
  //     { id: v1(), title: 'JS', isDone: true },
  //     { id: v1(), title: 'ReactJS', isDone: false },
  //     { id: v1(), title: 'Rest API', isDone: false },
  //     { id: v1(), title: 'GraphQL', isDone: false },
  //   ],
  //   [todolistID2]: [
  //     { id: v1(), title: 'HTML&CSS2', isDone: true },
  //     { id: v1(), title: 'JS2', isDone: true },
  //     { id: v1(), title: 'ReactJS2', isDone: false },
  //     { id: v1(), title: 'Rest API2', isDone: false },
  //     { id: v1(), title: 'GraphQL2', isDone: false },
  //   ],
  // });

  let [todolists, setTodolists] = useState<TodolistsType[]>([
    { id: todolistID1, title: 'What to learn' },
    { id: todolistID2, title: 'What to buy' },
  ]);

  let [tasks, setTasks] = useState<TasksType>({
    [todolistID1]: {
      data: [
        { id: v1(), title: 'HTML&CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: true },
        { id: v1(), title: 'ReactJS', isDone: false },
        { id: v1(), title: 'Rest API', isDone: false },
        { id: v1(), title: 'GraphQL', isDone: false },
      ],
      filter: 'all',
    },
    [todolistID2]: {
      data: [
        { id: v1(), title: 'HTML&CSS2', isDone: true },
        { id: v1(), title: 'JS2', isDone: true },
        { id: v1(), title: 'ReactJS2', isDone: false },
        { id: v1(), title: 'Rest API2', isDone: false },
        { id: v1(), title: 'GraphQL2', isDone: false },
      ],
      filter: 'all',
    },
  });

  function removeTask(todolistID: string, id: string) {
    // setTasks({ ...tasks, [todolistID]: tasks[todolistID].filter((task) => task.id !== id) });
    setTasks({
      ...tasks,
      [todolistID]: {
        ...tasks[todolistID],
        data: tasks[todolistID].data.filter((task) => task.id !== id),
      },
    });
  }

  function addTask(todolistID: string, title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    // setTasks({ ...tasks, [todolistID]: [newTask, ...tasks[todolistID]] });
    setTasks({
      ...tasks,
      [todolistID]: { ...tasks[todolistID], data: [...tasks[todolistID].data, newTask] },
    });
  }

  function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
    // setTasks({
    //   ...tasks,
    //   [todolistID]: tasks[todolistID].map((task) =>
    //     task.id === taskId ? { ...task, isDone: isDone } : task,
    //   ),
    // });
    setTasks({
      ...tasks,
      [todolistID]: {
        ...tasks[todolistID],
        data: tasks[todolistID].data.map((task) =>
          task.id === taskId ? { ...task, isDone: isDone } : task,
        ),
      },
    });
  }

  function changeFilter(todolistID: string, value: FilterValuesType) {
    // setTodolists(
    //   todolists.map((todolist) =>
    //     todolist.id === todolistID ? { ...todolist, filter: value } : todolist,
    //   ),
    // );
    setTasks({
      ...tasks,
      [todolistID]: { ...tasks[todolistID], filter: (tasks[todolistID].filter = value) },
    });
  }

  function removeTodolist(todolistID: string) {
    setTodolists(todolists.filter((todolist) => todolist.id !== todolistID));
    delete tasks[todolistID];
    setTasks({ ...tasks });
  }

  return (
    <div className="App">
      {todolists.map((mapTodolist) => {
        let tasksForTodolist = tasks[mapTodolist.id].data;

        if (tasks[mapTodolist.id].filter === 'active') {
          tasksForTodolist = tasks[mapTodolist.id].data.filter((t) => t.isDone === false);
        }
        if (tasks[mapTodolist.id].filter === 'completed') {
          tasksForTodolist = tasks[mapTodolist.id].data.filter((t) => t.isDone === true);
        }

        return (
          <Todolist
            key={mapTodolist.id}
            todolistID={mapTodolist.id}
            title={mapTodolist.title}
            filter={tasks[mapTodolist.id].filter}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            removeTodolist={removeTodolist}
          />
        );
      })}
    </div>
  );
}

export default App;
