const Item = ({ id, name, img, price, stock }) => {
  return (
    <div class="card" width={18}>
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="Option" class="btn btn-primary">
          Ver detalle
        </button>
      </div>
    </div>
  );
};

export default Item;
