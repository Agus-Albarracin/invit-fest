import React, { useState } from 'react';
import partyIcon from "../assets/party.png";
import locationIcon from "../assets/location.png";
import confirmIcon from "../assets/confirm.png";
import musicIcon from "../assets/music.svg";
import regaloIcon from "../assets/regalo.gif";
import RegaloModal from './modal';

import "./secondBlock.css";

const SecondBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="SecondBlock">
      <div style={{ marginTop: '20px' }}>
        <div className="divtitle">
          <h1 className="titlep">Te esperamos para compartir una noche especial !!!</h1>
        </div>

        <img src={partyIcon} alt="Icono Fiesta" />

        <h2>Día</h2>
        <p className='parrafo'>Viernes 16 de Agosto</p>
        <div className="linkBox">
          <a href="https://calendar.google.com/calendar" target="_blank" rel="noopener noreferrer">Agenda el día</a>
        </div>
        
        <img src={locationIcon} alt="Icono Ubicación" />
        <h2>Lugar</h2>
        <p className='parrafo'>Ms Recepciones</p>
        <div className="linkBox">
          <a href="https://maps.app.goo.gl/pikUcsmRbF94RE7C7" target="_blank" rel="noopener noreferrer">Cómo llegar</a>
        </div>

        <img src={confirmIcon} alt="Icono Confirmación" />
        <h2>Confirmación</h2>
        <p className='parrafo'>Por favor confirmar asistencia antes</p><p className='parrafo'> del 20 de Julio.</p>
        <div className="linkBox">
          <a href="https://wa.me/1134055260" target="_blank" rel="noopener noreferrer">Confirmar asistencia</a>
        </div>
      </div>

      <div className="musicContainer">
        <h2>Música</h2>
        <img src={musicIcon} alt="Icono Musica" />
        <p className='parrafo'>¿Qué canción te gustaría</p><p className='parrafo'> escuchar en la fiesta?</p>
        <div className="linkBoxMusic">
          <a href="https://wa.me/1164654712" target="_blank" rel="noopener noreferrer">Sugerir canción</a>
        </div>
      </div>

      <div className="regalosContainer">
        <h2>Regalos</h2>
        <img src={regaloIcon} alt="Icono Regalo"/>
        <p className='parrafo'>Tu presencia es el mejor regalo.  </p>
        <p className='parrafo'>Pero si insistis y </p>
        <p className='parrafo'>no sabes que regalarme</p>
        <p className='parrafo'>acepto $$$$ en efectivo o por transferencia.</p>

        <div className="linkBoxMusic">
          <button className="btn-regalo" onClick={openModal}>Datos bancarios</button>
        </div>
      </div>

      <RegaloModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default SecondBlock;
