import React from "react"
import './styles.css'
import card from './img/metodos-card.png'
import phone from './img/metodos-smartphone.png'
import lap from './img/metodos-lap.png'
import Footer from "./footer"
import Header from "./header"

function Pago() {
    return(
        <div>
           <Header></Header>
            <div className='fnds'>
                <h1>Métodos de Pago</h1>
                <h4>Queremos que lo más sencillo de viajar, sea pagar</h4>
            </div>
            <div className="cto">
                <div className="info">
                    <p>¡Lo más fácil de viajar, es pagar!</p>
                    <p>Creamos una nueva experiencia de viaje para elegir entre cientos de destinos con promociones y 
                    distintos métodos de pago por internet.</p>
                    <p>A continuación, te informamos sobre las diferentes formas de pago al momento de realizar una 
                    compra a través de www.systemreservation.com.mx</p>
                </div>
                <div className="tarjetas">
                    <div className="titulo">
                        <img src={card}/>
                        <h3>Tarjeta de crédito o tarjeta de débito</h3>
                    </div>
                    <p>Primero, visualiza si la tarjeta utilizada es VISA o MasterCard y cuenta con la autorización 
                    de compra vigente.</p>
                    <ul>
                        <li><p>Selecciona la forma de pago: tarjeta de crédito o tarjeta de débito</p></li>
                        <li><p>Ingresa los datos solicitados de la tarjeta</p></li>
                        <li><p>Después de leer, acepta nuestros Términos y condiciones, así como el Aviso de Privacidad</p></li>
                        <li><p>Presiona el botón PAGAR</p></li>
                    </ul>
                    <p>*Es posible que tu banco solicite identiﬁcarte</p>
                    <p>Una vez aprobado el pago, podrás imprimir o guardar tus boletos de autobús en tu dispositivo móvil</p>
                    <div className="dispositivos">
                        <p>Disponible en:</p>
                        <div className="phone">
                            <img src={phone}/>
                        </div>
                        <div className="lap">
                            <img src={lap}/>
                        </div>
                    </div>
                    <p>¿Tienes alguna duda sobre nuestros diferentes Métodos de Pago? Estamos para ayudarte en nuestro
                    <span style={{color: 'blue'}}> <strong>Centro de Atención a Clientes HOLA</strong></span>, escríbenos y 
                    con gusto atenderemos a todas tus dudas.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Pago