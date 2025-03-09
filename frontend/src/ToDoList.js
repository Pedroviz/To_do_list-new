import React from 'react';
import axios from 'axios';

const ToDoList = () => {
    const [todos, setTodos] = React.useState([]);
    const [newTask, setNewTask] = React.useState('');

    React.useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/todos') // Caminho relativo
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    const addTask = () => {
        if (!newTask) return;
        axios.post(process.env.REACT_APP_API_URL + '/todos', { task: newTask }) // Caminho relativo
            .then(response => {
                setTodos([...todos, response.data]);
                setNewTask('');
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Nova tarefa"
            />
            <button onClick={addTask}>Adicionar</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;