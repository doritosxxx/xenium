import Caption from "../../Caption";
import { Color, ColoredPoint2d, LineStyle } from "../../Drawing";
import { GraphicPoint } from "../../Drawing/GraphicsElements";
import ICanvaslike from "../../Proxy/ICanvaslike";
import Fractal from "../Fractal";

class FractalTest extends Fractal {

	constructor(width: number, height: number, iterations?: number, firstColor?: Color, lastColor?: Color){
		// Bruh.
		iterations ??= Math.random()*(FractalTest.iterationRange[1] - FractalTest.iterationRange[0])+FractalTest.iterationRange[0];

		super(width, height, iterations, firstColor, lastColor)
	}

	async generate(proxy: ICanvaslike, caption?: Caption | undefined): Promise<void> {
		super.generate(proxy, caption)
		if(caption !== undefined){
			caption.add("some test string")
			caption.add("this is key", "this is value")
		}

		const lineStyle = new LineStyle(3, Color.GetRandom(), Color.GetRandom())

		for(let i=0; i<this.iterations; i++)
			proxy.point(new GraphicPoint(lineStyle, this.width/this.iterations*i, i ));

	}

	/**
	 * @description iterationRange[0] <= iterations <= iterationRange[1]
	 */
	public static iterationRange:[number, number] = [1, 100]
	
}


export default FractalTest