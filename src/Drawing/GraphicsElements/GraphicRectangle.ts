import { Point2d, LineStyle } from "../index";
import GraphicFilledRectangle from "./GraphicFilledRectangle";

class GraphicRectangle extends GraphicFilledRectangle {
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
        // TODO: add transparent color. Or just leave as is.
        // lineStyle.fillStyle = null

        if (x instanceof Point2d && y instanceof Point2d)
            super(lineStyle, x, y);
        else
            super(
                lineStyle,
                x as number,
                y as number,
                w as number,
                h as number
            );
    }
}

export default GraphicRectangle;
