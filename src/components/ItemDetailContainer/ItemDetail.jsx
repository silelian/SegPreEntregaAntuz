import { Col, Card, Container } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
import style from './style.module.css'
import useCounter from '../../customHooks/useCounter';
import { useState } from 'react';

export default function itemDetail({ detail }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [stock, setStock] = useState(20)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const cantidadAgregada = useCounter(1, stock)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [carrito, setCarrito] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const stockContador = useCounter(10, stock)

      const agregar = (cantidad) => {
           setCarrito([...carrito, {cantidad: cantidad}])
          cantidadAgregada.resetear()
          stockContador.decrementarPorValor(cantidad)
          }


    return (
        <Container fluid className="mt-4">
            <div className={style["filaDetalle"]}>
                {/* recorro mi estado q es un array()items, devuelve una 
                card por cada elemento  */}
                <Col key={detail.id} lg={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>{detail.name}</Card.Title>
                            <Card.Img variant="top" src={detail.image} className={style["imagen"]} />
                            <Card.Text>{detail.description}</Card.Text>                           
                            
                            {/* stock */}
                            <div>
                            <p className={style["stock"]}>
                                Stock: {stockContador.contador} 
                            </p>
                            </div>
                            <div className={style["Agregar"]}>
                                <p>
                                    Cantidad: {cantidadAgregada.contador}
                                </p>
                                <button className={style["botonAgregar"]} onClick={cantidadAgregada.decrementar}>-</button>
                                <button className={style["botonAgregar"]} onClick={cantidadAgregada.aumentar}>+</button>
                                
                            </div>
                            <button onClick={() => agregar(cantidadAgregada.contador)} className={style["boton"]}>Agergar Carrito</button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </Container>
    )
}