import React from 'react';
import axios from 'axios';

const ToDoList = () => {
    const [todos, setTodos] = React.useState([]);
    const [newTask, setNewTask] = React.useState('');
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    React.useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/todos')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const addTask = () => {
        if (!newTask) return;

        axios.post(process.env.REACT_APP_API_URL + '/todos', { task: newTask })
            .then(response => {
                setTodos([...todos, response.data]);
                setNewTask('');
            })
            .catch(error => {
                console.error(error);
            });
    };

    const deleteTask = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(error => {
                console.error(error);
            });
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const backgroundColor = isDarkMode ? '#333' : '#f0f0f0';
    const textColor = isDarkMode ? 'white' : 'black';
    const cardBackgroundColor = isDarkMode ? '#444' : '#e0e0e0';

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: backgroundColor,
            color: textColor,
            transition: 'all 0.3s ease', // Adiciona transição suave
        }}>
            <div style={{
                width: '400px',
                padding: '20px',
                backgroundColor: cardBackgroundColor,
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease', // Adiciona transição suave
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                }}>
                    <h1 style={{
                        fontSize: '24px',
                        margin: 0, // Remove margem padrão do h1
                    }}>Lista de Tarefas</h1>
                    <button onClick={toggleDarkMode} style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '24px',
                        color: textColor,
                        transition: 'all 0.3s ease', // Adiciona transição suave
                    }}>
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                </div>
                <div style={{
                    display: 'flex',
                    marginBottom: '10px',
                }}>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Nova tarefa"
                        style={{
                            flexGrow: 1,
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            marginRight: '8px',
                            backgroundColor: isDarkMode ? '#555' : 'white',
                            color: textColor,
                            transition: 'all 0.3s ease', // Adiciona transição suave
                        }}
                    />
                    <button onClick={addTask} style={{
                        padding: '8px 16px',
                        backgroundColor: '#2196F3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease', // Adiciona transição suave
                    }}>Adicionar</button>
                </div>
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                }}>
                    {todos.map(todo => (
                        <li key={todo.id} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px 0',
                            borderBottom: '1px solid #ddd',
                        }}>
                            {todo.task}
                            <button onClick={() => deleteTask(todo.id)} style={{
                                padding: '6px 12px',
                                backgroundColor: '#f44336',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease', // Adiciona transição suave
                            }}>Remover</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ToDoList;