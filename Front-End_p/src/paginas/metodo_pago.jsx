import React, { useState } from 'react';
import './pago.css'
const Tarjeta = () => {
  const [frente, setFrente] = useState(true);
  const [numeroTarjeta, setNumeroTarjeta] = useState('#### #### #### ####');
  const [nombreTarjeta, setNombreTarjeta] = useState('xxxx');
  const [mesExpiracion, setMesExpiracion] = useState('MM');
  const [yearExpiracion, setYearExpiracion] = useState('AA');
  const [ccv, setCcv] = useState('');

  




  

  const handleAbrirFormularioClick = () => {
    setFrente(!frente);
    btnAbrirFormulario.addEventListener ('click'), () => {
      btnAbrirFormulario.classList.toggle('active');
      formulario.classList.toggle('active');
  };
}

  const handleNumeroTarjetaChange = (e) => {
    let valorInput = e.target.value;
    valorInput = valorInput.replace(/\s/g, '').replace(/\D/g, '');
    let nuevaTarjeta = '';
    for (let i = 0; i < valorInput.length; i++) {
      if (i % 4 === 0 && i > 0) {
        nuevaTarjeta += ' ';
      }
      nuevaTarjeta += valorInput[i];
    }
    setNumeroTarjeta(nuevaTarjeta);
    if (valorInput === '') {
      setNumeroTarjeta('#### #### #### ####');
    }
  };

  const handleNombreTarjetaChange = (e) => {
    let valorInput = e.target.value;
    valorInput = valorInput.replace(/[0-9]/g, '');
    setNombreTarjeta(valorInput);
  };

  const handleMesExpiracionChange = (e) => {
    setMesExpiracion(e.target.value);
  };

  const handleYearExpiracionChange = (e) => {
    setYearExpiracion(e.target.value.slice(2));
  };

  const handleCcvChange = (e) => {
    setCcv(e.target.value);
  };

  return (
    <div className="contenedor">
      <section className={`tarjeta ${frente ? '' : 'active'}`} onClick={handleAbrirFormularioClick}>
        <div className="delantera">
          <div className="logo-marca">
            <img src={numeroTarjeta[0] === '4' ? 'visa.png' : 'mastercard.png'} alt="" />
          </div>
          <img src="chip-tarjeta.png" className="chip" alt="" />
          <div className="datos">
            <div className="grupo" id="numero">
              <p className="label">Número Tarjeta</p>
              <p className="numero">{numeroTarjeta}</p>
            </div>
            <div className="flexbox">
              <div className="grupo" id="nombre">
                <p className="label">Nombre Tarjeta</p>
                <p className="nombre">{nombreTarjeta}</p>
              </div>

              <div className="grupo" id="expiracion">
                <p className="label">Expiracion</p>
                <p className="expiracion">
                  <span className="mes">{mesExpiracion}</span> / <span className="year">{yearExpiracion}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="trasera">
          <div className="barra-magnetica"></div>
          <div className="datos">
            <div className="grupo" id="firma">
              <p className="label">Firma</p>
              <div className="firma">
                <p>{nombreTarjeta}</p>
              </div>
            </div>
            <div className="grupo" id="ccv">
              <p className="label">CCV</p>
              <p className="ccv">{ccv}</p>
            </div>
          </div>
          <p className="leyenda">texto por defecto</p>
          <a href="#" className="link-banco">
            www.tubanco.com
          </a>
        </div>
      </section>

      <div className="contenedor-btn">
        <button className={`btn-abrir-formulario ${frente ? 'active' : ''}`} onClick={handleAbrirFormularioClick}>
          <i className="fas fa-plus"></i>
        </button>
      </div>

      <form action="" id="formulario-tarjeta" className={`formulario-tarjeta ${frente ? '' : 'active'}`}>
        <div className="grupo">
          <label htmlFor="inputNumero">Número Tarjeta</label>
          <input
            type="text"
            id="inputNumero"
            maxLength="19"
            autoComplete="off"
            onChange={handleNumeroTarjetaChange}
          />
        </div>
        <div className="grupo">
          <label htmlFor="inputNombre">Nombre</label>
          <input
            type="text"
            id="inputNombre"
            maxLength="30"
            autoComplete="off"
            onChange={handleNombreTarjetaChange}
          />
        </div>
        <div className="flexbox">
          <div className="grupo expira">
            <label htmlFor="selectMes">Expiracion</label>
            <div className="flexbox">
              <div className="grupo-select">
                <select name="mes" id="selectMes" onChange={handleMesExpiracionChange}>
                  <option disabled selected>Mes</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <i className="fas fa-angle-down"></i>
              </div>
              <div className="grupo-select">
                <select name="year" id="selectYear" onChange={handleYearExpiracionChange}>
                  <option disabled selected>Año</option>
                  {Array.from({ length: 8 }, (_, i) => (
                    <option key={yearExpiracion + i} value={yearExpiracion + i}>
                      {yearExpiracion + i}
                    </option>
                  ))}
                </select>
                <i className="fas fa-angle-down"></i>
              </div>
            </div>
          </div>

          <div className="grupo ccv">
            <label htmlFor="inputCCV">CCV</label>
            <input type="text" id="inputCCV" maxLength="3" onChange={handleCcvChange} />
          </div>
        </div>
        <button type="submit" className="btn-enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Tarjeta;
