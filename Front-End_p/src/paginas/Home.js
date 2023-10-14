import React, { useState } from 'react';
import './style.css';
import versa from './img/c1.webp';
import cadilac from './img/l2.jpg';
import logo from './img/logo.svg';
import Footer from './footer.jsx';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FormularioDatos from './FormularioDatos';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function App() {
  const [precio, setPrecio] = useState(0);
  const [mostrarPrecio, setMostrarPrecio] = useState(false);
  const [formData, setFormData] = useState({});
  const [showFormularioDatos, setShowFormularioDatos] = useState(false);
  const [showComprobante, setShowComprobante] = useState(false);

  function calcularPrecio(personas, destino) {
    let precioBase = 0;

    if (destino === 'Zona Hotelera') {
      precioBase = 10;
    } else if (destino === 'Centro de Cancún') {
      precioBase = 15;
    } else if (destino === 'Playa del Carmen') {
      precioBase = 20;
    } else if (destino === 'Tulum') {
      precioBase = 25;
    }

    const precioTotal = precioBase * personas;
    return precioTotal;
  }

  function validarFormulario(event) {
    event.preventDefault();

    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var personas = document.getElementById('personas').value;
    var destino = document.getElementById('destino').value;

    if (fecha === '' || hora === '' || personas === '' || destino === '') {
      alert('Por favor, completa todos los campos.');
      return false;
    }

    const parsedPersonas = parseInt(personas);
    if (isNaN(parsedPersonas) || parsedPersonas <= 0) {
      alert('El número de personas debe ser un valor numérico positivo.');
      return false;
    }

    const precioTotal = calcularPrecio(parsedPersonas, destino);
    setPrecio(precioTotal);
    setMostrarPrecio(true);
    setFormData({ fecha, hora, personas, destino });
    setShowFormularioDatos(true);
  }

  const handleMostrarComprobante = () => {
    setShowComprobante(true);
  };

  const handleContinuarReserva = (datosFormularioDatos) => {
    const datosReservaCompleta = { ...formData, ...datosFormularioDatos };
    console.log('Datos de reserva completa:', datosReservaCompleta);

    setShowFormularioDatos(false);
    setMostrarPrecio(false);
    setShowComprobante(true);
  };

  const handlePagar = () => {
  
  };

  const amount = precio.toString(); // El monto a cobrar será el valor del estado precio
    const currency = 'USD'; // Cambiar la moneda a pesos mexicanos (MXN)
  
  const style = { layout: 'vertical' };

  return (
    <div>
      <header className="header-1">
        <div className="contact-container">
          <div className="iconos">
            <div style={{ display: 'flex', gap: '20px' }}>
              <FaInstagram size={20} />
              <FaFacebook size={20} />
              <FaTwitter size={20} />
            </div>
          </div>
          <div className="contacto">
            <a href="tel">998-875-1305</a>
            <a href="correo">systemreservation@gmail.com</a>
          </div>
        </div>
        <div className="lol">
          <Link to="/Login">Iniciar sesión</Link>
          <Link to="/Login">Registrarse</Link>
        </div>
      </header>

      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1 className="reservation-animation">
            System <br /> Reservation
          </h1>
        </div>
        <div className="Botones">
          <Link to="/Nosotros">NOSOTROS</Link>
          <Link to="/Opiniones">OPINIONES</Link>
        </div>

        <h3>RESERVA TU TRANSPORTE:</h3>
        <form onSubmit={validarFormulario}>
          <div className="table">
            <div className="row">
              <label htmlFor="fecha">Fecha:</label>
              <input type="date" id="fecha" required />
            </div>
            <div className="row">
              <label htmlFor="hora">Hora:</label>
              <input type="time" id="hora" required />
            </div>
            <div className="row">
              <label htmlFor="personas">Número de personas:</label>
              <input type="number" id="personas" required />
            </div>
            <div className="row">
              <label htmlFor="destino">Destino:</label>
              <select id="destino" required>
                <option value="">Selecciona una opción</option>
                <option value="Zona Hotelera">Zona Hotelera</option>
                <option value="Centro de Cancún">Centro de Cancún</option>
                <option value="Playa del Carmen">Playa del Carmen</option>
                <option value="Tulum">Tulum</option>
              </select>
            </div>
            <div className="row">
              <input
                type="submit"
                value={mostrarPrecio ? 'Continuar reserva' : 'Reservar'}
              />
            </div>
          </div>
        </form>

        {showFormularioDatos && (
          <div className="formulario-datos-container">
            <FormularioDatos onSubmit={handleContinuarReserva} />
          </div>
        )}

        {mostrarPrecio && (
          <div className="costo">
            <h4>Precio: {precio}</h4>
          </div>
        )}

        {showComprobante && (
          <div className="comprobante-container">
            <div className="comprobante">
              <h2>Comprobante de reserva:</h2>
              <p>Fecha: {formData.fecha}</p>
              <p>Hora: {formData.hora}</p>
              <p>Número de personas: {formData.personas}</p>
              {precio !== 0 && <p>Precio: {precio}</p>}
              <PayPalScriptProvider
              options={{
                'client-id': 'EKgjivvSHK019tViCSyY2YX-NKz0wxsC-vANHIU9jaHqLNkVdcyOA_6to2VX0mLqRdUwpKNv_6fyrSo_',
              }}
            >
              <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                  return actions.order
                    .create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: currency,
                            value: amount,
                          },
                        },
                      ],
                    })
                    .then((orderId) => {
                      // Your code here after create the order
                      return orderId;
                    });
                }}
                onApprove={function (data, actions) {
                  return actions.order.capture().then(function () {
                    alert('Transacción completada por ' + data.payer.name.given_name);
                    // Your code here after capture the order
                  });
                }}
              />
            </PayPalScriptProvider>
            </div>
          </div>
        )}

{/* <PayPalScriptProvider
              options={{
                'client-id': 'AR6rQwFo6KJzoXVe07u-OJMoyVyVzIVNT7-y6iLd2DJNfe7wZAuqcbKhOtl5v4CD2eXCwbSnc-8w477z',
              }}
            >
              <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                  return actions.order
                    .create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: currency,
                            value: amount,
                          },
                        },
                      ],
                    })
                    .then((orderId) => {
                      // Your code here after create the order
                      return orderId;
                    });
                }}
                onApprove={function (data, actions) {
                  return actions.order.capture().then(function () {
                    alert('Transacción completada por ' + data.payer.name.given_name);
                    // Your code here after capture the order
                  });
                }}
              />
            </PayPalScriptProvider> */}
      </header>

      <div>
        <div className="servicios">
          <div className="card">
            <div className="face front">
              <img src={versa} alt="Versa" />
              <h3>SERVICIO CONVENCIONAL</h3>
            </div>
            <div className="face back">
              <h3>SERVICIO CONVENCIONAL</h3>
              <p>
                Experimenta accesibilidad y comodidad con nuestro servicio de transporte convencional. Disfruta de un
                transporte confiable y económico con nuestro servicio.
              </p>
              <div className="link">
                <Link to="/Servicio">Detalles</Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="face front">
              <img src={cadilac} alt="Cadilac" />
              <h3>SERVICIO DE LUJO</h3>
            </div>
            <div className="face back">
              <h3>SERVICIO DE LUJO</h3>
              <p>
                Experimenta el lujo y el confort con nuestro servicio de lujo en tu visita a Cancun. Disfruta de un
                transporte exclusivo y de primera clase durante tu estancia en la ciudad.
              </p>
              <div className="link">
                <Link to="/Lujo">Detalles</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
