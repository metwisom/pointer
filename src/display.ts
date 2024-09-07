import {World} from "./world";

const Display = (() => {
    let canvas: HTMLCanvasElement
    let ctx: CanvasRenderingContext2D
    let callBack: (ctx: CanvasRenderingContext2D) => void
    return Object.freeze({
        canvas:undefined,
        ctx:undefined,
        init(id: string) {
            canvas = document.getElementById(id) as HTMLCanvasElement;
            canvas.width = World.width
            canvas.height = World.height
            ctx = canvas.getContext("2d");
        },
        start(newCb: (ctx: CanvasRenderingContext2D) => void) {
            callBack = newCb
            this.draw()
        },
        draw() {
            callBack(ctx);
            requestAnimationFrame(this.draw.bind(this));
        }
    })
})()

export {Display}