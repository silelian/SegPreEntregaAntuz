import {BsCart3}  from "react-icons/bs"
import style from "./style.module.css"
const CartWidget = ()=>{

    return(
       
        <div className={style['carrito']}>
            <BsCart3/>           
            <p className={style['carrito-p']}>1</p>
        </div>

    );
}
export default CartWidget