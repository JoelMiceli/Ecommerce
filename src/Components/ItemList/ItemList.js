import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="prodDestacados">
      <h1><span class="badge text-bg-success">⭐ Productos Destacados⭐</span></h1>
    <div className="ListGroup">
      {products.slice(0,6).map((prod) => (
      <Item key={prod.id} {...prod} />
      ))}
    </div>
    </div>
  );
};

export default ItemList;
