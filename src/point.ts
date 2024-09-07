import {World} from "./world";

interface iPoint{
    x:number
    y:number
}

class Point implements iPoint{
    private _x: number = Math.random() * 800
    private _y: number = Math.random() * 800
    angle: number = Math.random() * Math.PI * 2;
    speed: number = 1
    mass: number = Math.random() * 3
    positive: boolean = Math.random() >= 0.5
    isActive: boolean = false;

    constructor() {
        setTimeout(() => this.isActive = true, 1000)
    }

    set x(newX: number) {
        this._x = (World.width + newX) % World.width
    }

    get x() {
        return this._x
    }

    set y(newY: number) {
        this._y = (World.height + newY) % World.height
    }

    get y() {
        return this._y
    }

    plan() {
        return {
            x: this.x + Math.cos(this.angle) * 0.1,//this.speed,
            y: this.y + Math.sin(this.angle) * 0.1,//this.speed
        }
    }

    move() {
        const {x, y} = this.plan()
        this.x = x
        this.y = y
    }

}

export {Point,iPoint};