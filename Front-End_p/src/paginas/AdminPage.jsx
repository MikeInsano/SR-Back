import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Crud = () => {
  // Estado para almacenar los productos
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    image: null // Cambiamos el valor inicial de image a null
  });

  useEffect(() => {
    // Obtener la lista de productos desde el backend al cargar la página
    axios.get('http://localhost:3006/products')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
      });
  }, []);

  // Manejador para actualizar el valor de image en el estado formData al seleccionar una imagen
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Función para agregar un nuevo producto a la base de datos
  const addProduct = () => {
    // Creamos un FormData para enviar el producto al backend con la imagen
    const productData = new FormData();
    productData.append('name', formData.name);
    productData.append('price', formData.price);
    productData.append('image', formData.image);

    // Enviar una solicitud POST al backend para agregar un nuevo producto
    axios.post('http://localhost:3006/products', productData)
      .then((response) => {
        console.log('Producto agregado exitosamente:', response.data);
        setProducts([...products, response.data.product]);
        setFormData({
          name: "",
          price: 0,
          image: null
        });
      })
      .catch((error) => {
        console.error('Error al agregar el producto:', error);
      });
  };

  // Función para eliminar un producto de la base de datos
  const deleteProduct = (productId) => {
    // Enviar una solicitud DELETE al backend para eliminar un producto
    axios.delete(`http://localhost:3006/products/${productId}`)
      .then((response) => {
        console.log('Producto eliminado exitosamente:', response.data);
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
      })
      .catch((error) => {
        console.error('Error al eliminar el producto:', error);
      });
  };

  return (
    <div>
      <h1>Administrador de Servicios</h1>
      <div>
        {/* Formulario para agregar un nuevo producto */}
        <h2>Agregar Nuevo Producto</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Precio"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <input
          type="file" // Cambiamos el tipo a file para seleccionar la imagen desde el archivo
          accept="image/*" // Solo permitimos imágenes
          onChange={handleImageChange} // Manejador para actualizar la imagen seleccionada
        />
        <button onClick={addProduct}>Agregar Producto</button>
      </div>
      <div>
        {/* Lista de productos */}
        <h2>Lista de Productos</h2>
        <ul>
          {products && products.map((product) => (
            <li key={product.id}>
              <span>{product.name}</span>
              <span>${product.price}</span>
              <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Crud;
