import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type TasksType = {
    [key: string]: TaskTodolistIDType[]
}
export type TaskTodolistIDType = {
    id: string
    title: string
    isDone: boolean
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    function removeTask(todolistID: string, id: string) {
        console.log(tasks[todolistID])
        setTasks({
            ...tasks,
            [todolistID]: tasks[todolistID].filter(el => el.id !== id)
        })
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
    }

    function addTask(todolistID: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({
            ...tasks,
            [todolistID]: [newTask, ...tasks[todolistID]]
        })
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
        setTasks({
            ...tasks,
            [todolistID]: tasks[todolistID].map(
                el => el.id === taskId
                    ? {...el, isDone: isDone}
                    : el
            )
        })
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        //
        // setTasks([...tasks]);
    }

    // let tasksForTodolist = tasks[todolistID];

    // if (todolists.filter === "active") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === false);
    // }
    // if (filter === "completed") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === true);
    // }

    function changeFilter(todolistID: string, value: FilterValuesType) {
        console.log(todolistID)
        // setFilter(value)
        // {id: todolistID1, title: 'What to learn', filter: 'all'}
        setTodolists(todolists.map(
            filtered => filtered.id === todolistID
                ? {...filtered, filter: value}
                : filtered
        ))
    }

    return (
        <div className="App">
            {
                todolists.map(mapTodolists => {
                    let tasksForTodolist = tasks[mapTodolists.id];

                    if (mapTodolists.filter === "active") {
                        tasksForTodolist = tasks[mapTodolists.id].filter(t => t.isDone === false);
                    }
                    if (mapTodolists.filter === "completed") {
                        tasksForTodolist = tasks[mapTodolists.id].filter(t => t.isDone === true);
                    }
                    return (
                        <Todolist key={mapTodolists.id}
                                  todolistID={mapTodolists.id}
                                  title={mapTodolists.title}
                                  tasks={tasksForTodolist}
                                  removeTask={removeTask}
                                  changeFilter={changeFilter}
                                  addTask={addTask}
                                  changeTaskStatus={changeStatus}
                                  filter={mapTodolists.filter}
                        />
                    )
                })
            }
        </div>
    );
}

export default App;
