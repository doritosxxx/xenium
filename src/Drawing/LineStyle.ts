import { Color } from './index'

class LineStyle {
	lineWidth:number 
	fillStyle:Color
	strokeStyle:Color

	constructor(lineWidth:number, fillStyle:Color, strokeStyle:Color){
		if(lineWidth < 0)
			throw new RangeError("lineWidth must be greater than 0")
		
		this.lineWidth = lineWidth
		this.fillStyle = fillStyle
		this.strokeStyle = strokeStyle
	}
}

export default LineStyle;