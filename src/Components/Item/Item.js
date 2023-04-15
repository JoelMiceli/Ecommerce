
const Item = ({ id, name, img, price, description, stock }) => {

  return (
    <div class="card border-dark mb-3" style={{maxWidth: 450}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img} class="img-fluid rounded-start" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text"> {description}</p>
        <p class="card-text">Stock: {stock}</p>
        <p class="card-text">Precio: {price}</p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Item;
