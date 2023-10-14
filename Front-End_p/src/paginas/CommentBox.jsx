import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './styles.css'

const CommentBox = () => {
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);
    const textareaRef = useRef(null);
    const formRef = useRef(null);

    const handleInputChange = (e) => {
        setComment(e.target.value);
    };

    const handleTextareaResize = () => {
        const textarea = textareaRef.current;   
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    useEffect(() => {
        handleTextareaResize();
    }, [comment]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (comment.trim() !== '') {
            const newComment = {
                comentario: comment,
            };

            try {
                const response = await axios.post('http://localhost:3000/opiniones', newComment);
                const createdComment = response.data;
                setCommentsList((prevCommentList) => [...prevCommentList, createdComment]);
                setComment('');
                textareaRef.current.style.height = 'auto' // Restablecer el tamaño del área de texto
                formRef.current.reset(); // Restablecer el formulario
            }   catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-floating">
                    <textarea style={{overflowY: 'hidden'}}
                        ref={textareaRef}
                        id="commentInput"
                        className="form-control"
                        placeholder="Deja un comentario aquí"
                        value={comment}
                        onChange={handleInputChange}
                        onInput={handleTextareaResize}>
                    </textarea>
                    <button type="submit">Publicar</button>
                </div>
            </form>
            <ul className='list-comm'>
                {commentsList.map((comment, index)=>(
                    <li key={index}>{comment.comentario}</li>
                ))}
            </ul>
        </div>
    );
};
export default CommentBox;