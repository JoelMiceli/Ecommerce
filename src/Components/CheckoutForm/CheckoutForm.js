import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, getTotalPrice, clearCart } = useContext(CartContext)

    const createOrder = async ({ UnameUser, phone, email }) => {
        setLoading(true)
        try {
            const order  = {
                buyer: { UnameUser, phone, email },
                items: cart,
                total: getTotalPrice(),
                date: Timestamp.fromDate(new Date())
            }
            
            const orderCollection = collection(db, "orders");
            const docRef = await addDoc(orderCollection, order);
            setOrderId(docRef.id);

            const productsRef = doc(db, "products", cart);
            for(const item of cart) {
                updateDoc(productsRef, {
                stock: item.products.stock - item.quantity
            });
        }
        clearCart();
    } catch(error) {
        console.log(error);
    } finally{
        setLoading(false);
    }
}
}

export default Checkout;