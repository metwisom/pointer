import {iPoint} from "./point";

function getSide(point1: iPoint, point2: iPoint, point3: iPoint) {
    const crossProduct = (point2.x - point1.x) * (point3.y - point1.y) - (point2.y - point1.y) * (point3.x - point1.x);

    if (crossProduct > 0) {
        return 1;
    } else if (crossProduct < 0) {
        return -1;
    } else {
        return 0;
    }
}


export {getSide}