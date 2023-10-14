import React, { useState, useEffect } from 'react';
import './servicios.css';
import Header from "./header";
import Footer from "./footer";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';

const Servicio = () => {
  // Estado para almacenar los productos
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
  const [currency, setCurrency] = useState('USD');

  // Precios de los productos
  const productPrices = {
    'product-1': 100,
    'product-2': 150,
    'product-3': 200,
  };

  useEffect(() => {
    const paypalScript = document.createElement('script');
    paypalScript.src = `https://www.paypal.com/sdk/js?client-id=AUWZKfmQUL7PwqUts3FOT3SDjiqrFOBqL0t_9yw5OzhByQnv54vSlOjgrq4ddLNAUmAKLDRSjw-XoeXw`;
    paypalScript.async = true;
    paypalScript.onload = initializePaypalButtons;
    document.body.appendChild(paypalScript);

    // Obtener la lista de productos desde el backend al cargar la página
    axios.get('http://localhost:3006/products')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
      });
  }, []);

  const initializePaypalButtons = () => {
    if (showForm && !formSubmitted) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total / 100,
                  currency_code: currency
                }
              }
            ]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            console.log("Pago realizado con éxito:", details);
            setFormSubmitted(true);
          });
        },
        onError: (err) => {
          console.error("Error en el pago:", err);
        }
      }).render('#paypal-button-container');
    }
  };

  // Función para agregar un producto a la lista de productos
  const add = (product) => {
    const price = productPrices[product];
    setProducts([...products, product]);
    setTotal(total + price);
    setShowForm(true);
    setFormSubmitted(false);
    setFormData({
      nombre: "",
      telefono: "",
      ubicacion: "",
      destino: ""
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí debes cambiar 'total' por 'productPrices[products[products.length - 1]]'
    axios.post('http://localhost:3006/products', {
      name: formData.nombre,
      price: productPrices[products[products.length - 1]], // Cambia 'total' por 'productPrices[products[products.length - 1]]'
      image: '' // Definir aquí el nombre de la imagen o subir la imagen al servidor y guardar el nombre aquí.
    })
    .then((response) => {
      console.log('Producto agregado exitosamente:', response.data);
      setFormSubmitted(true);
    })
    .catch((error) => {
      console.error('Error al agregar el producto:', error);
    });
  };

  return (
    <div>
      <Header />
      <div className="page-content">
        {/* Renderizar los productos */}
        {products.map((product) => (
          <div className="product-container" key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <h1 className='precio'>${product.price}</h1>
            {/* Aquí debes cambiar 'add(product.id)' por 'add(product.name)' */}
            <button className="button-add" onClick={() => add(product.name)}>Reservar</button>
          </div>
        ))}

        {/* Mostrar el formulario si showForm es true y formSubmitted es false */}
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

              <button type="submit">Enviar</button>
            </form>
          </div>
        )}

        {/* Mostrar mensaje de pago realizado si formSubmitted es true */}
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
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: total / 1,
                            currency_code: currency
                          }
                        }
                      ]
                    });
                  }}
                  onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                      console.log("Pago realizado con éxito:", details);
                      setFormSubmitted(true);
                    });
                  }}
                  onError={function (err) {
                    console.error("Error en el pago:", err);
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        )}

        {/* Mostrar los botones de PayPal */}
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
