import React from "react";
import { addSignIn, changeTrue, changeFalse, addSignUp } from '../../actions/actions'
//import trello from '../../trello-logo.png';
import './landpages.css'
import { NavLink, Redirect } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header-inner">
        <div className="logo">
          <a href="index.html">
            <img className="logo-light logo" src="img/full/logo_white.png" alt="Apollo" />
            <img className="logo-dark" src="img/full/logo.png" alt="Apollo" />
          </a>
        </div>
        <div className="nav-mobile nav-bar-icon">
          <span></span>
        </div>
        <div className="nav-menu singlepage-nav">
          <ul className="nav-menu-inner">
            <li><a className="current" href="index.html#intro">Inicio</a></li>
            <li><a href="index.html#que">¿Qué puedo proteger?</a></li>
            <li><a href="index.html#como">¿Como funciona?</a></li>
            <li><a href="index.html#quien">¿Quién me protege?</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

const Intro = ({ active }) => {
  return (
    <section id="intro" className="intro black-bg">
      <img src="img/full/fondo1.png" className="forndoPrincipal" />
      <div className="mylogin container">
        <div className="row">
          <div className="col-lg-8 d-none d-lg-block"></div>
          <div className="col-lg-4 ">
            <div className="card text-dark light card-form">
              {
                active ?
                  <div className="card-body text-dark ">
                    <h3 className="text-center text"><strong>¡Registrate!</strong></h3>
                    <p className="text-p"></p>
                    <form role="form" autoComplete="off" onSubmit={e => {
                      e.preventDefault();
                      addSignUp(this.name.value, this.email.value, this.pass.value);
                    }}>
                      <div className="form-group input-group ">
                        <span className="input-group-addon ">
                          <i className="fa fa-user fa-fw" aria-hidden="true"></i>
                        </span>
                        <input name="text" type="text" placeholder="Ingrese Nombres Completos" ref={e => this.name = e} />
                      </div>
                      <div className="form-group input-group ">
                        <span className="input-group-addon ">
                          <i className="fa fa-envelope-o fa-fw" aria-hidden="true"></i>
                        </span>
                        <input name="email" type="email" placeholder="Ingrese Correo Electronico" ref={e => this.email = e} />
                      </div>
                      <div className="form-group input-group ">
                        <span className="input-group-addon ">
                          <i className="fa fa-key fa-fw" aria-hidden="true"></i>
                        </span>
                        <input name="password" type="password" placeholder="Ingrese Contraseña" ref={e => this.pass = e} />
                      </div>
                      <button type="submit" className="btn form-control secion">
                        <i className="fa fa-sign-up fa-lg"></i> Registrate
                      </button>
                    </form>
                    <div className="form-group formulario">
                      <table className="tabla">
                        <tbody>
                          <tr>
                            <td className="columna2">
                              <button className="btn btn-defaul" onClick={() => changeFalse()}>Ya tengo cuenta</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  :
                  <div className="card-body text-dark ">
                    <h3 className="text-center text"><strong>¡Comienza Ahora!</strong></h3>
                    <p className="text-p"></p>
                    <form role="form" autoComplete="off" onSubmit={e => {
                      e.preventDefault();
                      addSignIn(this.emailInput.value, this.passInput.value);
                    }}>
                      <label>Correo Electronico</label>
                      <div className="form-group input-group ">
                        <span className="input-group-addon ">
                          <i className="fa fa-envelope-o fa-fw" aria-hidden="true"></i>
                        </span>
                        <input name="email" type="email" placeholder="Ingrese Correo Electronico" ref={e => this.emailInput = e} />
                      </div>
                      <label>Contraseña</label>
                      <div className="form-group input-group ">
                        <span className="input-group-addon ">
                          <i className="fa fa-key fa-fw" aria-hidden="true"></i>
                        </span>
                        <input name="password" type="password" placeholder="Ingrese Contraseña" ref={e => this.passInput = e} />
                      </div>
                      <button type="submit" className="btn form-control secion">
                        <i className="fa fa-sign-in fa-lg"></i> Iniciar Sesión
                  </button>
                    </form>
                    <div className="form-group formulario">
                      <table className="tabla">
                        <tbody>
                          <tr>
                            <td className="columna2">
                              <button className="btn btn-defaul" onClick={() => changeTrue()}>Registrate</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const QueProtego = () => {
  return (
    <section id="que" className="section-padding">
      <div className="container">
        <h1 className="mb-80 text-center textito">¿Qué te gustaría proteger?</h1>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-sm-30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
            <div className="blog-post">
              <div className="post-media">
                <img src="img/full/ima1.png" alt="blog" />
              </div>
              <div className="post-header text-center">
                <h4 className="alt-title"><a href="" className="textito">Laptop</a></h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-sm-20 wow fadeIn justify-content-center" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="blog-post">
              <div className="post-media">
                <img src="img/full/ima3.png" alt="blog" />
              </div>
              <div className="post-header  text-center">
                <h4 className="alt-title"><a href="" className="textito">Celular</a></h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-sm-20 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
            <div className="blog-post">
              <div className="post-media">
                <img src="img/full/ima2.png" alt="blog" />
              </div>
              <div className="post-header  text-center">
                <h4 className="alt-title"><a href="" className="textito">Camara</a></h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-sm-10 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
            <div className="blog-post">
              <div className="post-media">
                <img src="img/full/ima4.png" alt="blog" />
              </div>
              <div className="post-header text-center">
                <h4 className="alt-title"><a className="textito">Instrumentos Musicales</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ComoProtego = () => {
  return (
    <section id="como" className="section-padding bg-image dark-bg pos-section">
      <div className="container">
        <h1 className="mb-80 text-center">¿Como funciona?</h1>
        <div className="row">
          <div className="col-md-5 mb-sm-30">
            <p className="lead-lg">Activa la <strong>protección</strong> en cualquier momento y cubre tus propiedades ante <strong>Robo, Perdida y Daño</strong></p>
            <div className="row">
              <div className="col-md-4 col-sm-6 mb-sm-30 "><img src="img/full/robo2.png" /></div>
            </div>
            <p className="lead-lg text-right texto-paga"><strong>Paga diario</strong>, y obtén coberturas <strong>anuales</strong> de hasta el <strong>70%</strong></p>
          </div>
          <div className="col-md-7 text-right wow fadeInUp">
            <img src="img/full/ima55.png" className="img-fade" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

const QuienMeProtege = () => {
  return (
    <section id="quien" className="section-padding bg-image pos-section">
      <div className="container">
        <h1 className="mb-80 text-center textito">¿Quién me protege?</h1>
        <div className="row">
          <div className="col-md-6 text-right wow fadeInUp">
            <img src="img/full/positiva.png" className="positiva" alt="" />
          </div>
          <div className="col-md-6 mb-sm-30">
            <p className="lead-lg textito">
              <strong>La Positiva Seguros</strong> , te <strong>protege</strong> protege con
            toda su experiencia y confianza <strong>ganada</strong> en el mercado.</p>
            <p className="lead-lg text-right parrafo textito">
              <strong>Puedes afiliarte</strong>,  a nosotros ingresando los documentos que <strong>certifiquen</strong>  la <strong>propiedad</strong>  o desde tiendas asociadas</p>
            <div className="row">
              <div className="col-md-4 col-sm-6 mb-sm-30 "><img src="img/full/logos.png" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-bg color-footer">
      <div className="container text-center">
        <p className="copyright">
          <a className="copy-link scroll-top color-a" href="#">&copy; Desarrollado por
            <b>Insurance</b>
          </a>
          <br /> Todos los derechos de las imagenes pertenecen a
          <a target="_blank" href="#">
            <b className="color-a"> pixabay.com</b>
          </a>
        </p>
      </div>
    </footer>)
}

const LandPages = ({ successLogin, active }) => {
  return (
    successLogin ?
      <Redirect to="/Home"></Redirect>
      :
      <div>
        <div id="page-wraper">
          <Header />
          <Intro active={active} />
          <Footer />
        </div>
      </div>
  );
};

export default LandPages;
