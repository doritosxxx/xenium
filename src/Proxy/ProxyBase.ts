import { GraphicElement, GraphicPoint, GraphicRectangle, GraphicFilledRectangle } from '../Drawing/GraphicsElements';

abstract class ProxyBase {

	/**
	 * Maps element to its processing method. 
	 * @param element - graphic element being processed by proxy.
	 * @todo if/else statement is dirty. I should use some patterns or smth.
	 */
	public add(element:GraphicElement){
		if(element instanceof GraphicPoint)
			this.point(element)
		else if(element instanceof GraphicRectangle)
			this.rectangle(element)
		else if(element instanceof GraphicFilledRectangle)
			this.filledRectangle(element)
		else 
			this.unknownElement(element)
	}

	protected abstract point(point: GraphicPoint): void
	protected abstract rectangle(rectangle: GraphicRectangle): void
	protected abstract filledRectangle(rectangle: GraphicFilledRectangle): void

	private unknownElement(element: GraphicElement): void {
		throw new RangeError("Element cannot be processed by 'add' method. ")
	}
	// TODO: Add more proxy methods if required.
}

export default ProxyBase;