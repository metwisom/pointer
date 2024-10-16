#include <cmath>

extern "C" {

// Рассчитать угол
double calculateAngle(double ax, double ay, double bx, double by, double cx, double cy) {
    double ABx = bx - ax;
    double ABy = by - ay;
    double ACx = cx - ax;
    double ACy = cy - ay;
    double dotProduct = ABx * ACx + ABy * ACy;
    double magnitudeAB = std::sqrt(ABx * ABx + ABy * ABy);
    double magnitudeAC = std::sqrt(ACx * ACx + ACy * ACy);
    double cosTheta = dotProduct / (magnitudeAB * magnitudeAC + 1);
    double angleRadians = std::acos(cosTheta);
    return angleRadians;
}

// Рассчитать расстояние
double calculateDistance(double ax, double ay, double bx, double by) {
    double deltaX = bx - ax;
    double deltaY = by - ay;
    return std::sqrt(deltaX * deltaX + deltaY * deltaY);
}

// Определить сторону
int getSide(double ax, double ay, double bx, double by, double cx, double cy) {
    double crossProduct = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
    if (crossProduct > 0) return 1;
    if (crossProduct < 0) return -1;
    return 0;
}

}
