import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { Button, Row, Col, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    //defino el estado del producto q voy a mostrar
    const [detail, setDetail] = useState({});
    //uso el param para el parametro
    const { id } = useParams();

       
    //useEfect
    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch("/data/products.json");
            const products = await response.json();
            //filtro por find devuelve un unico id
            const filteredProduct = products.find(products => products.id === parseInt(id))   
            setDetail(filteredProduct)
        }
        //llamo la fncion
        getProduct()        
    }, [id]);
    return <ItemDetail detail ={detail}/>;
}
