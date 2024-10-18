import { useEffect, useState } from 'react';
import Ghost from './Ghost';
import { getRandomPosition } from '../utils/random';

// interface ImageWithGhostsProps {
//     measures: { IMAGE_WIDTH: number; IMAGE_HEIGHT: number; MAX_GHOSTS: number; GHOST_SIZE: number };
//     ghosts?: { x: number; y: number }[];
//     onGhostClick: (index: number) => void;
// }

export default function ImageWithGhosts({handleGhostClick, MAX_GHOSTS}: any) {



    var cWidth = 0
    var cHeight = 0



    const [ghosts, setGhosts] = useState<{ x: number; y: number }[]>([]);
    const [measures, setMeasures] = useState({ IMAGE_WIDTH: cWidth, IMAGE_HEIGHT: cHeight, MAX_GHOSTS: MAX_GHOSTS, GHOST_SIZE: (cWidth * 8 / 100) })


    const mds = (event: any) => {
        cWidth = event.currentTarget.clientWidth || 0
        cHeight = event.currentTarget.clientHeight || 0
        // console.log(cWidth, cHeight)
        setMeasures({ IMAGE_WIDTH: cWidth, IMAGE_HEIGHT: cHeight, MAX_GHOSTS: MAX_GHOSTS, GHOST_SIZE: (cWidth * 8 / 100) })
        console.log((cWidth * 8 / 100))
    }
    const generateGhosts = () => {
        const newGhosts: { x: number; y: number }[] = []

        for (let i = 0; i < measures.MAX_GHOSTS; i++) {
            let position = getRandomPosition(measures.IMAGE_WIDTH, measures.IMAGE_HEIGHT, measures.GHOST_SIZE)

            newGhosts.push(position)
        }

        setGhosts(newGhosts)
    };

    useEffect(() => {
        generateGhosts()
    }, [measures])

    useEffect(() => {
        // mds({ currentTarget: document.getElementById('ghostContainer')! } as unknown as React.MouseEvent<HTMLDivElement>)
        // var cWidth = document.getElementById('ghostContainer')?.clientWidth
        // var cHeight = document.getElementById('ghostContainer')?.clientHeight
        // setMeasures({ IMAGE_WIDTH: cWidth! - 50, IMAGE_HEIGHT: cHeight! - 150, MAX_GHOSTS: 5, GHOST_SIZE: 50 })

        // console.log(measures)


        window.addEventListener('resize', () => {
            cWidth = document.getElementById('ghostContainer')!.clientWidth
            cHeight = document.getElementById('ghostContainer')!.clientHeight
            setMeasures({ IMAGE_WIDTH: cWidth - 50, IMAGE_HEIGHT: cHeight - 150, MAX_GHOSTS: MAX_GHOSTS, GHOST_SIZE: (cWidth * 8 / 100) })

            generateGhosts()
        })

        generateGhosts()
    }, []);

    

    return (
        <div
            id='ghostContainer'
            className={`relative border overflow-auto w-full h-full `}
            style={{
                // width: measures.IMAGE_WIDTH,
                // height: measures.IMAGE_HEIGHT,
                // width: cWidth,
                // height: cHeight,
                backgroundImage: 'url(bg-canvas.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            onLoad={mds}
        >
            {ghosts &&
                ghosts?.map((ghost, index) => (
                    <Ghost
                        key={index}
                        x={ghost.x}
                        y={ghost.y}
                        GHOST_SIZE={measures.GHOST_SIZE}
                        onGhostClick={() => handleGhostClick(index)}
                    />
                ))
            }
        </div>
    )
}
