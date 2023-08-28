import { useEffect, useState } from "react";
// import Item from "../../components/item"
 import style from './style.module.css'
//useParams, nos permite acceder a ese url param,es decir, al valor del parametro ej cartera,mochila
import { useParams,Link } from "react-router-dom";
import { Col, Card, Container } from "react-bootstrap";

// import CarteraBeige from "../../assets/img/CarteraBeige.jpg"

export default function ItemListConatainer() {
    //almaceno los productos
    const [items, setItems] = useState([]);

    //desestructuro, con el id(solo saco lo q me importa del objeto p poder filtrar)
    const { id } = useParams();

    //si uso params, saco todo y luego pondria params.id (lo q necesito)
    // const params = useParams()

    // se llama una sola vez al componenete.
    useEffect(() => {
        //consulta a base de datos o .json
        const getProducts = async () => {
            const response = await fetch('../data/products.json');
            const products = await response.json();
            console.log(products)
            //products lo q me retorna mi promesa
            //voy a filtrar lo q traigo de la base de datos
            // por cada producto me retorne esa categoria
            const filteredProducts = products.filter(
                (products) => products.category === id)
                // el filter te retorna un array
                //return, ejecuta la funcion y nada mas. sino haria lo de abajo setItems(products)
                // en mi estado devuelvo (setItems) los productos filtrados en filterdproducts 
             if (filteredProducts.length > 0) return setItems (filteredProducts)   
            //cdo no encuentra nada en el id, me muestra todos. Es cdo volvemos al iniciio
             setItems(products);
        };
        getProducts();
        // console.log(id)
    }, [id]);

    return (
        <Container fluid className="mt-4">
            <div className={style["fila"]}>
                {/* recorro mi estado q es un array()items, devuelve una 
                card por cada elemento  */}
                {items.map((item) => (
                    <Col key={item.id} lg={4} className="mb-4">
                        <Card>
                            {/* <Card.Img variant="top" /> */}
                            {/* src={img} */}
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>                                
                                <Card.Img  src={process.env.PUBLIC_URL + item.image} className={style["imagen"]}/>
                                <Card.Text>{item.description}</Card.Text>  
                                {/* en el link le paso el id del producto en particular */}
                                {/* <Button as = {Link} to = {`/item/${item.id}`} className={style["boton"]}>Ver Mas</Button> */}
                                <Link to = {`/item/${item.id}`} className={style["boton"]}>Ver Detalle</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </div>
        </Container>
    );
}
// export default ItemListConatainer
