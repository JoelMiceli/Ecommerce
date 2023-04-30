import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    
    <div className="ListGroup">
      {products.slice(0,6).map((prod) => (
      <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
