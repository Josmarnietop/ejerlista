import React, { useState, useEffect } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';
//import Lista from './Lista';

const Formulario = () => {
    const [nombreTarea, setNombreTarea] = useState('');
    const [listado, setListado] = useState([]);

    const handleChangeTarea = event => setNombreTarea(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:8000/tareas', { nombre: nombreTarea })
            .then(res => {
                console.log(res);
                listar();
                setNombreTarea('');
            })
    };


    const listar = () => {
        axios.get('http://localhost:8000/tareas')
            .then(res => {
                setListado(res.data)
            })
    }

    useEffect(() => {
        listar();
    }, []);

    return (
        <div className="container bg-white rounded shadow p-5 d-flex justify-content-center align-items-center">

            <Form onSubmit={handleSubmit}>
                <h1>Bienvenido</h1>
                <h3>Ingresa tus tareas</h3>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Tarea nro. ...." value={nombreTarea} onChange={handleChangeTarea} />
                </Form.Group>
                <ListGroup>
                    {listado.map(tarea => (
                        <ListGroup.Item key={tarea.id}>
                            {tarea.nombre}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <Button type="submit">Agregar</Button>

            </Form>
        </div>

    )
}

export default Formulario;