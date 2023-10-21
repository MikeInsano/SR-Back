import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './paginas/Home.jsx';
import Terminos from './paginas/Terminos.jsx';
import Metodo_pago from './paginas/metodo_pago.jsx';
import Lujo from './paginas/lujo.jsx';
import Nosotros from './paginas/Nosotros.jsx';
import Servicio from './paginas/Servicio.jsx';
import Opiniones from './paginas/Opiniones.jsx';
import Pago from './paginas/Pago.jsx';
import IndexUser from './Pages-Dash/indexUser.jsx';
import FormularioDatos from './paginas/FormularioDatos.jsx';
import Login from './paginas/Loguin.jsx';
import Signup from './paginas/Signup.jsx';
import Admin from './paginas/AdminPage.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Signup',
    element: <Signup />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Nosotros',
    element: <Nosotros />
  },
  {
    path: '/Servicio',
    element: <Servicio />
  },
  {
    path: '/Lujo',
    element: <Lujo />
  },
  {
    path: '/Terminos',
    element: <Terminos />
  },
  {
    path: '/Metodo_Pago',
    element: <Metodo_pago />
  },
  {
    path: '/Opiniones',
    element: <Opiniones />
  },
  {
    path: '/Pago',
    element: <Pago />
  },
  {
    path: '/Dash',
    element: <IndexUser />
  },
  {
    path: '/FormularioDatos',
    element: <FormularioDatos />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Admin',
    element: <Admin />
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
