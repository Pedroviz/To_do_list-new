import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = () => {
    if (!newTask.trim()) return;
    const task = { task: newTask, completed: false };
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => setTasks([...tasks, data]));
    setNewTask("");
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:8080/todos/${id}`, { method: "DELETE" })
      .then(() => setTasks(tasks.filter((task) => task.id !== id)));
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
      
      {/* Dashboard */}
      <div className="w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <p>Total de tarefas: {tasks.length}</p>
        <p>Concluídas: {completedTasks.length}</p>
        <p>Pendentes: {pendingTasks.length}</p>
      </div>

      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-2 rounded-l bg-gray-700 text-white outline-none"
            placeholder="Nova tarefa..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="p-3 bg-blue-500 hover:bg-blue-600 rounded-r"
            onClick={addTask}
          >
            <FaPlus />
          </button>
        </div>
        
        {/* Lista de tarefas pendentes */}
        <h2 className="text-lg font-semibold mb-2">Tarefas Pendentes</h2>
        <ul>
          {pendingTasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-700 p-3 my-2 rounded-lg"
            >
              <span
                className="flex-grow cursor-pointer"
                onClick={() => toggleComplete(task.id)}
              >
                {task.task}
              </span>
              <div className="flex gap-2">
                <button
                  className="text-green-400 hover:text-green-500"
                  onClick={() => toggleComplete(task.id)}
                >
                  <FaCheck />
                </button>
                <button
                  className="text-red-400 hover:text-red-500"
                  onClick={() => deleteTask(task.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Histórico de tarefas concluídas */}
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold mb-2">Histórico de Tarefas Concluídas</h2>
        <ul>
          {completedTasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-700 p-3 my-2 rounded-lg text-gray-400"
            >
              <span className="line-through">{task.task}</span>
              <button
                className="text-red-400 hover:text-red-500"
                onClick={() => deleteTask(task.id)}
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
