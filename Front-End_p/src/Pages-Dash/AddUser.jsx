import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Formik } from 'formik';
import './Dash.css'

function AddUser({ onAddUser, onCancelAddUser }) {

  const handleCancel = () => {
    onCancelAddUser(); // Llamada a la función onAddUser para cerrar el formulario
  }

  return (
    <>
      <Formik
        initialValues={{
          UserName: "",
          Password: ""
        }}

        // Validar que los Form contengan la info solicitada
        validate={(values) => {
          const errors = {};

          if (!values.UserName) {
            errors.UserName = 'Campo obligatorio';
          }

          if (!values.Password) {
            errors.Password = 'Campo obligatorio';
          }

          return errors;
        }}

        // VER LOS VALORES QUE AGREGA EL USUARIO
        onSubmit={async (values, actions) => {
          if (values.UserName && values.Password) {
            await axios.post('http://localhost:3000/users', values);
            actions.resetForm()
            alert('Datos agregados correctamente')
            onAddUser();
            console.log(values);
          } else {
            onCancelAddUser();
          }
        }}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <div id="centro">
            <h2>Nuevo usuario</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label for='user'>Usuario</Form.Label>
                <Form.Control
                  id='user'
                  className="form-contro"
                  type="text"
                  name="UserName"
                  onChange={handleChange}
                  value={values.UserName}
                  isInvalid={!!errors.UserName}
                />
                <Form.Control.Feedback className='obli' type="invalid">{errors.UserName}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label for='pass'>Contraseña</Form.Label>
                <Form.Control
                  id='pass'
                  className="form-contro"
                  type="text"
                  name="Password"
                  onChange={handleChange}
                  value={values.Password}
                  isInvalid={!!errors.Password}
                />
                <Form.Control.Feedback className='obli' type="invalid">{errors.Password}</Form.Control.Feedback>
              </Form.Group>
              <div className='position'>
                <button type='submit' className="guar">Guardar</button>
                <button className="delete" type='button' onClick={() => handleCancel()}>Cancelar</button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  )
}
export default AddUser