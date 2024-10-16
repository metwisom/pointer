import { Point } from "./point";
// import { calculateDistance } from "./calculateDistance";
// import { calculateAngle } from "./calculateAngle";
// import { getSide } from "./getSide";
import { Display } from "./display";
import { World } from "./world";

import * as mathFunctions from './math_functions.js';




const points: Point[] = [];



function getRandom() {
    const a = [];
    for (let i = 0; i < 10; i++) {
        if (points.length === 0) return a; // проверка, что массив не пуст
        const randomIndex = Math.round(Math.random() * (points.length - 1));
        const g = Math.round(Math.abs(points[randomIndex].x) / World.width * 10);
        if (a[g] == undefined) {
            a[g] = 0;
        }
        a[g]++;
    }
    return a;
}

document.addEventListener("click", () => {
    console.log(getRandom());
});

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 300; i++) {
        points.push(new Point());
    }
  
    Display.init("display");
    Display.start((ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0, 0, World.width, World.height);
        for (const item of points) {
            ctx.beginPath();
            ctx.arc(item.x  - item.mass, item.y - item.mass, item.mass * 2, 0, Math.PI * 2);
            ctx.fillStyle = '#f9f';
            ctx.fill();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    });

    function draw() {
        points[0].speed = 0;
        points[0].mass = 100;
        points[0].x = World.width / 2;
        points[0].y = World.height / 2;
    
        for (const item of points) {
            if (!item.isActive) {
                continue;
            }

            for (const value of points) {
                if (value.mass === 0 || !value.isActive || value === item) {
                    continue;
                }

                const distance = mathFunctions.calculateDistance(item, value);

                // Проверка существования метода plan
                if (typeof item.plan === "function") {
                    const aang = mathFunctions.calculateAngle(item, value, item.plan(distance));
                    const side = mathFunctions.getSide(item, value, item.plan(distance));



                    item.angle -= (aang * side) /5000000  * 10 * item.mass;

                    if (aang < Math.PI / 2) {
                        item.speed += (3 - item.speed / 3) / (10000  / item.mass);
                    } else {
                        item.speed -= item.speed / 3 / 100 / (10000 / item.mass);
                    }
                }
            }

            item.move();
        }
    }

    setInterval(draw, 1);
});
