import { GraphicPoint, GraphicRectangle } from "../Drawing/GraphicsElements";
import ProxyBase from "./ProxyBase";

/**
 * Does nothing.
 * Use for tests.
 */
class StubProxy extends ProxyBase {

	protected point(point: GraphicPoint): void {}

	protected rectangle(rectangle: GraphicRectangle): void {}

	protected filledRectangle(rectangle: GraphicRectangle): void {}
	
}

export default StubProxy;