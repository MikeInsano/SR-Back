import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validateSignup from './SignupValidation';
import axios from 'axios';


function Signup() {
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

  const [values, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateSignup(values);
    setErrors(validationErrors);

    if (!validationErrors.name && !validationErrors.email && !validationErrors.password) {
      axios.post('http://localhost:3006/signup', values)
        .then((res) => {
          navigate('/');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>REGISTRO</h2>
        <form action='' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='Nombre'>Nombre</label>
            <input
              type='text'
              id='Nombre'
              placeholder='Ingresa tu Nombre'
              name='name'
              onChange={handleInput}
              style={inputStyle}
            />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>

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
          <button type='submit' className='btn btn-success' style={buttonStyle}>
            Crear Cuenta
          </button>
        </form>
        <p>¿Ya tienes una cuenta?</p>
        <Link to='/' className='btn btn-outline-primary' style={buttonStyle}>
          Iniciar Sesion
        </Link>
      </div>
    </div>
  );
}

export default Signup;
