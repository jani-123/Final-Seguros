import React from "react";
//import { signOut, addCarrito, addArticulo } from '../../actions/actions'
//import trello from '../../trello-logo.png';
//import './landpages.css'
import { NavLink, Redirect } from "react-router-dom";

const Product = ({ item, index }) => {
  return (
    <div className='col-lg-10 col-md-10 col-xs-10 '>
      <ul><li>{item.modelo} - {item.precio}</li></ul>
      <button className='btn' onClick={() => addArticulo(item)} >+ Add to cart</button>
    </div>
  )

}

const Agregar = ({ successLogin, user, articulos, addArticulos, carrito }) => {
  console.log(successLogin);

  return (
    <div>
      Agregar
      {
        !successLogin && <Redirect to="/" />

      }
      <h1>Articulos Agregar</h1>
      <form onSubmit={e => {
        e.preventDefault();
        addCarrito(this.agrega.value);
      }}>
        <input type="text" placeholder="buscar" ref={e => this.agrega = e} />
        <button type="submit" >buscar</button>
      </form>
      <ul>
        {
          carrito.map((item, index) => {
            return (
              <Product key={index} item={item} index={index} />
            )
          })
        }
      </ul>
      <NavLink className="btn-link " to="/Users">
        atras
      </NavLink>
      <button className="btn-link " onClick={signOut}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Agregar;