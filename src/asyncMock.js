const products = [
  {
    id: 1,
    name: "Purina Pro Plan",
    price: "3000",
    category: "comida para perro",
    img: "/Assest/Purina.png",
    stock: "30",
    description: "Comida para perros Purina Pro Plan Duo Délice con pollo.Aporta el equilibrio correcto de nutrientes para favorecer un total bienestar y además ayuda a mantener la salud dental y digestiva de tu perro adulto de raza pequeña",
  },
  {
    id: 2,
    name: "comida para perro 2",
    price: 2000,
    category: "comida para perro",
    img: "/Assest/purina2.jpg",
    stock: 30,
    description: "descripcion de comida para perro 2",
  },
  {
    id: 3,
    name: "comida para gato 1",
    price: 1000,
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
