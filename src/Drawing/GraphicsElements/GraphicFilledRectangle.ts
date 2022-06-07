import { Point2d, LineStyle } from "../index";
import GraphicElement from "./GraphicElement";

class GraphicFilledRectangle extends GraphicElement {
    x: number;
    y: number;
    w: number;
    h: number;

    constructor(
        lineStyle: LineStyle,
        x: number,
        y: number,
        w: number,
        h: number
    );
    constructor(lineStyle: LineStyle, point1: Point2d, point2: Point2d);
    constructor(
        lineStyle: LineStyle,
        x: number | Point2d,
        y: number | Point2d,
        w?: number,
        h?: number
    ) {
        super(lineStyle);

        if (x instanceof Point2d && y instanceof Point2d) {
            const point1 = x;
            const point2 = y;
            x = point1.x;
            y = point1.y;
            w = point2.x;
            h = point1.y;
        }

        this.x = x as number;
        this.y = y as number;
        this.w = w as number;
        this.h = h as number;
    }
}

export default GraphicFilledRectangle;
