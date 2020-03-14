import React, {useState} from 'react';
//import {Form} from 'react-bootstrap';
import ListGroup from 'react-bootstrap';

const Lista = () => {


return (
    <ListGroup>
{listaFiltrada.map(producto => (
          <ListGroup.Item key={producto.nombre}>
            {producto.nombre},{producto.precio}
          </ListGroup.Item>
        ))}
    </ListGroup>
)
}
    export default Lista;