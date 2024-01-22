import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';

export type todolistsType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todolists, setTodolists] = useState<Array<todolistsType>>([
    { id: todolistID1, title: 'What to learn', filter: 'all' },
    { id: todolistID2, title: 'What to buy', filter: 'all' },
  ]);

  let [tasks, setTasks] = useState({
    [todolistID1]: [
      { id: v1(), title: 'HTML&CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'ReactJS', isDone: false },
      { id: v1(), title: 'Rest API', isDone: false },
      { id: v1(), title: 'GraphQL', isDone: false },
    ],
    [todolistID2]: [
      { id: v1(), title: 'HTML&CSS2', isDone: true },
      { id: v1(), title: 'JS2', isDone: true },
      { id: v1(), title: 'ReactJS2', isDone: false },
      { id: v1(), title: 'Rest API2', isDone: false },
      { id: v1(), title: 'GraphQL2', isDone: false },
    ],
  });

  let obj = { id: todolistID1, title: 'What to learn', filter: 'all' };
  console.log({ ...obj, filter: '123123' });

  // function removeTask(todolistID: string, id: string) {
  //   setTasks({ ...tasks, [todolistID]: tasks[todolistID].filter((t) => t.id !== id) });
  // }

  function removeTask(todolistID: string, id: string) {
    console.log(tasks[todolistID]);
  }

  function addTask(todolistID: string, title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    setTasks({ ...tasks, [todolistID]: [newTask, ...tasks[todolistID]] });
  }

  function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
    setTasks({
      ...tasks,
      [todolistID]: tasks[todolistID].map((t) => (t.id === taskId ? { ...t, isDone: isDone } : t)),
    });
  }

  // function changeFilter(todolistID: string, value: FilterValuesType) {
  //   setTodolists(
  //     todolists.map((filtered) =>
  //       filtered.id === todolistID ? { ...filtered, filter: value } : filtered,
  //     ),
  //   );
  // }

  function changeFilter(todolistID: string, value: FilterValuesType) {
    // console.log([...todolists, todolists.map((todolist)=>todolist.id===todolistID ? {...todolist, filter: value} : todolist));
    console.log(
      todolists.map((todolist) =>
        todolist.id === todolistID ? { ...todolist, filter: value } : todolist,
      ),
    );
  }

  return (
    <div className="App">
      {todolists.map((mapTodolist) => {
        let tasksForTodolist = tasks[mapTodolist.id];

        if (mapTodolist.filter === 'active') {
          tasksForTodolist = tasksForTodolist.filter((t) => t.isDone === false);
        }
        if (mapTodolist.filter === 'completed') {
          tasksForTodolist = tasksForTodolist.filter((t) => t.isDone === true);
        }

        return (
          <Todolist
            key={mapTodolist.id}
            todolistID={mapTodolist.id}
            title={mapTodolist.title}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            filter={mapTodolist.filter}
          />
        );
      })}
    </div>
  );
}

export default App;
