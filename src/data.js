const data = [
  {
    id: 0,
    name: "juan",
    correo: "juan@perez.net",
    foto: "https://www.socialtools.me/blog/wp-content/uploads/2016/04/foto-de-perfil.jpg",
    articulos: [{
      id: 0,
      modelo: "samsung galaxi",
      precio: 20.00,
      imagen: "http://images.samsung.com/is/image/samsung/p5/pe/smartphones/pe_SM-J105MZKATPA_001_Front_black.png?$ORIGIN_PNG$",
      categoria: {
        idCategoria: 0,
        nombre: "celular",
      },
      plan: {
        idPlan: 0,
        fechaInicio: "10-12-2017",
        fechaFinal: "10-12-2018",
        tipoPlan: 1, // 0-perdida 1-robo-perdida 2-robo-perdida-deteriodo
        precioPlan: 5.00, // precio en soles x dia
        transaccion: {
          id: 0,
          tipoPago: {
            codigoTransaccion: 0928382,
          }
        },
        estado: false // estados activos,reclamo,observado
      }
    },
    {
      id: 1,
      modelo: "samsung galaxi",
      precio: 20.00,
      imagen: "image",
      categoria: {
        idCategoria: 0,
        nombre: "celular",
      },
      plan: {
        idPlan: 0,
        fechaInicio: "10-12-2017",
        fechaFinal: "10-12-2018",
        tipoPlan: 0, // 0-perdida 1-robo-perdida 2-robo-perdida-deteriodo
        precioPlan: 5.00, // precio en soles x dia
        transaccion: {
          id: 0,
          tipoPago: {
            codigoTransaccion: 0928382,
          }
        },
        estado: false // estados activos,reclamo,observado
      }
    }
    ]
  }
]

const Articulos = [{
  id: 1,
  categoria: "celular",
  modelo: "Samsung Galaxy S7 Edge",
  precio: 2000,
  imagen: "imgArticulos/1.png"
},
{
  id: 2,
  categoria: "celular",
  modelo: "Samsung Galaxy S8",
  precio: 1800,
  imagen: "imagen"
},
  {
    id: 3,
    categoria: "celular",
    modelo: "Apple Iphone X",
    precio: 3000,
    imagen: "imagen"
  },
  {
    id: 4,
    categoria: "celular",
    modelo: "Apple Iphone 7",
    precio: 2200,
    imagen: "imagen"
  },
  {
    id: 5,
    categoria: "laptop",
    modelo: "Asus Republic of Gamers i7",
    precio: 6500,
    imagen: "imagen"
  },
  {
    id: 6,
    categoria: "laptop",
    modelo: "Hp pavilion dv5 i5",
    precio: 2200,
    imagen: "imagen"
  },
  {
    id: 7,
    categoria: "laptop",
    modelo: "Dell inspiron 14 300",
    precio: 1400,
    imagen: "imagen"
  },
  {
    id: 8,
    categoria: "camara",
    modelo: "nikon d3500",
    precio: 3100,
    imagen: "imagen"
  },
  {
    id: 9,
    categoria: "camara",
    modelo: "Canon t5i",
    precio: 2500,
    imagen: "imagen"
  },
  {
    id: 10,
    categoria: "camara",
    modelo: "sony dsc h300",
    precio: 2300,
    imagen: "imagen"
  },
  {
    id: 11,
    categoria: "instrumento",
    modelo: "Stratocaster american standard",
    precio: 6200,
    imagen: "imagen"
  },
  {
    id: 12,
    categoria: "instrumento",
    modelo: "Yamaha Gigmaker",
    precio: 4500,
    imagen: "imagen"
  }
]