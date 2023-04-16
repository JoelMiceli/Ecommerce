import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = ({
  id,name,img,category,description,price, stock,}) => {

    return (
      <div class="card mb-3" style={{maxWidth: 450}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={img} class="img-fluid rounded-start" alt={name}/>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">Precio: ${price}</p>
            <p class="card-text">Stock Disponible: {stock}</p>
            <p class="card-text">{description}</p>
          </div>
          <ItemCount/>
        </div>
      </div>
    </div>
    );
}

export default ItemDetail;
