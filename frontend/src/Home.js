import React from 'react';
import { Link } from 'react-router-dom'; // Se estiver usando React Router

const Home = () => {
    return (
        <div style={styles.container}>
            <h1>Bem-vindo ao To-Do List!</h1>
            <p>Gerencie suas tarefas de forma simples e eficiente.</p>
            <Link to="/app" style={styles.button}>
                Acessar o To-Do List
            </Link>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    button: {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        marginTop: '20px',
    },
};

export default Home;