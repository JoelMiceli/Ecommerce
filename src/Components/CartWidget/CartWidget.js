import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    
    return (
    <div>
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block': 'none'}}>
    <IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon/> {totalQuantity}
    </IconButton>
    </Link>
    </div>
    )
}
export default CartWidget