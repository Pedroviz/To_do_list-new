import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ToDoList from './ToDoList'; // Importe o componente ToDoList corretamente

// Estilos para a Landing Page

// Componente principal (App)
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app" element={<ToDoList />} />
            </Routes>
        </Router>
    );
};

export default App;