import { useState, useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ id, title, image, category, description, price, stock }) => {
const [quantityAdded, setQuantityAdded] = useState(0);
const {addItem} = useContext(CartContext);

const handleOnAdd = (quantity) => {
  setQuantityAdded(quantity);

const item = { id, title, price, quantity };

addItem(item, quantity)

}

  return (
    <div className="card mb-3" style={{ maxWidth: 450 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} class="img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Precio: ${price}</p>
            <p className="card-text">Stock Disponible: {stock}</p>
            <p className="card-text">{description}</p>
          </div>
          {
            quantityAdded > 0? (
              <Link to='/cart' className="option">Terminar Compra</Link>
            ) : (<ItemCount initial ={1} stock={stock} onAdd={handleOnAdd} />)
        }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
