import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = ({
  id,name,img,category,description,price, stock,}) => {

  return (
    <div class="card border-dark mb-3" style={{maxWidth: 450}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="/Assest/Purina.png" class="img-fluid rounded-start" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"> {category}Purina Pro-Plan</h5>
        <p class="card-text"> {description} Comida para perros Purina Pro Plan Duo Délice con pollo.Aporta el equilibrio correcto de nutrientes para favorecer un total bienestar y además ayuda a mantener la salud dental y digestiva de tu perro adulto de raza pequeña.</p>
        <p class="card-text">
          Stock: {stock}
        </p>
        <p class="card-text">
          Precio: {price}
          </p>
      </div>
      <ItemCount/>
    </div>
  </div>
</div>
  );
}

export default ItemDetail;
