import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    const addTask = () => {
        if (!newTask.trim()) return;
        const task = { text: newTask };
        axios.post(process.env.REACT_APP_API_URL + '/todos', task)
            .then(response => setTodos([...todos, response.data]))
            .catch(error => console.error(error));
        setNewTask('');
    };

    const deleteTask = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`)
            .then(() => setTodos(todos.filter(task => task.id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div className={`min-h-screen flex flex-col items-center p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
            <button 
                className="absolute top-4 right-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? 'Modo Claro' : 'Modo Escuro'}
            </button>
            <h1 className="text-3xl font-bold mb-6">Lista de Tarefas</h1>
            <div className={`w-full max-w-md shadow-lg rounded-lg p-6 transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex mb-4">
                    <input 
                        type="text" 
                        className={`flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300'}`} 
                        placeholder="Nova tarefa..." 
                        value={newTask} 
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition-all"
                        onClick={addTask}
                    >
                        Adicionar
                    </button>
                </div>
                <ul>
                    {todos.map(task => (
                        <li key={task.id} className={`flex justify-between items-center p-3 rounded my-2 transition-all duration-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                            <span>{task.text}</span>
                            <button 
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-all"
                                onClick={() => deleteTask(task.id)}
                            >
                                Remover
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ToDoList;
