import {Point} from "./point";
import {calculateDistance} from "./calculateDistance";
import {calculateAngle} from "./calculateAngle";
import {getSide} from "./getSide";
import {Display} from "./display";
import {World} from "./world";

document.addEventListener("DOMContentLoaded",() =>{

    const points:Point[] = []


    for (let i = 0; i < 10; i++) {
        points.push(new Point())
    }


    Display.init('display')
    Display.start((ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0, 0, World.width, World.height)
        for (const i in points) {
            const item = points[i]
            ctx.fillRect(item.x - item.mass, item.y - item.mass, item.mass * 2, item.mass * 2);
        }
    })


    function draw() {
        for (const i in points) {
            const item = points[i]
            if (!item.isActive) {
                continue
            }
            // if (item.mass > 5) {
            //     for (let newitem = 0; newitem < item.mass + 1; newitem++) {
            //
            //         const pp = new Point()
            //         pp.angle = Math.PI * 2 / (item.mass + 1) * newitem
            //         pp.speed = 1
            //         pp.x = item.x + Math.cos(Math.PI * 2 / (item.mass + 1) * newitem) * 10
            //         pp.y = item.y + Math.sin(Math.PI * 2 / (item.mass + 1) * newitem) * 10
            //
            //     }
            //     item.mass = 0
            //     continue
            // }
            for (const index in points) {
                const value = points[index]
                if (value.mass == 0 || !value.isActive || index == i) {
                    continue
                }
                const distance = calculateDistance(item, value) ?? 10
                // if (distance < 1) {
                //     if (item.mass > value.mass) {
                //         item.mass += value.mass
                //         value.mass = 0
                //     } else {
                //         value.mass += item.mass
                //         item.mass = 0
                //     }
                //     continue
                // }
                const aang = calculateAngle(item, value, item.plan())
                const side = getSide(item, value, item.plan())
                item.angle -= (aang * side)
                if(aang < Math.PI / 2){
                    item.speed *= 1.1
                }else{
                    item.speed *= 0.9
                }
            }
            item.move()
        }
    }

    setInterval(draw, 1)




})
