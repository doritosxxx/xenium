import Color from "./Color";
import Point2d from "./Point2d";

class ColoredPoint2d extends Point2d {
    public color: Color;

    constructor(x: number, y: number, color: Color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return `ColoredPoint(${this.x}; ${this.y})${this.color}`;
    }
}

export default ColoredPoint2d;
