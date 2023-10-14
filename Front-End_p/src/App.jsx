import Terminos from './paginas/Terminos.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './paginas/Home.jsx'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/Formulario",
      element: <Terminos />
    }


    
])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;