import React, { Component } from 'react';
import Home from './Home';
import Add_articulo from './Add_articulo';
import Pago from './Pago';
import Activar_seguro from './Activar_seguro';
import logis from './images/logis.jpg';
import './Navb.css';
import { BrowserRouter, Route,Switch,Redirect, NavLink} from 'react-router-dom'
import logo from './images/segurolandia.png';
import { signOut } from './actions/actions'

class Navb extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/home" render={() => <Home />} />
            <Route path="/Add_articulo" render={() => <Add_articulo />} />
            <Route path="/Activar_seguro" render={() => <Activar_seguro />} />
            <Route path="/Pago" render={() => <Pago />} />
          </Switch>
      </BrowserRouter>
    )
  }
}
export default Navb;