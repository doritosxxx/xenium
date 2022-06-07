import Caption from "../../Caption";
import { Color, LineStyle } from "../../Drawing";
import { GraphicFilledRectangle } from "../../Drawing/GraphicsElements";
import { randomInRange } from '../../functions';
import ProxyBase from "../../Proxy/ProxyBase";
import Fractal from "../Fractal";

class FractalTest extends Fractal {

	constructor(width: number, height: number, iterations?: number, firstColor?: Color, lastColor?: Color){
		iterations ??= randomInRange(...FractalTest.iterationRange)
		super(width, height, iterations, firstColor, lastColor)
	}

	async generate(proxy: ProxyBase, caption?: Caption | undefined): Promise<void> {
		if(caption !== undefined){
			caption.add("some test string")
			caption.add("this is key", "this is value")
		}
		
		const gradient = Color.GetGradient(this.firstColor, this.lastColor, this.iterations)
		const lineStyle = new LineStyle(3, new Color(0,0,0), new Color(0,0,0))
		
		for(let i=0; i<this.iterations; i++){
			const newLineStyle: LineStyle = new LineStyle(
				lineStyle.lineWidth,
				gradient[i],
				lineStyle.strokeStyle
			)
			proxy.add( new GraphicFilledRectangle(
				newLineStyle,
				this.width/this.iterations*i,
				0,
				this.width/this.iterations,
				this.height,
			))

			proxy.add( new GraphicFilledRectangle(
				newLineStyle,
				0,
				this.height/this.iterations*i,
				this.width,
				this.height/this.iterations,
			))

		}

	}

	/**
	 * @description iterationRange[0] <= iterations <= iterationRange[1]
	 */
	public static iterationRange:[number, number] = [1, 100]
	
}


export default FractalTest