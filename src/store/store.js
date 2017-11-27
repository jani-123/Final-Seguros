import createStore from "redux-zero";

// const Articulos = [{
//   id: 1,
//   categoria: "celular",
//   modelo: "Samsung Galaxy S7 Edge",
//   precio: 2000,
//   imagen: "../../imgArticulos/1.png"
// }]
const Articulos = [
  {
  // id: 1,
  categoria: "celular",
  modelo: "Samsung Galaxy S7 Edge",
  precio: 2000,
  imagen: "./imgArticulos/1.png"
},
{
  // id: 5,
  categoria: "laptop",
  modelo: "Asus Republic of Gamers i7",
  precio: 6500,
  imagen: "./imgArticulos/5.png"
},

{
  // id: 8,
  categoria: "camara",
  modelo: "nikon d3500",
  precio: 3100,
  imagen: "./imgArticulos/8.png"
},

{
  // id: 11,
  categoria: "instrumento",
  modelo: "Stratocaster american standard",
  precio: 6200,
  imagen: "./imgArticulos/11.png"
},

]

const initialState = {
  successLogin: false,
  toComponent : '/',
  activado : false,
  carrito : false,
   selectIdBoard: 0,
  user: {
    id: null,
    name:null,
    email: null
  },
  articulos: [],
  addArticulos: Articulos,
  active: false,

};

const store = createStore(initialState);
export default store;