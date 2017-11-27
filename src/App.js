import React from "react";
import "./App.css";
import LandPages from "./components/Seccion/Seccion.js";
import Admin from "./components/Users/User.js";
import Agregar from "./components/AddArticulos/addArticulos";
// import SignUp from "./components/SignUp/SignUp.js";
// import Board from "./components/Board/Board.js";
// import Detail from "./components/DetailBoard/DetailBoard.js";
import { connect } from "redux-zero/react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { addArticulo } from "./actions/actions";

import Navb from './Navb';
import Add_articulo from './Add_articulo';
import Activar_seguro from './Activar_seguro';
import Home from './Home';
import Pago from './Pago';


const Segurolandia = ({ successLogin , toComponent,activado, carrito, user ,active,articulos,addArticulos}) => {
  return <HashRouter>
    <Switch>
      <Route exact path="/" render={() => <LandPages successLogin={successLogin} active={active}/>} />

      <Route exact path="/Home" render={ () => <Home successLogin={successLogin} toComponent = {toComponent} activado = {activado} carrito = {carrito}/>} />
      <Route exact path="/Add_articulo" render={ () => <Add_articulo carrito = {carrito} />} />
      <Route exact path="/Activar_seguro" component={Activar_seguro} />
      <Route exact path="/Pago" render={ () => <Pago activado={activado}/>} />


    </Switch>

  </HashRouter>;
};
const mapToProps = ({successLogin , toComponent,  activado, carrito, user , active,articulos, addArticulos}) => ({successLogin , toComponent, activado,carrito,   user,active,articulos ,addArticulos,carrito});
export default connect(mapToProps)(Segurolandia);