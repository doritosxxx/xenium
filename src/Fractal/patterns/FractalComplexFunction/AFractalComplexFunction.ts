import Complex from "complex.js";
import Caption from '../../../Caption';
import { Color, LineStyle, Point2d, Size } from '../../../Drawing';
import { GraphicFilledRectangle, GraphicPoint } from "../../../Drawing/GraphicsElements";
import { randomInRange } from '../../../functions';
import { ProxyBase } from '../../../Proxy';
import Fractal from "../../Fractal";

abstract class AFractalComplexFunction extends Fractal {
	abstract name:string
	z: number
	/**
	 * 
	 * @param width - Maximum range (on x-axis) between left and right points.
	 * @param height - Maximum range (on y-axis) between bottom and top points.
	 * @param iterations - Amount of generation iterations.
	 * @param z - Well, I've forgot that's this.
	 */
	constructor(width: number, height: number, iterations?: number, z?:number, firstColor?: Color, lastColor?: Color){
		iterations ??= randomInRange(...AFractalComplexFunction.iterationRange)
		z ??= randomInRange(...AFractalComplexFunction.zRange)

		if(z <= 0 )
			throw new RangeError("z must be positive");
		super(width, height, iterations, firstColor, lastColor)

		this.z = z
	}

	async generate(proxy: ProxyBase, caption?: Caption){
		if(caption !== undefined){
			caption.add("Complex Function Fractal " + this.name)
			caption.add(this.toString())
			caption.add("z", this.z)
		}

		let maxLength = -1
		const center = new Point2d(this.width/2, this.height/2)
		const step = this.z*this.iterations
		const gradient = Color.GetGradient(this.firstColor, this.lastColor, this.iterations)
		const penSize = Math.round((this.width + this.height)/2 /1000*4)

		const points: Complex[] = []
		
		for(let x=0, i=0; i < this.iterations; x+=step, i++){
			const point:Complex = this.invoke(x)
			points.push( point )
			maxLength = Math.max(maxLength, point.abs() )
		}
		const scaledSize = new Size(
			this.width / maxLength / 2, 
			this.height / maxLength / 2
		)

		proxy.add(new GraphicFilledRectangle(
			new LineStyle(0,Color.FromString("#000"), Color.FromString("#000")),
			0, 0,
			this.width, this.height
		))

		points.forEach( (point, i) => {
			// Scaled point
			proxy.add(new GraphicPoint(
				new LineStyle(penSize, gradient[i], gradient[i]),
				point.re * scaledSize.width + center.x,
				point.im * scaledSize.height + center.y,
			))
		})

	}

	abstract invoke(x: number): Complex
	abstract toString(): string

	/**
	 * @description iterationRange[0] <= iterations <= iterationRange[1]
	 */
	public static iterationRange:[number, number] = [400, 10000]
	public static zRange:[number, number] = [200, 1000]
}

export default AFractalComplexFunction;