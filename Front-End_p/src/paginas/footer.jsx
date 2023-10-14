import React from "react";
import imgfacebook from './img/facebook.png'
import instagram from './img/instagram.png'
import contacto from './img/contact.png'
import telefono from './img/smartphone.png'
import twitter from './img/twitter.png'
import house from './img/house.png'
import {Link} from 'react-router-dom'

class Footer extends React.Component{
  render(){
    return(
      <footer>
        <footer>
          <div className="container-footer-all">
            <div className="container-body">
              <div className="colum1">
                <h1>Mas informacion de la compañia</h1>
                <p>System Reservation es un innovador sistema de reservas en Cancún, creado por tres jóvenes universitarios comprometidos con brindar un servicio
                  confiable y socialmente responsable. Nuestro objetivo es facilitar y agilizar el proceso de reserva de transporte, ofreciendo opciones seguras
                  y de calidad para los viajeros en la hermosa ciudad de Cancún. Confía en nosotros para asegurar una experiencia de reserva fluida y confiable en tu próximo viaje.</p>
              </div>
              <div className="colum2">
                <h1>Redes Sociales</h1>
                <div className="row">
                  <img src={imgfacebook} alt="Facebook" />
                  <label>Siguenos en Facebook</label>
                </div>
                <div className="row">
                  <img src={twitter} alt="Twitter" />
                  <label>Siguenos en Twitter</label>
                </div>
                <div className="row">
                  <img src={instagram} alt="Instagram" />
                  <label>Siguenos en Instagram</label>
                </div>
              </div>
              <div className="colum3">
                <h1>Informacion de Contacto</h1>
                <div className="row2">
                  <img src={house} alt="Dirección" />
                  <label>
                    ATENCION A CLIENTES 
                  </label>
                </div>
                <div className="row2">
                  <img src={telefono} alt="Teléfono" />
                  <label>998-875-1305</label>
                </div>
                <div className="row2">
                  <img src={contacto} alt="Correo" />
                  <label>systemreservation@gmail.com</label>
                </div>
              </div>
            </div>
          </div>
          <div className="container-footer">
            <div className="footer">
              <div className="copyright">
                © 2023 Todos los Derechos Reservados | System Reservation
              </div>
              <div className="information">
                <Link to="/Pago">Metodo de pago </Link> | <Link to="/Dash">Dashboard</Link> | <Link to="/Terminos">Terminos y Condiciones</Link>
              </div>
            </div>
          </div>
        </footer>
      </footer>


    )
  }
}
export default Footer; 