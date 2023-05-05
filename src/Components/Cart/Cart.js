import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"


const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito 😐 </h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
                )
            }

    return (
        <div>
            { cart.map(p => <CartItem key ={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <Button onClick={()=> clearCart()} className="Button">Limpiar carrito</Button>
            <Link to='/checkout' class="btn btn-success">Checkout</Link>
            
        </div>
    )
}

export default Cart;