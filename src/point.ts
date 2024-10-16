import {World} from "./world";

    interface iPoint{
        x:number
        y:number
    }

class Point implements iPoint{
    private _x: number = Math.random() * World.width
    private _y: number = Math.random() * World.height
    angle: number = Math.random() * Math.PI * 2;
    speed: number = 1
    mass: number = Math.random() * 3 * 10
    positive: boolean = Math.random() >= 0.8
    isActive: boolean = true;

    constructor() {
        // setTimeout(() => this.isActive = true, 1000)
    }

    set x(newX: number) {
        this._x = newX
    }

    get x() {
        return this._x
    }

    set y(newY: number) {
        this._y = newY
    }

    get y() {
        return this._y
    }

    plan(speed = this.speed) {
        return {
            x: this.x + Math.cos(this.angle) * speed,
            y: this.y + Math.sin(this.angle) * speed
        }
    }

    move() {
        const {x, y} = this.plan()  
        this.x = x
        this.y = y
    }

}

export {Point,iPoint};