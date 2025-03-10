import React from 'react';
import axios from 'axios';

const ToDoList = () => {
    // Estado para armazenar a lista de tarefas
    const [todos, setTodos] = React.useState([]);
    // Estado para armazenar o texto da nova tarefa
    const [newTask, setNewTask] = React.useState('');

    // useEffect para buscar as tarefas quando o componente é montado
    React.useEffect(() => {
        console.log('API URL:', process.env.REACT_APP_API_URL); // Log para verificar a URL da API
        axios.get(process.env.REACT_APP_API_URL + '/todos') // Faz a requisição GET para buscar as tarefas
            .then(response => setTodos(response.data)) // Atualiza o estado com as tarefas recebidas
            .catch(error => console.error(error)); // Log de erro em caso de falha
    }, []); // Array de dependências vazio para executar apenas uma vez

    // Função para adicionar uma nova tarefa
    const addTask = () => {
        if (!newTask) return; // Se a nova tarefa estiver vazia, não faz nada
        axios.post(process.env.REACT_APP_API_URL + '/todos', { task: newTask }) // Faz a requisição POST para adicionar a tarefa
            .then(response => {
                setTodos([...todos, response.data]); // Atualiza o estado com a nova tarefa
                setNewTask(''); // Limpa o campo de nova tarefa
            })
            .catch(error => console.error(error)); // Log de erro em caso de falha
    };

    // Função para excluir uma tarefa
    const deleteTask = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`) // Faz a requisição DELETE para excluir a tarefa
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id)); // Atualiza o estado removendo a tarefa excluída
            })
            .catch(error => console.error(error)); // Log de erro em caso de falha
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
                    <li key={todo.id}>
                        {todo.task}
                        <button onClick={() => deleteTask(todo.id)}>Excluir</button> {/* Botão para excluir a tarefa */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;