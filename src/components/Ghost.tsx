import './Diffs.css'

interface GhostProps {
    x: number;
    y: number;
    onGhostClick: () => void;
    GHOST_SIZE: number
}

// const GHOST_SIZE = 30;

export default function Ghost({ x, y, onGhostClick, GHOST_SIZE }: GhostProps) {
    return (
        <img
            src="ghost.svg"
            alt="ghost"
            onClick={onGhostClick}
            className={`absolute cursor-pointer`}
            style={{
                top: y,
                left: x,
                width: GHOST_SIZE,
                height: GHOST_SIZE,
            }}
        />
        // <img src="ghost.svg" alt="ghost"
        //     style={{
        //         position: 'absolute',
        //         top: y,
        //         left: x,
        //         width: GHOST_SIZE,
        //         height: GHOST_SIZE,
        //         cursor: 'pointer',
        //     }}
        //     onClick={onGhostClick}
        // />
    )
}
