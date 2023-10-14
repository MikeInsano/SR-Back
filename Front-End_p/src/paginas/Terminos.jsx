import React from 'react'
import './styles.css'
import Header from "./header"
import Footer from "./footer"
function Terminos() {
  return (
    <div>
      <Header></Header>
      <div className='fondo'>
        <h1>Términos y condiciones</h1>
        <h4>En System Reservation</h4>
      </div>
      <div className='centro'>
        <div className='secc1'>
          <details>
            <summary>Generales, descuentos y canales de venta</summary>
            <h5>GENERALES</h5>
            <p>Su boleto es su seguro de viajero consérvelo. Válido para el Origen, Destino, fecha y hora indicada.</p>
            <h5>IDENTIFICACIÓN</h5>
            <p>En todos los casos de descuentos presentar una identificación oficial, original y vigente o los 
            documentos que acrediten la identidad de la persona que viaja al momento de la compra, al abordar el autobús 
            o cualquier momento que se le solicite. En los casos que la empresa lo determine, por motivos de la seguridad 
            de los pasajeros en el viaje, podrá solicitarse identificación oficial.</p>
            <h5>ABORDAJE</h5>
            <p>Los boletos electrónicos se pueden presentar en dispositivos móviles exclusivamente para abordar y 
            documentar su equipaje</p>
            <h5>DESCUENTOS</h5>
            <ul>
              <li><p>En todos los casos de descuentos, estos aplican sobre el precio regular (entero) disponible y vigente
              al momento de la compra (sin promociones, ni Compra con Tiempo, ni Compra Anticipada)</p></li>
              <li><p>Debe presentar credencial oficial, original y vigente, que acredite el derecho al descuento al comprar 
              su boleto (estudiantes, maestros, INAPAM, CONADIS), al abordar y en cualquier momento que se le 
              solicite, de no hacerlo se le cobrará la diferencia restante del precio regular (entero) del boleto</p></li>
              <li><p>No se aceptan copias simples de las credenciales</p></li>
              <li><p>Todas las credenciales falsas detectadas se retienen y se avisa a las autoridades</p></li>
              <li><p>No son acumulables con otros descuentos y/o promociones</p></li>
              <li><p>En caso de transferencia, El boleto original puede transferirse máximo 4 veces, los boletos con 
              descuento quedan sujetos a disponibilidad en el nuevo viaje.</p></li>
            </ul>
            <p><strong>Le informamos que los datos personales que usted ha proporcionado son confidenciales y serán tratados de 
            conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. 
            Para MÁS INFORMACIÓN acerca del tratamiento de sus datos personales y de los derechos que puede hacer valer, usted puede 
            consultar nuestro aviso de privacidad en la dirección https://www.systemreservation.com.mx/aviso-de-privacidad</strong></p>
            <h5>CANALES DE VENTA AUTORIZADOS</h5>
            <ul>
              <li><p><strong>Canales electrónicos</strong></p></li>
              <ul style={{marginLeft: '40px'}}>
                <li><p>Web www.systemreservation.com.mx</p></li>
              </ul>
            </ul>
          </details>
        </div>
        <div className='secc2'>
          <details>
            <summary>Descuentos y promociones en línea</summary>
            <h5 style={{borderBottom: '1px solid black', maxWidth: '78px'}}>Post-Hot Sale</h5>
            <h5>MECÁNICA</h5>
            <p>Se proporcionará un cupón de descuento exclusivo para los clientes que hayan realizado su compra durante el periodo 
            denominado Horas Hot, en el sitio web www.systemreservation.com.mx, el descuento será del <strong>10%</strong> y será 
            válido en la compra de cualquier boleto de adulto, el cupón de descuento se distribuirá vía correo electrónico <strong>un día 
            después del día de su compra.</strong></p>
            <p>El código de descuento será válido únicamente:</p>
            <ul>
              <li><p>Descuento válido solo para boletos de <strong>Adulto y Compra Anticipada</strong></p></li>
              <li><p>Fecha de compra del <strong>7 al 30 de junio del 2023</strong></p></li>
              <li><p>Fecha de viaje del <strong>7 al 30 de junio del 2023</strong></p></li>
              <li><p><strong>Este cupón no es acumulable</strong></p></li>
            </ul>
            <h5>GENERALES:</h5>
            <p>System Reservation no será responsable por las fallas ajenas que el sistema de red en general (internet) que pudiera 
            sufrir de manera temporal o definitiva, dentro de la vigencia de la promoción en la prestación del servicio del canal 
            electrónico utilizado o en caso de que sean resultado de caso fortuito o causas de fuerza mayor tales como desastres 
            naturales, contingencias sanitarias o cualesquiera otra que no estén en control directo del organizador.</p>
            <p>System Reservation no será responsable por fallas en los equipos de computación, de comunicación, de suministro de 
            energía eléctrica, de líneas telefónicas, de la red de internet, ni por desperfectos técnicos, errores humanos, virus 
            informáticos o cualesquiera otros programas o esquemas maliciosos que pudieran ocasionar pérdidas de información, robo 
            o suplantación de identidad o interrupción de negocios; o acciones de terceros que pudieran perturbar el normal desarrollo 
            de la promoción.</p>
            <p>La participación en esta promoción implicará el conocimiento y aceptación de los términos y condiciones, así como mecánica 
            aquí señalada.</p>
          </details>
        </div>
        <div className='secc3'>
          <details>
            <summary>Formas de pago en Canales Electrónicos</summary>
            <h5>TAJERTAS DE CRÉDITO O DÉBITO</h5>
            <ul>
              <li><p>Se aceptan tarjetas VISA y Master Card</p></li>
              <li><p>Las medidas de seguridad en la compra las determina su Banco.</p></li>
            </ul>
          </details>
        </div>
        <div className='secc4'>
          <details>
            <summary>Equipaje y Facturación</summary>
            <h5 style={{borderBottom: '1px solid black', maxWidth: '215px'}}>DOCUMENTACIÓN DE EQUIPAJE</h5>
            <h5>DOCUMENTACIÓN</h5>
            <ul>
              <li><p>Se considera equipaje los objetos de uso personal, ropa, y las herramientas de un arte u oficio, los cuales 
              deberán ser transportados en maletas, bolsas, cajas (excepto cajas de huevo)</p></li>
              <li><p>La transportación de huevo no se permite por medidas fitosanitarias</p></li>
              <li><p>La empresa no se hace responsable por pérdida o daños de: objetos frágiles; equipos de cómputo; electrónicos; 
              de comunicación o telefonía; electrodomésticos; dinero en efectivo o en documentos; o artículos de valor;
              todos los anteriores viajarán bajo la responsabilidad absoluta del pasajero</p></li>
              <li><p><strong>Se prohíbe</strong> transportar solventes, tanques de gas, pinturas, corrosivos, explosivos, productos a base de 
              alcohol, tanques de oxígeno, extintores o armas (solo personal autorizado)</p></li>
              <li><p>Los alimentos, mariscos y artículos perecederos deben estar en empaques térmicos y sellados apropiadamente para su 
              transportación y viajan bajo la responsabilidad del pasajero</p></li>
              <li><p>La carga y descarga de equipajes y exceso debe ser únicamente en las terminales, no se permite hacer paradas intermedias 
              en lugares no autorizados para subir o bajar equipaje o exceso de equipaje.</p></li>
            </ul>
            <h5>TRANSPORTE DE MASCOTAS Y ANIMALES DE SERVICIO</h5>
            <p>Sólo se aceptan abordo los siguientes animales:</p>
            <ul>
              <li><p>Perros Lazarillos, con los que obligatoriamente debe viajar el dueño</p></li>
              <li><p>Animales de Servicio, que son aquellos animales (perros) entrenados en realizar trabajos o tareas de apoyo a una persona 
              con discapacidad que salvaguardan la integridad y salud de las personas con fines terapéuticos</p></li>
              <ul style={{marginLeft: '40px'}}>
                <li><p>Presenta certificado médico en original con sello emitida por un psiquiatra</p></li>
                <li><p>Presenta el certificado de Animal de Servicio y carnet de vacunación</p></li>
                <li><p>Deben viajar con arnés o collar para su control</p></li>
                <li><p>Los animales de servicio branquiocefálicos viajan bajo responsabilidad del pasajero</p></li>
              </ul>
              <li><p>Perros oficiales o de rescate con documentación de acreditación correspondiente</p></li>
              <li><p>Pueden transportarse mascotas de tipo doméstico, que no se encuentren en peligro de extinción (conforme lo marca la 
              SEMARNAT o PROFEPA) y siempre y cuando no estén prohibidos por la Ley</p></li>
              <li><p>La mascota no puede viajar en ningún asiento, bajo ninguna circunstancia</p></li>
              <li><p>No podrá viajar cuando se trate de perros o gatos branquiocefálicos por su bienestar</p></li>
              <li><p>Los requisitos de la transportadora rígida son:</p></li>
              <ul style={{marginLeft: '40px'}}>
                <li><p>La altura es la máxima de la mascota de pie desde la cabeza, totalmente derecha</p></li>
                <li><p>El largo es de la mascota desde el hocico hasta la cola, más el largo de las patas delanteras (para que el animal 
                pueda estirarse totalmente)</p></li>
                <li><p>El ancho corresponde a dos veces la distancia entre los omóplatos del animal</p></li>
                <li><p>Asegurar una separación de 15 cm. entre la cabeza de la mascota cuando esté de pie y la parte superior de la transportadora</p></li>
              </ul>
              <li><p>En ninguna circustancia pueden ser transportados en cajas de cartón o jaulas</p></li>
              <li><p>Siempre debe documentarse a la mascota antes de abordar</p></li>
              <li><p>Para transportar su mascota debe presentar los siguientes documentos:</p></li>
              <ul style={{marginLeft: '40px'}}>
                <li><p>Certificado de vacunas, de salud o certificados de importación si es necesario y cualquier otro documento que la 
                autoridad correspondiente pueda solicitar en alguna revisión en cualquier punto del viaje</p></li>
                <li><p>Es importante solicitar con el Líder de Venta la carta responsiva para transportar a su mascota</p></li>
                <li><p>El número máximo, para cualquier destino, es de dos mascotas en transportadoras rígidas por separado</p></li>
                <li><p>Las mascotas se admiten por riguroso orden de llegada</p></li>
              </ul>
            </ul>
            <h5>POR SU SEGURIDAD SE PROHÍBE:</h5>
            <ul>
              <li><p>Viajar con aliento alcohólico, estado de ebriedad, bajo el influjo de estupefacientes o enervantes</p></li>
              <li><p>Realizar comportamientos inadecuados, faltas a la moral o cualquier conducta que atente contra las buenas costumbres, por 
              respeto a los demás pasajeros</p></li>
              <li><p>En caso de incumplimiento de las políticas, se procederá a cancelación del viaje</p></li>
            </ul>
            <p><strong>Nos dedicamos al transporte de pasajeros, no se realiza envíos de paquetería / carga, venta de unidades móviles y/o cualquier 
            otro giro no relacionado con el transporte de pasajeros.</strong></p>
          </details>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
export default Terminos