import React, { useState } from 'react'
import { useCartContext } from '../../context/CarContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/client"
import style from "./style.module.css";


export default function Order() {
    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, clearCart } = useCartContext();
    console.log('entra')

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        // const pedido = {
        //     cliente: data,
        //     productos: carrito,
        //     total: precioTotal()
        // }
        // console.log(pedido);

        // const pedidosRef = collection(db, "productos");

        // addDoc(pedidosRef, pedido)
        //     .then((doc) => {
        //         setPedidoId(doc.id);
        //         clearCart();
        //     })

    }

    // if (pedidoId) {
    //     return (
    //         <div className={style["carrito-contenedor"]}>
    //             <div className={style["carrito-titulo"]}>Muchas gracias por tu compra</div>
    //             <p>Tu número de pedido es: {pedidoId}</p>
    //         </div>
    //     )
    // }

  return (
    <div className={style["carrito-contenedor"]}>
        {/* <div className={style["carrito-titulo"]}>Finalizar compra</div>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Comprar</button>

        </form> */}
    </div>
  )
}
// ************************************************
    // const [pedidoId, setPedidoId] = useState("");

    // const { carrito, precioTotal, clearCart } = useCartContext();

    // const { register, handleSubmit } = useForm();

    //***************finalizar compra***************** */
    // const crearComprar = (data) => {
    //     const pedido = {
    //         cliente: "",
    //         productos: carrito,
    //         total: precioTotal()
    //     }
    //     console.log(pedido);

    //     //voy a crear una orden del pedido
    //     const pedidosRef = collection(db, "orders");

    //     addDoc(pedidosRef, pedido).then(({ id }) => {
    //         //setPedidoId(doc.id);
    //         clearCart();
    //     })

    // }
    //********************************************************** */
    // *******************MODIFICAR ORDEN**************************
    // Hacer un update de un DOC
    // const updateOrder = (id) => {
    //     const orderToUpdate = doc(db, "orders", id)
    //     updateDoc(orderToUpdate, { total: 99 }) // Segundo parametro: Los campos que quiero updatear
    // }
    // *********************************************************
    // if (pedidoId) {
    //     return (

    //         <div className={style[""]}>
    //             <h1 className="main-title">Muchas gracias por tu compra</h1>
    //             <p>Tu número de pedido es: {pedidoId}</p>
    //         </div>
    //     )
    // }

    // return (
    //     <div className={style["contenedor-finalizar"]}>
    //         <button className={style["finalizarCompra"]} onClick={crearComprar}>Terminar Compra</button>
    //         <button className={style["modificar"]} onClick={() => updateOrder('IfdlpJ6jp6897V3wZJmF')}>Editar orden</button>
    //         <h5 >Finalizar compra</h5>
    //         {/* <Finalizar />
    //     */}
        
           
    //         {/* <form className={style["formulario"]} onSubmit={handleSubmit(crearComprar)}> */}
    //         <form className={style["formulario"]}>
    //             <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
    //             <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
    //             <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
    //         </form>
    //         {/* */}
    //     </div>

//     )
// }
