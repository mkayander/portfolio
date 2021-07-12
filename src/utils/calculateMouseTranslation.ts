export type MousePos = {
    x: number;
    y: number;
};

const calculateMouseTranslation = (pos: MousePos, multiplier: number) =>
    `translate(${pos.x * multiplier}px, ${pos.y * multiplier}px)`;

export default calculateMouseTranslation;
