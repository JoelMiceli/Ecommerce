import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: 450 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} class="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Precio: ${price}</p>
            <p className="card-text">Stock Disponible: {stock}</p>
            <p className="card-text">{description}</p>
          </div>
          <ItemCount />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
