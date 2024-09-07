import {iPoint} from "./point";

function calculateDistance(point1: iPoint, point2: iPoint) {
    const deltaX = point2.x - point1.x;
    const deltaY = point2.y - point1.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

export {calculateDistance}