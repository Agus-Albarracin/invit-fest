import React, { useState } from 'react';
import partyIcon from "../assets/party.png";
import locationIcon from "../assets/location.png";
import confirmIcon from "../assets/confirm.png";
import musicIcon from "../assets/music.svg";
import musicaIcon from "../assets/musica.gif"
import regaloIcon from "../assets/regalo.gif";
import camaraIcon from "../assets/camara.gif"
import menuIcon from "../assets/menu.gif"
import RegaloModal from './modal';
import Reveal from './reveal';
import Revealfade from './revealfade'
import Revealfadei from './revealfadei';

import "./secondBlock.css";

const SecondBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="SecondBlock">


      <div style={{ marginTop: '20px' }}>
      <Reveal>
          <div className="divtitle">
          <Revealfadei>
              <h1 className="titlep">Te esperamos para compartir una noche especial !!!</h1>
          </Revealfadei>
          </div>
      </Reveal>


    <Revealfade>
          <img src={partyIcon} alt="Icono Fiesta" />
        <h2>Día</h2>
        <p className='parrafo'>Viernes 16 de Agosto</p>
        <p className='parrafo'>21:00 pm a 5:00 am</p>
      </Revealfade>
      <Revealfadei>
          <div className="linkBox">
            <a href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Cumple+de+Julie&dates=20240816T240000Z/20240817T080000Z&details=Descripci%C3%B3n+del+evento&location=Luis+Vernet+1185%2C+B1615ITX+Grand+Bourg%2C+Provincia+de+Buenos+Aires&ctz=America%2FArgentina%2FBuenos_Aires">Agenda el día</a>
          </div>
    </Revealfadei>

    <Revealfadei>
          <img src={locationIcon} alt="Icono Ubicación" />
          <h2>Lugar</h2>
          <p className='parrafo'>Ms Recepciones</p>
        <Revealfade>
          <div className="linkBox">
            <a href="https://maps.app.goo.gl/pikUcsmRbF94RE7C7" target="_blank" rel="noopener noreferrer">Cómo llegar</a>
          </div>
        </Revealfade>
    </Revealfadei>
    
    <Revealfade>
          <img src={confirmIcon} alt="Icono Confirmación" />
          <h2>Confirmación</h2>
          <p className='parrafo'>Por favor confirmar asistencia antes</p><p className='parrafo'> del 20 de Julio.</p>
      <Revealfadei>
          <div className="linkBox">
            <a href="https://wa.me/+541134055260?text=Confirmo%20la%20asistencia%20con%20los%20nombres%20de%20quienes%20van%20a%20asistir:" target="_blank" rel="noopener noreferrer">Confirmar asistencia</a>
          </div>
      </Revealfadei>
    </Revealfade>
    </div>

    <div className="regalosContainer">
        <h2>Menú</h2>
        <Reveal>

          <img src={menuIcon} alt="Icono Regalo" />
        </Reveal>
        <Revealfadei>

          <p className='parrafo'>Es importante que avises</p>
          <p className='parrafo'>sobre tu preferencia del menú</p>
          <p className='parrafo'>en caso de ser celíaco u otro</p>
        </Revealfadei>
        <div className="linkBoxMusic">
          <a href="https://wa.me/+541134055260?text=El%20alimento%20que%20no%20puedo%20consumir%20es..." target="_blank" rel="noopener comida">Avisar acá  </a>
        </div>
      </div>


      <div className="musicContainer">
        <h2>Música</h2>
      <Reveal>
          <img src={musicaIcon} alt="Icono Musica" />
      </Reveal> 
        <Revealfade>
            <p className='parrafo'>¿Qué canción te gustaría</p><p className='parrafo'> escuchar en la fiesta?</p>
        </Revealfade>

        <div className="linkBoxMusic">
          <a href="https://wa.me/+541164654712?text=Este%20tema%20no%20puede%20faltar..." target="_blank" rel="noopener musica">Sugerir canción</a>
        </div>
      </div>

      <div className="regalosContainer">
        <h2>Regalos</h2>
        <Reveal>

          <img src={regaloIcon} alt="Icono Regalo" />
        </Reveal>
        <Revealfadei>

          <p className='parrafo'>Tu presencia es el mejor regalo.  </p>
          <p className='parrafo'>Pero si insistis y </p>
          <p className='parrafo'>no sabes que regalarme</p>
          <p className='parrafo'>acepto $$$$ en efectivo o por transferencia.</p>
        </Revealfadei>

        <div className="linkBoxMusic">
          <button className="btn-regalo" onClick={openModal}>Datos bancarios</button>
        </div>
      </div>

      <div className="regalosContainer">
        <h2>Fotos</h2>
        <Reveal>
          <img src={camaraIcon} alt="Icono Camara" />
        </Reveal>
        <Revealfade>

          <p className='parrafo'>Envía los momentos post fiesta</p>
          <p className='parrafo'>más divertidos y que</p>
          <p className='parrafo'>compartimos juntos...</p>
        </Revealfade>

        <div className="linkBoxMusic">
          <a href="https://wa.me/+541134055260" target="_blank" rel="noopener camara">Mándalos acá</a>
        </div>
      </div>

    </div>
  );
};

export default SecondBlock;
