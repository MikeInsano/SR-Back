import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validateLogin from './LoginValidation';
import axios from 'axios';
import './login.css'
import logo from './img/logo.svg';

function Login() {
  // Estado para guardar los valores del formulario
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  // Hook para manejar la navegación en React Router
  const navigate = useNavigate();

  // Estado para guardar los errores de validación
  const [errors, setErrors] = useState({});

  // Función para manejar cambios en los inputs del formulario
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateLogin(values);
    setErrors(validationErrors);

    if (!validationErrors.email && !validationErrors.password) {
      axios
        .post('http://localhost:3006/login', values)
        .then((res) => {
          if (res.data === 'Success') {
            navigate('/Home');
          } else {
            alert('Usuario y contraseña incorrectos');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  // Estilos en línea
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const cardStyle = {
    width: '350px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    marginBottom: '10px',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Iniciar Sesión</h2>
        
        
        
        <form action='' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='Ingresa tu Email'
              name='email'
              onChange={handleInput}
              style={inputStyle}
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor='password'>Contraseña</label>
            <input
              type='password'
              id='password'
              placeholder='Ingresa tu Contraseña'
              name='password'
              onChange={handleInput}
              style={inputStyle}
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' style={buttonStyle}>
            Iniciar Sesión
          </button>
        </form>
        <p>¿Quieres Registrarte?</p>
        <Link to='/Signup' style={buttonStyle}>
          Crear Cuenta
        </Link>
      </div>
    </div>
  );
}

export default Login;
