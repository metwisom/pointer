import {iPoint} from "./point";

function calculateAngle(point1: iPoint, point2: iPoint, point3: iPoint) {
    const ABx = point2.x - point1.x;
    const ABy = point2.y - point1.y;
    const ACx = point3.x - point1.x;
    const ACy = point3.y - point1.y;
    const dotProduct = ABx * ACx + ABy * ACy;
    const magnitudeAB = Math.sqrt(ABx * ABx + ABy * ABy);
    const magnitudeAC = Math.sqrt(ACx * ACx + ACy * ACy);
    const cosTheta = dotProduct / (magnitudeAB * magnitudeAC);
    const angleRadians = Math.acos(cosTheta);
    const angleDegrees = angleRadians * (180 / Math.PI);

    return angleRadians;
}

export {calculateAngle}