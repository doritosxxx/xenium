import { Canvas, CanvasRenderingContext2D } from 'canvas';
import { LineStyle } from '../Drawing';
import { GraphicPoint, GraphicRectangle, GraphicFilledRectangle } from '../Drawing/GraphicsElements';
import ProxyBase from './ProxyBase'

class CanvasProxy extends ProxyBase {
	public readonly context: CanvasRenderingContext2D

	constructor(width:number, height:number){
		super()

		const canvas = new Canvas(width, height)
		this.context = canvas.getContext("2d")!
	}

	private setStyle(style: LineStyle){
		this.context.fillStyle = style.fillStyle.toString()
		this.context.strokeStyle = style.strokeStyle.toString()
		this.context.lineWidth = style.lineWidth
	}

	protected point(point: GraphicPoint){
		this.setStyle(point)
		this.context.beginPath();
		this.context.arc(
			point.x,
			point.y, 
			point.lineWidth,
			0,
			Math.PI*2
		)
		this.context.fill()
	}

	protected rectangle(rectangle: GraphicRectangle){
		this.setStyle(rectangle)
		this.context.rect(
			rectangle.x,
			rectangle.y,
			rectangle.w,
			rectangle.h
		)
	}

	protected filledRectangle(rectangle: GraphicFilledRectangle){
		this.setStyle(rectangle)
		this.context.fillRect(
			rectangle.x,
			rectangle.y,
			rectangle.w,
			rectangle.h
		)

	}

}

export default CanvasProxy;