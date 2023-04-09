import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = ({
  id,
  name,
  img,
  category,
  description,
  prince,
  stock,
}) => {
  return (
    <div class="card" width={18}>
      <img
        src="/Assest/Purina-ProPlan.png"
        width={100}
        height={200}
        class="card-img-top"
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">Comida para perro</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <ItemCount />
      </div>
    </div>
  );
};

export default ItemDetail;
