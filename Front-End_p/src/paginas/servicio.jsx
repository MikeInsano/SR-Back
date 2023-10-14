import React, { useState, useEffect } from 'react';
import './servicios.css';
import l3 from './img/l3.jpg';
import Header from "./header";
import Footer from "./footer";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Servicio = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    ubicacion: "",
    destino: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currency, setCurrency] = useState('USD'); // Estado para la moneda

  // Estructura de datos para almacenar el precio de cada producto
  const productPrices = {
    'product-1': 100,
    'product-2': 150,
    'product-3': 200,
    // podemos agregar más precios
  };

  useEffect(() => {
    // Cargar el script de PayPal SDK de forma asíncrona
    const paypalScript = document.createElement('script');
    paypalScript.src = `https://www.paypal.com/sdk/js?client-id=AUWZKfmQUL7PwqUts3FOT3SDjiqrFOBqL0t_9yw5OzhByQnv54vSlOjgrq4ddLNAUmAKLDRSjw-XoeXw`;
    paypalScript.async = true;
    paypalScript.onload = initializePaypalButtons;
    document.body.appendChild(paypalScript);
  }, []);

  const initializePaypalButtons = () => {
    // Renderizar el botón de PayPal si showForm es verdadero y el formulario no ha sido enviado
    if (showForm && !formSubmitted) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          // Crear una orden de compra con los detalles del pago
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total / 100, // Convertir el total a la moneda correcta (por ejemplo, dólares)
                  currency_code: currency // Usar la moneda seleccionada
                }
              }
            ]
          });
        },
        onApprove: (data, actions) => {
          // Capturar el pago y realizar acciones adicionales
          return actions.order.capture().then((details) => {
            // Aquí puedes realizar las acciones necesarias después de que se haya realizado el pago
            console.log("Pago realizado con éxito:", details);
            setFormSubmitted(true); // Marcar el formulario como enviado después de realizar el pago
          });
        },
        onError: (err) => {
          // Manejar errores en caso de que ocurra algún problema con el pago
          console.error("Error en el pago:", err);
        }
      }).render('#paypal-button-container'); // Renderizar el botón de PayPal en el elemento con el ID 'paypal-button-container'
    }
  };

  const add = (product) => {
    const price = productPrices[product];
    setProducts([...products, product]);
    setTotal(total + price);
    setShowForm(true); // Mostrar el formulario al hacer clic en "Reservar"
    setFormSubmitted(false); // Reiniciar el estado del formulario enviado
    setFormData({
      nombre: "",
      telefono: "",
      ubicacion: "",
      destino: ""
    }); // Reiniciar los campos del formulario
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes acceder a los datos del formulario usando el estado formData
    console.log("Datos del formulario:", formData);

    // Realizar las acciones necesarias con los datos del formulario

    setFormSubmitted(true); // Marcar el formulario como enviado
  };

  return (
    <div>
      <Header />
      <div className="page-content">
        {/* Product Cards */}
        <div className="product-container">
          <h3>Carrito run run</h3>
          <img src={l3} alt="Product 1" />
          <h1 className='precio'>${productPrices['product-1']}</h1>
          <button className="button-add" onClick={() => add('product-1')}>Reservar</button>
        </div>

        <div className="product-container">
          <h3>Carrito run run</h3>
          <img src={l3} alt="Product 1" />
          <h1 className='precio'>${productPrices['product-2']}</h1>
          <button className="button-add" onClick={() => add('product-2')}>Reservar</button>
        </div>

        <div className="product-container">
          <h3>Carrito run run</h3>
          <img src={l3} alt="Product 1" />
          <h1 className='precio'>${productPrices['product-3']}</h1>
          <button className="button-add" onClick={() => add('product-3')}>Reservar</button>
        </div>

        <div className="product-container">
          <h3>Carrito run run</h3>
          <img src={l3} alt="Product 1" />
          <h1 className='precio'>${productPrices['product-3']}</h1>
          <button className="button-add" onClick={() => add('product-1')}>Reservar</button>
        </div>

        <div className="product-container">
          <h3>Carrito run run</h3>
          <img src={l3} alt="Product 1" />
          <h1 className='precio'>${productPrices['product-3']}</h1>
          <button className="button-add" onClick={() => add('product-2')}>Reservar</button>
        </div>

        {/* ... Add other product cards here ... */}

        {showForm && !formSubmitted && (
          <div className="overlay">
            <form className="product-form" onSubmit={handleSubmit}>
              <h3>Reserva</h3>
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              />
            
            <label htmlFor="telefono">Teléfono:</label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                required
                                value={formData.telefono}
                                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                            />

                            <label htmlFor="ubicacion">Ubicación:</label>
                            <input
                                type="text"
                                id="ubicacion"
                                name="ubicacion"
                                required
                                value={formData.ubicacion}
                                onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })}
                            />

                            <label htmlFor="destino">Destino:</label>
                            <input
                                type="text"
                                id="destino"
                                name="destino"
                                required
                                value={formData.destino}
                                onChange={(e) => setFormData({ ...formData, destino: e.target.value })}
                            />

              {/* ... Add other form fields (telefono, ubicacion, destino) here ... */}

              <button type="submit">Enviar</button>
            </form>
          </div>
        )}

        {formSubmitted && (
          <div className="overlay">
            <div className="payment-message">
              <h3>¡Formulario enviado!</h3>
              <p>Ahora puedes proceder al pago:</p>
              <PayPalScriptProvider
                options={{
                  'client-id': 'EKgjivvSHK019tViCSyY2YX-NKz0wxsC-vANHIU9jaHqLNkVdcyOA_6to2VX0mLqRdUwpKNv_6fyrSo_',
                }}
              >
                <PayPalButtons
                  style={{ layout: 'vertical' }}
                  disabled={false}
                  forceReRender={[total, currency]}
                  createOrder={(data, actions) => {
                    // Crear una orden de compra con los detalles del pago
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: total / 1, // Convertir el total a la moneda correcta (por ejemplo, dólares)
                            currency_code: currency // Usar la moneda seleccionada
                          }
                        }
                      ]
                    });
                  }}
                  onApprove={function (data, actions) {
                    // Capturar el pago y realizar acciones adicionales
                    return actions.order.capture().then(function (details) {
                      // Aquí puedes realizar las acciones necesarias después de que se haya realizado el pago
                      console.log("Pago realizado con éxito:", details);
                      setFormSubmitted(true); // Marcar el formulario como enviado después de realizar el pago
                    });
                  }}
                  onError={function (err) {
                    // Manejar errores en caso de que ocurra algún problema con el pago
                    console.error("Error en el pago:", err);
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        )}

        <PayPalScriptProvider
          options={{
            'client-id': 'EKgjivvSHK019tViCSyY2YX-NKz0wxsC-vANHIU9jaHqLNkVdcyOA_6to2VX0mLqRdUwpKNv_6fyrSo_',
          }}
        >
          <div id="paypal-button-container"></div>
        </PayPalScriptProvider>
      </div>
      <Footer />
    </div>
  );
};

export default Servicio;
