import store from "../store/store";
import { auth, database, firebase } from "../firebase.js";

export function addSignUp(name, email, password) {
  auth.createUserWithEmailAndPassword(email, password).then(userObj => {
    let newuser = {
      name,
      email
    };
    database.ref("users/" + userObj.uid).set(newuser);

    database
      .ref("users/" + userObj.uid)
      .once("value")
      .then(res => {
        const fullUserInfo = res.val();
        console.log("full info ", fullUserInfo);
        store.setState({
          user: {
            id: userObj.uid,
            name: fullUserInfo.name,
            email: fullUserInfo.email
          }
        });
      });
  });
}

export function addSignIn(user, pass) {
  auth.signInWithEmailAndPassword(user, pass).then(userObj => {
    database
      .ref("users/" + userObj.uid)
      .once("value")
      .then(res => {
        const fullUserInfo = res.val();

        console.log("full info ", fullUserInfo);
        store.setState({
          user: {
            id: userObj.uid,
            name: fullUserInfo.name,
            email: fullUserInfo.email
          }
        });
        console.log("salee", userObj.uid);
       //readDataBoard();
      })
      .catch(console.log("error"));
   
  });
}

export function signOut() {
  auth.signOut();
  store.setState({
    successLogin: false,
    user: {
      id: "",
      email: ""
    }
  });
 // window.location.reload();
}

auth.onAuthStateChanged(user => {
  // se llama cada ves q se hace login on crea como un timer al aver un cambio se llama de maera autonatica
  if (user) {
    console.log("user", user);
    let usersRef = database.ref("/users");
    let userRef = usersRef.child(user.uid);
    store.setState({
      successLogin: true
    });
  }
});

export function activar () {

  store.setState ( {
     activado : true
  }) 
}

export function addcarrito () {
  
    store.setState ( {
       carrito : true
    }) 
  }
  
export const changeTrue = ()=>{
  store.setState({
    active: true
  })
}
export const changeFalse = () => {
  store.setState({
    active: false
  })
}
// export const addArticulo = (modelo, precio) => {
//   let newArticulos = store.getState().articulos;
//   let ids;
//   if (newArticulos != undefined) {
//     ids = newArticulos.length;
//   }
//   const objetArticulo = {
//     id: ids,
//     modelo: modelo,
//     precio: precio,
//     categoria: [],
//     estado: false
//   };
//   // store.setState({
//   //   active: false
//   // });
//   console.log(store.getState().user.id);
//   database
//     .ref("users/" + store.getState().user.id + "/articulos/" + objetArticulo.id)
//     .set(objetArticulo);
// }
export const addArticulo = (item) => {
  let newArticulos = store.getState().articulos;
  let ids=0;
  console.log("109",item);
  newArticulos.push(item);
  store.setState({
    articulos: newArticulos
  })

  // for(var i in item.length){
  //   newArticulos.push({
  //     id: item[i].length,
  //     modelo: item[i].modelo,
  //     precio: item[i].precio,
  //     categoria: item[i].categoria,
  //     imagen: item[i].imagem,
  //     estado: false
  //   })
  // }
  // item.map((value,index)=>{
  //     newArticulos.push({
  //       id: index,
  //       modelo: value.modelo,
  //       precio: value.precio,
  //       categoria: value.categoria,
  //       estado: false
  //     })
  // })
  // database
  //   .ref("users/" + store.getState().user.id + "/articulos/" + item.ids)
  //   .set(item);
}

export const addCarrito = (agrega) =>{
  let nuevoCarrito = store.getState().carrito;
  let articuloAnterior = store.getState().addArticulos;
  nuevoCarrito = articuloAnterior.filter(articuloAnterior => articuloAnterior.categoria == agrega);
  store.setState({
    carrito: nuevoCarrito
  })
  console.log("12",nuevoCarrito);
}

// function readDataBoard() {
//   database.ref("users/" + store.getState().user.id + "/articulos/").on("value", res => {
//     let arrBoard = [];
//     res.forEach(snap => {
//       const boardVal = snap.val();
//       console.log("hola",boardVal)
//       arrBoard.push({
//         id: boardVal.id,
//         modelo: boardVal.modelo,
//         precio: boardVal.precio,
//         estado: boardVal.estado
//       })

//     });
//     store.setState({
//       articulos: arrBoard
//     });
//   });
// }
