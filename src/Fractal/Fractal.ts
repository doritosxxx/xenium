import Caption from '../Caption'
import {Color} from '../Drawing'
import ICanvaslike from '../Proxy/ICanvaslike'
import IGeneratable from './IGeneratable'

// Pattern must contain "generate" method to convert initial fractal data into points.
/**
 * Represents fractal initial data.
 */
abstract class Fractal implements IGeneratable{
	readonly width: number
	readonly height: number
	readonly iterations: number
	readonly firstColor: Color
	readonly lastColor: Color

	/**
	 * 
	 * @param width - Width of the fractal.
	 * @param height - Height of the fractal.
	 * @param iterations - Amount of the generative iterations.
	 * @param firstColor - First color in the gradient.
	 * @param lastColor - Last color in the gradient.
	 * @throws {RangeError}
	 */
	constructor(
		width: number,
		height: number,
		iterations: number,
		firstColor?: Color, 
		lastColor?: Color
	){
		if(width <= 0)
			throw new RangeError("width of an image must be greater than 0")
		if(height <= 0)
			throw new RangeError("height of an image must be greater than 0")
		if(iterations < 0)
			throw new RangeError("iteration count must be not less than 0")

		this.width = width
		this.height = height
		this.iterations = iterations
		this.firstColor = firstColor ?? Color.GetRandom()
		this.lastColor = lastColor ?? Color.GetRandom()
	}

	/**
	 * @todo Add fractal name into the caption.
	 */
	async generate(proxy: ICanvaslike, caption?: Caption | undefined){
		if(caption !== undefined){
			caption.add("colors", this.firstColor + "-" + this.lastColor)
			// TODO: Add fractal name to the caption.
		}
	}

	

}

export default Fractal;