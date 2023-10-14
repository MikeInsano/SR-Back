import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dash.css'
import NavDash from './NavDash'
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap'

const CommentsList = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Lógica para obtener los usuarios de la base de datos al cargar el componente
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await axios.get('http://localhost:3000/opiniones');
            setComments(response.data);
        } catch (error) {
            console.log('Error fetching comments', error);
        }
    };

    const handleEditComment = async (id, updatedComment) => {
        try {
            await axios.put(`http://localhost:3000/opiniones/${id}`, updatedComment);
            fetchComments(); // Actualizar la lista de comentarios después de editar uno.
        } catch (error) {
            console.log('Error editing comment', error);
        }
    };

    const handleDeleteComment = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/opiniones/${id}`);
            fetchComments(); // Actualizar la lista de comentarios después de eliminar uno.
        } catch (error) {
            console.log('Error deleting comment', error);
        }
    };

    const [modalEditar, setModalEditar] = useState(false)
    const [form, setForm] = useState({
        id: "",
        comentario: "",
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
            id: registro.id,
            comentario: registro.comentario
        });
        setModalEditar(true);
    }
    const ocultarmodalEditar = () => {
        setModalEditar(false);
    }

    // Editar el comentario tanto en tabla como en BD
    const editar = async () => {
        const id = form.id; // Obtenemos el ID del comentario desde el formulario
        const updatedComment = { comentario: form.comentario }; // Creamos el objeto con el comentario actualizado

        try {
            await handleEditComment(id, updatedComment); // Invocamos la función para editar el comentario
            alert('Comentario actualizado correctamente');
            setModalEditar(false);
        } catch (error) {
            console.log('Error updating comment', error);
        }
    };

    const eliminar = async (comment) => {
        const id = comment.id; // Obtenemos el ID del comentario desde el objeto comment

        try {
            await handleDeleteComment(id);
            alert('Comentario eliminado correctamente');
        } catch (error) {
            console.log('Error deleting comment', error);
        }
    };

    return (
        <div>
            <NavDash/>
            <Container className="ctn-table">
                <h1>Lista de Comentarios</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Comentario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map((comment) => (
                            <tr key={comment.id}>
                                <td>{comment.id}</td>
                                <td>{comment.comentario}</td>
                                <td className="Button-flex">
                                    <Button className="edit" onClick={() => mostrarmodalEditar(comment)}>Editar</Button>
                                    <Button className="delete" onClick={() => eliminar(comment)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

            {/* Editar comentario */}
            <Modal isOpen={modalEditar} id="centro">
                <ModalHeader>
                    <div><h3>Editar Comentario</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>Id:</label>
                        <input
                            className="form-contro"
                            readOnly
                            type="text"
                            value={form.id}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label for="comment">Comentario:</label>
                        <input
                            id="comment"
                            className="form-contro"
                            name="comentario"
                            type="text"
                            onChange={handleChange}
                            value={form.comentario}
                        />
                    </FormGroup>
                </ModalBody>

                <ModalFooter className="final">
                    <Button onClick={editar} >
                        Editar
                    </Button>
                    <Button onClick={ocultarmodalEditar}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};
export default CommentsList;