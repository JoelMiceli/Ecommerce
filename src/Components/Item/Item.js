import { Link } from "react-router-dom";

const Item = ({ id, name, img, description, price, stock }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: 450 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Precio: ${price}</p>
            <p className="card-text">Stock Disponible: {stock}</p>
            <p className="card-text">{description}</p>
            <Link to={`/item/${id}`} className="Option">
              Ver detalle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
