import React, { useState, useEffect } from 'react';
import ImageWithGhosts from './components/ImageWithGhosts'
import GameStatus from './components/GameStatus';
import { getRandomPosition } from './utils/random';

// const measures = {
//   IMAGE_WIDTH: 300,
//   IMAGE_HEIGHT: 250,
//   MAX_GHOSTS: 5,
//   GHOST_SIZE: 30
// }
// const measures = {
//   IMAGE_WIDTH: 600,
//   IMAGE_HEIGHT: 400,
//   MAX_GHOSTS: 5,
//   GHOST_SIZE: 50
// }




// if (wWidth < 1920 && wWidth > 1440) {
//   measures.IMAGE_WIDTH = 500
//   measures.IMAGE_HEIGHT = 350
//   measures.GHOST_SIZE = 40
// } else if (wWidth < 1440 && wWidth > 1080) {
//   measures.IMAGE_WIDTH = 500
//   measures.IMAGE_HEIGHT = 350
//   measures.GHOST_SIZE = 35
// } else if (wWidth < 1080 && wWidth > 720) {
//   measures.IMAGE_WIDTH = 500
//   measures.IMAGE_HEIGHT = 350
//   measures.GHOST_SIZE = 35
// }

// const IMAGE_WIDTH = 300;
// const IMAGE_HEIGHT = 250;
// const MAX_GHOSTS = 5;
// const GHOST_SIZE = 30;

function App() {

  // var wWidth = document.documentElement.clientWidth
  // var wHeight = document.documentElement.clientHeight

  // const measures = {
  //   IMAGE_WIDTH: wWidth - 50,
  //   IMAGE_HEIGHT: wHeight - 150,
  //   MAX_GHOSTS: 5,
  //   GHOST_SIZE: 50
  // }
  // console.log(wWidth, wHeight)

  const MAX_GHOSTS = 5

  const [foundGhosts, setFoundGhosts] = useState<number[]>([]);


  const handleGhostClick = (index: number) => {
    if (!foundGhosts.includes(index)) {
        setFoundGhosts([...foundGhosts, index]);
    }
};

  return (
    <div className='h-screen flex flex-col items-center gap-y-5'>
      <h1 className='text-4xl mt-5'>Spot the Ghosts</h1>
      <div className='max-w-screen-lg w-full h-[20rem] md:h-[40rem]'>
        {/* <h2 className='text-center'>Image 2</h2> */}
        <ImageWithGhosts handleGhostClick={handleGhostClick} MAX_GHOSTS={MAX_GHOSTS} />
      </div>
      <GameStatus foundGhosts={foundGhosts.length} totalGhosts={MAX_GHOSTS} />
    </div>
  )
}

export default App
