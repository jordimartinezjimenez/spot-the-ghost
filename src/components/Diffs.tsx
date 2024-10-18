import React, { useState, useEffect } from 'react';
import './Diffs.css'

const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 400;
const MAX_GHOSTS = 5;
const GHOST_SIZE = 50;

// Genera una posición aleatoria para un fantasma
const getRandomPosition = () => ({
  x: Math.floor(Math.random() * (IMAGE_WIDTH - GHOST_SIZE)),
  y: Math.floor(Math.random() * (IMAGE_HEIGHT - GHOST_SIZE)),
});

// Componente para la imagen con fantasmas
const ImageWithGhosts = ({
  ghosts,
  onGhostClick,
}: {
  ghosts: { x: number; y: number }[];
  onGhostClick: (index: number) => void;
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        backgroundImage: 'url(image1.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {ghosts.map((ghost, index) => (
        <img
          key={index}
          src="ghost.svg" // Imagen del fantasma (asegúrate de tener esta imagen)
          alt="ghost"
          style={{
            position: 'absolute',
            top: ghost.y,
            left: ghost.x,
            width: GHOST_SIZE,
            height: GHOST_SIZE,
            cursor: 'pointer',
          }}
          onClick={() => onGhostClick(index)}
        />
      ))}
    </div>
  );
};

export default function Diffs() {

  const [ghosts1, setGhosts1] = useState<{ x: number; y: number }[]>([]);
  const [ghosts2, setGhosts2] = useState<{ x: number; y: number }[]>([]);
  const [foundGhosts, setFoundGhosts] = useState<number[]>([]);

  // Genera las posiciones de los fantasmas para ambas imágenes
  useEffect(() => {
    const generateGhosts = () => {
      const newGhosts1: { x: number; y: number }[] = [];
      const newGhosts2: { x: number; y: number }[] = [];

      for (let i = 0; i < MAX_GHOSTS; i++) {
        let position1 = getRandomPosition();
        let position2 = { ...position1 };

        // Asegura que haya diferencias en algunas posiciones
        if (Math.random() > 0.5) {
          position2 = getRandomPosition();
        }

        newGhosts1.push(position1);
        newGhosts2.push(position2);
      }

      setGhosts1(newGhosts1);
      setGhosts2(newGhosts2);
    };

    generateGhosts();
  }, []);

  // Manejar cuando un fantasma es encontrado en la segunda imagen
  const handleGhostClick = (index: number) => {
    if (!foundGhosts.includes(index)) {
      setFoundGhosts([...foundGhosts, index]);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Juego de Buscar Diferencias - Encuentra los Fantasmas</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <div>
          <h2>Imagen 1</h2>
          <div
            style={{
              position: 'relative',
              width: IMAGE_WIDTH,
              height: IMAGE_HEIGHT,
              backgroundColor: '#f0f0f0',
              border: '1px solid #ccc',
              backgroundImage: 'url(image1.png)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
        </div>
        <div>
          <h2>Imagen 2</h2>
          <ImageWithGhosts ghosts={ghosts2} onGhostClick={handleGhostClick} />
        </div>
      </div>
      <p>Fantasmas encontrados: {foundGhosts.length} de {MAX_GHOSTS}</p>
    </div>
  )
}
