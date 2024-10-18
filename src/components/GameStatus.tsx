interface GameStatusProps {
    foundGhosts: number;
    totalGhosts: number;
}

export default function GameStatus({ foundGhosts, totalGhosts }: GameStatusProps) {
    return (
        <p>Ghosts spotted: {foundGhosts} of {totalGhosts}</p>
    )
}
