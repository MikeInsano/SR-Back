import React, { useEffect, useState } from "react"
import axios from 'axios'
import './Dash.css'
import AddUser from "./AddUser"
import NavDash from './NavDash'
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap'

function IndexUser() {
    const [Users, setUsers] = useState([]);
    const [lastId, setLastId] = useState(0); // Variable para almacenar el último ID utilizado
    const [showAddUser, setShowAddUser] = useState(false);

    useEffect(() => {
        // Lógica para obtener los usuarios de la base de datos al cargar el componente
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:3000/users'); // Ruta de la API para obtener usuarios
        setUsers(response.data); //Metiendo la respuesta(data) al estado 
        console.log(response.data);

        // Obtener el máximo ID en la lista actual de usuarios
        const maxId = users.reduce((max, user) => Math.max(max, user.PkUser), 0);
        setLastId(maxId);
    };

    const [modalEditar, setModalEditar] = useState(false)
    const [form, setForm] = useState({
        PkUser: "",
        UserName: "",
        Password: "",
    });

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // Editar
    const mostrarmodalEditar = (registro) => {
        setForm({
            PkUser: registro.PkUser,
            UserName: registro.UserName,
            Password: registro.Password
        });
        setModalEditar(true);
    }
    const ocultarmodalEditar = () => {
        setModalEditar(false);
    }

    // Insertar datos
    const insertar = () => {
        const newId = lastId + 1; // Incrementar el ID utilizando lastId
        const valorNuevo = { ...form, PkUser: newId };
        const lista = [...Users, valorNuevo];
        setUsers(lista);
        setLastId(newId); // Actualizar lastId con el nuevo ID utilizado
        setModalInsertar(false);
        setShowAddUser(false);
    }

    // Editar el registro tanto en tabla como en BD
    const editar = (dato) => {
        axios.put(`http://localhost:3000/users/${dato.PkUser}`, dato)
            .then(() => {
                var lista = Users.map((registro) => {
                    if (dato.PkUser == registro.PkUser) {
                        return {
                            ...registro,
                            UserName: dato.UserName,
                            Password: dato.Password
                        };
                    }
                    return registro;
                });
                setUsers(lista);
                setModalEditar(false);
                alert('Registro actualizado correctamente');
            })
            .catch((error) => {
                console.error('Error al actualizar el registro:', error);
                alert('Error al actualizar el registro');
            })
    }

    // Eliminar fila de registro tanto en tabla como BD
    const eliminar = (dato) => {
        var opcion = window.confirm("Realmente desea eliminar el registro " + dato.PkUser);
        if (opcion) {
            axios.delete(`http://localhost:3000/users/${dato.PkUser}`)
                .then(() => {
                    var lista = Users.filter((registro) => registro.PkUser !== dato.PkUser)
                    setUsers(lista);
                    alert('Registro eliminado correctamente');
                })
                .catch((error) => {
                    console.error('Error al eliminar el registro:', error);
                    alert('Error al eliminar el registro');
                })
        }
    }

    return (
        <>
            {/* <NavDash /> */}
            <Container className="ctn-tables">
                <Button className="agregar" onClick={() => setShowAddUser(true)}>Nuevo Usuario</Button>
                {showAddUser && <AddUser onCancelAddUser={insertar} />}
                <h1>Lista de usuarios</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Contraseña</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Users.map((user) => (
                            <tr key={user.PkUser}>
                                <td>{user.PkUser}</td>
                                <td>{user.UserName}</td>
                                <td>{user.Password}</td>
                                <td className="Button-flex">
                                    <Button className="edit" onClick={() => mostrarmodalEditar(user)}>Editar</Button>
                                    <Button className="delete" onClick={() => eliminar(user)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

            {/* Editar Usuario */}
            <Modal isOpen={modalEditar} id="centro">
                <ModalHeader>
                    <div><h3>Editar Registro</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>Id:</label>
                        <input
                            className="form-contro"
                            readOnly
                            type="text"
                            value={form.PkUser}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label for="nombre">Nombre:</label>
                        <input
                            id="nombre"
                            className="form-contro"
                            name="UserName"
                            type="text"
                            onChange={handleChange}
                            value={form.UserName}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label for="contra">Contraseña:</label>
                        <input
                            id="contra"
                            className="form-contro"
                            name="Password"
                            type="text"
                            onChange={handleChange}
                            value={form.Password}
                        />
                    </FormGroup>
                </ModalBody>

                <ModalFooter className="final">
                    <Button onClick={() => editar(form)} >
                        Editar
                    </Button>
                    <Button onClick={ocultarmodalEditar}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default IndexUser