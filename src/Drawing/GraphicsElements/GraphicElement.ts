import { Color, LineStyle } from "../index";


/**
 * Represents a part of the image that can be drawn on canvas.
 */
abstract class GraphicElement {
	lineWidth : number
	fillStyle : Color
	strokeStyle : Color

	constructor(lineStyle:LineStyle)
	constructor(lineWidth: number, fillStyle: Color, strokeStyle: Color)
	constructor(lineWidth: number|LineStyle, fillStyle?: Color, strokeStyle?: Color){
		if( lineWidth instanceof LineStyle ){
			const lineStyle = lineWidth
			this.fillStyle = lineStyle.fillStyle
			this.strokeStyle = lineStyle.strokeStyle
			this.lineWidth = lineStyle.lineWidth
		 } else {
			this.lineWidth = lineWidth
			this.fillStyle = fillStyle as Color
			this.strokeStyle = strokeStyle as Color
		}

		if(this.lineWidth < 0)
			throw new RangeError("lineWidth must be greater than 0")
		
	}
}

export default GraphicElement;