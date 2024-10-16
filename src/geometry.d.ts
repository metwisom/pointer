// geometry.d.ts

declare module 'geometry' {
    export interface MyWasmModule extends EmscriptenModule {
        calculateAngle(p1X: number, p1Y: number, p2X: number, p2Y: number, p3X: number, p3Y: number): number;
        calculateDistance(p1X: number, p1Y: number, p2X: number, p2Y: number): number;
        getSide(p1X: number, p1Y: number, p2X: number, p2Y: number, p3X: number, p3Y: number): number;
    }
}
