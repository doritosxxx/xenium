import { GraphicElement, GraphicPoint, GraphicRectangle } from "../Drawing/GraphicsElements";
import ProxyBase from "./ProxyBase";

/**
 * Simply adds all elements to the list.
 */
class PlainProxy extends ProxyBase {
	
	public readonly graphics:Array<GraphicElement> = []

	protected push(graphic: GraphicElement): void{
		this.graphics.push(graphic)
	}

	protected point(point: GraphicPoint): void{
		this.push(point)
	}

	protected rectangle(rectangle: GraphicRectangle): void{
		this.push(rectangle)
	}

	protected filledRectangle(rectangle: GraphicRectangle): void{
		this.push(rectangle)
	}
	
}

export default PlainProxy;