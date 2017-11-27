import React from "react";
import { signOut, addArticulo } from '../../actions/actions'
import { NavLink, Redirect } from "react-router-dom";

const Ver = ({ articulos }) => {
  console.log(articulos);
  const arr = articulos.map((item, index) => {
    return (
      <li key={index}>{item.modelo} - {item.precio} <button className="btn btn-defaul">Activo</button></li>
    )
  })
  return (
    <div>
      <ul>
        {arr}
      </ul>
    </div>
  )
}
const MyBoard = ({ articulos, active }) => {

  let newArticulo = "";
  return (
    <div>
      <div className="container-fluid">
        <div>
          <div className="col-md-3">
            <form onSubmit={e => {
              e.preventDefault();
              addArticulo(this.modelo.value, this.precio.value);
            }}>
              <input type="text" placeholder="modelo" ref={e => this.modelo = e} />
              <input type="number" placeholder="precio" ref={e => this.precio = e} />
              <button type="submit" className="btn btn-defaul" >Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
const Admin = ({ successLogin, user, articulos }) => {
  console.log(successLogin);
  return (
    <div>
      Buenvenido
      {
        !successLogin && <Redirect to="/" />

      }
      <h1>Articulos Agregar</h1>
      <Ver articulos={articulos} />
      <MyBoard />
      <NavLink to="/agregar" className="btn-lg ">
        Agregar
        </NavLink>
      <button className="btn-link " onClick={signOut}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Admin;