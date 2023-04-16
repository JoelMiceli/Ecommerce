const products = [
  {
    id: 1,
    name: "Purina Pro Plan Adult",
    price: 3000,
    category: "comida para perro",
    img: "/Assest/Purina.png",
    stock: 30,
    description: "Comida para perros Purina Pro Plan Duo Délice con pollo.",
  },
  {
    id: 2,
    name: "Purina Pro Plan Small & Mini",
    price: 2500,
    category: "comida para perro",
    img: "/Assest/purina2.jpg",
    stock: 30,
    description:
      "PRO PLAN®  Razas Pequeñas, una fórmula  concentrada con proteínas (29%) y grasas (17%).",
  },
  {
    id: 3,
    name: "Excellent Adulto",
    price: 2000,
    category: "comida para gato",
    img: "/Assest/Excellent.jpg",
    stock: 30,
    description:
      "PURINA® Excellent® ADULT CAT, fórmula con proteínas y ácidos grasos omega 3 y 6.",
  },
  {
    id: 4,
    name: "Excellent Kitten",
    price: 1800,
    category: "comida para gato",
    img: "/Assest/Kitten.jpg",
    stock: 20,
    description:
      "PURINA® Excellent® Gatitos Pollo y Arroz, fórmula  a base de proteínas con calcio y fósforo y con ácidos grasos omega 3 y 6.",
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
      resolve(products.filter((prod) => prod.category === parseInt(productId)));
      console.log(productId);
    }, 500);
  });
};
