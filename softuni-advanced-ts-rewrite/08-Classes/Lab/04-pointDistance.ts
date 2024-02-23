class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static distance(pointA: Point, pointB: Point): number {
        return Math.sqrt((pointB.x - pointA.x) ** 2 + (pointB.y - pointA.y) ** 2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));