import { useEffect, useState } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getProductsById(itemId)
      .then((response) => {
        setProducts(response);
      })

      .cath((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailcontainer">
      <ItemDetail {...products} />
    </div>
  );
};

export default ItemDetailContainer;
