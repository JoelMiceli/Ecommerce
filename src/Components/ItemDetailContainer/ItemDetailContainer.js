import { useEffect, useState } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProductsById("1")
    
      .then((response) => {setProducts(response);})

      .cath((error) => {console.error(error);});
  }, []);

  return (
    <div className="ItemDetailcontainer">
      <ItemDetail {...products} />
    </div>
  );
};

export default ItemDetailContainer;
