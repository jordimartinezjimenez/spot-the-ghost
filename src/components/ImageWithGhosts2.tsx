import Ghost from './Ghost';

interface ImageWithGhostsProps {
    measures: { IMAGE_WIDTH: number; IMAGE_HEIGHT: number; MAX_GHOSTS: number; GHOST_SIZE: number };
    ghosts?: { x: number; y: number }[];
    onGhostClick: (index: number) => void;
}

export default function ImageWithGhosts({ measures, ghosts, onGhostClick, }: ImageWithGhostsProps) {

    // const IMAGE_WIDTH = 300;
    // const IMAGE_HEIGHT = 250;

    return (
        <div
            className={`relative border overflow-auto`}
            style={{
                width: measures.IMAGE_WIDTH,
                height: measures.IMAGE_HEIGHT,
                backgroundImage: 'url(bg-canvas.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {ghosts &&
                ghosts?.map((ghost, index) => (
                    <Ghost
                        key={index}
                        x={ghost.x}
                        y={ghost.y}
                        GHOST_SIZE={measures.GHOST_SIZE}
                        onGhostClick={() => onGhostClick(index)}
                    />
                ))
            }
        </div>
    )
}
