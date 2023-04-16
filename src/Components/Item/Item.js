import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, description, stock }) => {

  return (
<div class="card mb-3" style={{maxWidth: 450}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img} class="img-fluid rounded-start" alt={name}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">Precio: ${price}</p>
        <p class="card-text">Stock Disponible: {stock}</p>
        <p class="card-text">{description}</p>
        <Link to={`/item/${id}`} className="Option"> Ver detalle </Link>
        
      </div>
    </div>
  </div>
</div>
  );
};

export default Item;
