import {Color, LineStyle} from "../index";


/**
 * Implements a part of the image that can be drawn on canvas.
 */
abstract class GraphicElement {
	lineWidth : number
	fillStyle : Color
	strokeStyle : Color

	constructor(lineStyle:LineStyle)
	constructor(lineWidth:number, fillStyle:Color, strokeStyle:Color)
	constructor(lineWidth:number|LineStyle, fillStyle?:Color, strokeStyle?:Color){

		if( lineWidth instanceof LineStyle ){
			const lineStyle = lineWidth
			fillStyle = lineStyle.fillStyle
			strokeStyle = lineStyle.strokeStyle
			lineWidth = lineStyle.lineWidth
		}

		if(lineWidth < 0)
			throw new RangeError("lineWidth must be greater than 0")
		
		this.lineWidth = lineWidth
		this.fillStyle = fillStyle!
		this.strokeStyle = strokeStyle!
	}
}

export default GraphicElement;