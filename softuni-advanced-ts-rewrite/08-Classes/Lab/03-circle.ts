class Circle {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    get diameter(): number {
        return this.radius * 2;
    }

    set diameter(value: number) {
        this.radius = value / 2;
    }

    get area(): number {
        return Math.PI * this.radius ** 2;
    }
}

const c = new Circle(2);

console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);