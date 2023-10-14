import React from "react"
import { Link } from 'react-router-dom'
import logo from './img/logo.svg'

class Header extends React.Component{
    render(){
        return(
            <header className="mike"  >
                <div className="page-header">
                    <img src={logo}  />
                    <h1>System Reservation</h1>
                    <h4>¡BUENA ELECCION!</h4>
                    <div className="añañin">
                        <Link to="/Home">INICIO</Link>
                        <Link to="/Opiniones">OPINIONES</Link>
                        <Link to="/Nosotros">NOSOTROS</Link>
                    </div>
                </div>
            </header>
        )
    } 
}
export default Header;