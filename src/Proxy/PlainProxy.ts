import { GraphicElement, GraphicPoint, GraphicRectangle } from "../Drawing/GraphicsElements";
import ICanvaslike from "./ICanvaslike";

/**
 * Simply adds all elements to the list.
 */
class PlainProxy implements ICanvaslike {
	
	public readonly graphics:Array<GraphicElement> = []

	private add(graphic: GraphicElement):void{
		this.graphics.push(graphic)
	}

	point(point: GraphicPoint):void{
		this.add(point)
	}

	rectangle(rectangle: GraphicRectangle): void{
		this.add(rectangle)
	}

	filledRectangle(rectangle: GraphicRectangle): void{
		this.add(rectangle)
	}
	
}

export default PlainProxy;