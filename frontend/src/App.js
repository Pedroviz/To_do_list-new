import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState('');

    // Buscar tarefas
    useEffect(() => {
        axios.get('http://localhost:5000/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    // Adicionar tarefa
    const addTask = () => {
        if (!newTask) return;
        axios.post('http://localhost:5000/todos', { task: newTask })
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

export default App;