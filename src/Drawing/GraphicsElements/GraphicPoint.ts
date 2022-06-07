import { LineStyle } from "../index";
import GraphicElement from "./GraphicElement";

class GraphicPoint extends GraphicElement {
    x: number;
    y: number;

    constructor(lineStyle: LineStyle, x: number, y: number) {
        super(lineStyle);
        this.x = x;
        this.y = y;
    }
}

export default GraphicPoint;
