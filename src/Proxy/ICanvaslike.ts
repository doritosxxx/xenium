import { ColoredPoint2d } from "../Drawing";
import { GraphicPoint } from '../Drawing/GraphicsElements'
import GraphicRectangle from "../Drawing/GraphicsElements/GraphicRectangle";

interface ICanvaslike {
	point :(point :GraphicPoint) => void,
	rectangle :(rectangle :GraphicRectangle) => void,
	filledRectangle :(rectangle :GraphicRectangle) => void,
	// TODO: Add more proxy methods if required.
}

export default ICanvaslike;