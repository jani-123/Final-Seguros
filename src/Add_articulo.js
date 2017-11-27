import React, { Component } from 'react';
import './Add_articulo.css';
import laptop from './images/laptop.png';
import celular from './images/celular.png';
import camera from './images/camera.png';
import instrumentos from './images/instrumentos.png';
import cancel from './images/cancel.png';
import perdida from './images/perdida.png';
import lap from './images/lap.png';
import cel from './images/cel.png';
import camara from './images/camara.png';
import { BrowserRouter, Route,Switch,Redirect, NavLink} from 'react-router-dom'
import logo from './images/segurolandia.png';
import { signOut , addcarrito} from './actions/actions'
import logis from './images/logis.jpg';

const Add_articulo = ({carrito}) => {
  return (

    <div className="container">
        {
                carrito && <Redirect to="/Home" />
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

      <div className="row">
        <div className=" col-md-2 ">
          ------------------
                  </div>
        <h3 className=" space ">Agregar Articulo</h3>
        <div className=" articulos col-md-10 ">
          <div className="row  buscar ">
            <img className=" cancel" src={cancel} />
            <div className=' buscar'>
              <p className='subtitle'>Articulo:</p>
              <div className=" input-group">
                <span className="input-group-addon"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></span>
                <input type="text" placeholder=" Celular" className=" form-control" aria-label="Amount (to the nearest dollar)" />
              </div>
              <button type="button" className="onlybtn2 btn btn-info">Buscar</button>
              </div>
            </div>
            <div className="row   ">
              <div className=" camarafont col-md-2 " >
                <p>Laptop I7 asus</p>
                <center><img text-center className="lapt" src={lap} /></center>
                <i class=" posit fa fa-plus-circle" aria-hidden="true"></i>
                <p className='parraf'>s/.1500</p>
              </div>
              <div className=" camarafont col-md-2 ">
                <p>Celular Galaxi X7</p>
                <center><img text-center className="lapt1" src={cel} /></center>
                <i class=" posit fa fa-plus-circle" aria-hidden="true" onClick = { () => {
                   //alert('asd')
                   addcarrito()
              }}></i>
                <p className='parraf'>s/.1500</p>
              </div>
              <div className=" camarafont col-md-2 ">
                <p>Camara Nikon d2500</p>
                <center><img text-center className="lapt1" src={camara} /></center>
                <i class=" posit fa fa-plus-circle" aria-hidden="true"></i>
                <p className='parraf'>s/.1500</p>
              </div>
              

            </div>
          
        </div>
      </div>
    </div>
  );
}


export default Add_articulo;