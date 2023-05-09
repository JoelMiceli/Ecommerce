import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"


const Cart = () => {
    const { cart, clearCart, removeItem, increaseQuantity, decreaseQuantity, getTotalItems, getTotalPrice } = useContext(CartContext)

    return (
        <div className='cart-container'>
            
        <div className="cart-list">
            {cart.length ? cart.map(item => (
        <div key={item.id} className="cart-item">
        <div>
            <img src={item.image} alt={item.title} />
        </div>
        <div>{item.title}</div>
        <div>{item.quantity}</div>
        <div>${(item.price * item.quantity).toFixed(2)}</div>
        <div className='containerButtons'>
                                
            <Button onClick={() => removeItem(item.id)}>Eliminar</Button>
            <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
            <Button onClick={() => increaseQuantity(item.id)}>+</Button>
        </div>
        </div>
        )) : <p>No hay productos en el carrito.</p> }
        </div>

            
        <div className="cart-summary">
            <h2>Resumen del Carrito</h2>
        <div className="summary-item">
                    
        <div>Productos {getTotalItems()}</div>
        </div>
        <div className="summary-item">
                    
        <div>Total ${getTotalPrice()}</div>
        </div>
                
        <Button onClick={() => { if (cart.length > 0) { clearCart(); } }}>Vaciar Carrito</Button>
        
        <Button onClick={()=> clearCart()} className="Button">Limpiar carrito</Button>
        <Link to='/checkout' class="btn btn-success">Checkout</Link>
        </div>
        </div>
    );
}

export default Cart;