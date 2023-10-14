import React from "react"
import './styles.css'
import Conocenos from './IMG/conocenos.jpg'
import Header from "./header"
import Footer from "./footer"
function Nosotros(){
    return(
        <div>
            <Header/>
            <div className="columnas">
                <div className="conocenos">
                    <h4>CONOCENOS</h4>
                    <p>Somos una empresa de transporte a cargo de expertos que cuenta con un sistema de reservas para 
                    mejorar la eficiencia y rentabilidad de la empresa, así como brindar una experiencia de reserva 
                    fácil y segura para los clientes.</p>
                    <img src={Conocenos}/>
                </div>
                <div className="objetivos">
                    <h4>TU MEJOR EXPERIENCIA DE VIAJE</h4>
                    <ul>
                        <li><p>Brindar una experiencia de reserva fácil y segura para los clientes.</p></li>
                        <li><p>Proporcionar una herramienta en línea que mejore la eficiencia y rentabilidad de la 
                        empresa, lo que a su vez puede ayudar a mantener precios competitivos y mejorar la calidad del 
                        servicio.</p></li>
                        <li><p>Permitir a los clientes reservar servicios de transporte con anticipación, lo que reduce
                        el estrés y la incertidumbre al planificar un viaje.</p></li>
                        <li><p>Ofrecer opciones de pago convenientes y seguras, como uso de tarjetas de Crédito o Débito.</p></li>
                        <li><p>Proporcionar asistencia al cliente en caso de problemas con la reservación o modificaciones
                        en las fechas del servicio.</p></li>
                    </ul>
                </div>
                <div className="propositos">
                    <h4>PROSITOS</h4>
                    <p>El propósito de la empresa con los clientes es ofrecer un servicio de transporte más eficiente, 
                    conveniente y seguro, que les permita realizar sus reservas con anticipación y obtener la disponibilidad
                    de vehículos que necesitan para sus viajes.</p>
                    <p>El objetivo principal es mejorar la experiencia del cliente
                    al utilizar el sistema de reservas y brindarles una mayor comodidad y confianza en la reserva de sus servicios de transporte.</p>
                    <p>También se busca generar una mayor satisfacción en los clientes a través de una atención y servicio de calidad, 
                    lo que puede ayudar a generar recomendaciones positivas para la empresa.</p>
                    <p> En general, el objetivo es establecer una relación de confianza y satisfacción con los clientes, para 
                    que regresen a utilizar los servicios de la empresa en el futuro.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Nosotros