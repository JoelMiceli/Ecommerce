const products = [
  {
    id: 1,
    name: "comida para perro 1",
    category: "comida para perro",
    img: "ruta a traer",
    stock: 30,
    description: "descripcion de comida para perro 1",
  },
  {
    id: 2,
    name: "comida para perro 2",
    category: "comida para perro",
    img: "ruta a traer",
    stock: 30,
    description: "descripcion de comida para perro 2",
  },
  {
    id: 3,
    name: "comida para gato 1",
    category: "comida para gato",
    img: "ruta a traer",
    stock: 30,
    description: "descripcion de comida para gato 1",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
