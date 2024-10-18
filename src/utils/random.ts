export const getRandomPosition = (width: number, height: number, ghostSize: number) => {
    return {
        x: Math.floor(Math.random() * (width - ghostSize)),
        y: Math.floor(Math.random() * (height - ghostSize)),
    };
};