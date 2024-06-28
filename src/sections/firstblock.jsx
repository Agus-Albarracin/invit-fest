import React, { useRef, useState } from 'react';
import './firstblock.css'; // Importamos el archivo de estilos CSS
import YouTube from 'react-youtube';
import playIcon from "../assets/play.svg";
import pauseIcon from "../assets/pause.svg";
import letras from "../assets/letras1.png";
import espejo from "../assets/espejo.png";
import frasegif from "../assets/frasegif2.gif";
import arrow from "../assets/arrow.svg";

const Firstblock = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const opts = {
    height: '0',
    width: '1',
    playerVars: {
      autoplay: 0, // Desactivamos autoplay inicial
      start: 4,    // Comienza en el segundo 4
    },
  };

  const onReady = (event) => {
    playerRef.current = event.target;
    if (isPlaying) {
      playerRef.current.playVideo();
    }
  };

  const handleTogglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    
    <div className="section1">
      <div className="topButton" onClick={handleTogglePlay}>
        <img src={isPlaying ? pauseIcon : playIcon} alt="Play/Pause" />
        <span>{isPlaying ? 'Pausa' : 'Play music'}</span>
      </div>

      <YouTube videoId="hvqc8lPmCfU" opts={opts} onReady={onReady} />

      <div className='content'>
        <img className="letras" src={letras} alt="Letras" />

        <img className='arrow-two' src={arrow} alt="Flecha" />

        <img className="spejos" src={espejo} alt="Espejo" />
        <img className='frasegif' src={frasegif} alt="Frase GIF" />
      </div>

      <div>
        <img className='arrow' src={arrow} alt="Flecha" />
      </div>
    </div>
  );
};

export default Firstblock;
