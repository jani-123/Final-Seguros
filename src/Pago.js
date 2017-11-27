import React, { Component } from 'react';
import './Pago.css';
import cancel from './images/cancel.png';
import { BrowserRouter, Route,Switch,Redirect, NavLink} from 'react-router-dom'
import logo from './images/segurolandia.png';
import { signOut, activar } from './actions/actions'
import logis from './images/logis.jpg';

const Pago = ( {activado}) => {
  return (
    <div className=" container">
                {
                activado && <Redirect to="/Home" />
            }


            <div className="contenido">
        <nav className='y-web-nav'>
            <img
            className="img responsive"
            src={logo} />
            <div className='cont' >
            <img
                className="img user"
                src={logis} />
            <p className='email' >janeth@laboratoria.la</p>
            </div ><hr />
            <div className='cont1'>Menu de navegación</div><hr />
            <div className='y-menu'>
            <div className='y-menu'>
                <div className='botoneshov'><NavLink to="/Home"><a> Mis Articulos</a></NavLink></div>
                <div><NavLink to="/Add_articulo"><a>Agregar Articulos</a></NavLink></div>
                <div><NavLink to="/Activar_seguro"><a>Activar Articulos</a></NavLink></div>
                <div><NavLink to="/Pago"><a>Pagos</a></NavLink></div>
            </div>
            </div>

        </nav>
        </div>

      <h3 className=" space ">Pago</h3>

      <div className="row articulos imptgrop">
        <img className=" cancel" src={cancel} />
        <div className="col-md-4 ">
          <p>Tarjeta de credito</p>
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">
            <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
            </span>
            <input type="text" className="form-control" placeholder="tarjeta de credito" aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="col-md-3 ">
        <p>Cvv</p>
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">
            <i class="fa fa-usd" aria-hidden="true"></i>

            </span>
            <input type="text" className="form-control" placeholder="cvv" aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="col-md-3 ">
        <p>Vencimiento</p>
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">
            <i class="fa fa-tag" aria-hidden="true"></i>

            </span>
            <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="col-md-2 ">
        <i class="fa fa-check-circle green" aria-hidden="true"></i>
        </div>
      </div>


      <div className="row articulos imptgrop">
        <div className="col-md-5 ">
        <h4 className="  ">Efectivo</h4>

          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
            <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="col-md-5 ">
            <h5>Resiviras los servicios</h5>
        </div>
        <div className="col-md-2 ">
        <i class="fa fa-check-circle gray" aria-hidden="true"></i>
        </div>
      </div>


      <div className="row articulos imptgrop">
        <div className="col-md-5 ">
        <h4 className="  ">Efectivo</h4>
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">
            <i class="fa fa-mobile" aria-hidden="true"></i>

            </span>
            <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="col-md-5 ">
        <h5>Resiviras los servicios</h5>
        </div>
        <div className="col-md-2 ">
        <i class="fa fa-check-circle gray" aria-hidden="true"></i>
        </div>
      </div>

      <div className="row articulos imptgrop">
        <div className="col-md-10 ">
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">
            <i class="fa fa-paypal" aria-hidden="true"></i>

            </span>
            <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="col-md-2 ">
        <i class="fa fa-check-circle gray" aria-hidden="true"></i>
        </div>

        <div className="row articulos imptgrop">
        <div className="col-md-7 ">
        </div>
        <div className="col-md-5 btnp ">
        <button type="button btnp" className=" btn btn-success" onClick = { () => {
            activar();
        }}>
          <i class="fa fa-toggle-on reg" aria-hidden="true"></i>
          Activar</button>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Pago;

