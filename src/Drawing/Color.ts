import IColorlike from "./IColorlike";

class Color implements IColorlike {

	r: number
	g: number
	b: number

	constructor(hex:string)
	constructor(r: number,g: number, b: number)
	constructor(arg0: number|string, arg1?: number, arg2?: number){
		let r: number, g:number, b:number
		if( typeof arg0 === "string" && typeof arg1 === "undefined" && typeof arg2 === "undefined" ){
			const color =  Color.FromString(arg0)
			r = color.r
			g = color.g
			b = color.b
		}
		else {
			r = Math.trunc(arg0 as number)
			g = Math.trunc(arg1 as number)
			b = Math.trunc(arg2 as number)
		}
		if(r < 0 || r > 255)throw new RangeError("'r' must be in [0,255]. Got " + r)
		if(g < 0 || g > 255)throw new RangeError("'g' must be in [0,255]. Got " + g)
		if(b < 0 || b > 255)throw new RangeError("'b' must be in [0,255]. Got " + b)

		this.r = r
		this.g = g
		this.b = b
	}

	toString(): string{
		const {r,g,b} = this
		return '#' + ((r << 16) + (g << 8) + b).toString(16).padStart(6,'0');
	}

	toArray(): [number, number, number]{
		return [this.r, this.g, this.b];
	}

	toDec(): number{
		const {r,g,b} = this
		return (r << 16) + (g << 8) + b;
	}

	static FromString(string: string): Color {
		if(string[0] === '#')
			string  = string.substr(1)
		if(string.length === 3)
			string = string.split("").map(char=>char+char).join("")

		const dec:number = parseInt(string, 16)

		if(Number.isNaN(dec))
			throw new RangeError("Specified value doesn't represent existing color");
		
		return this.FromHex(dec)
	}

	static FromHex(hex:number):Color{
		const parts:[number,number,number] = [(hex >> 16)%256, (hex >> 8)%256, hex%256]
		return new Color(...parts);
	}

	static GetRandom():Color {
		const random = Math.random()
		const dec:number = random * ((1 << 24) - 1)
		return Color.FromHex(dec)
	}

	static GetGradient(fromColor:Color, toColor:Color, length:number):Color[]{
		const gradient:IColorlike[] = Array(length)
		gradient[0] = fromColor

		const stepR:number = (toColor.r - fromColor.r)/(length-1)
		const stepG:number = (toColor.g - fromColor.g)/(length-1)
		const stepB:number = (toColor.b - fromColor.b)/(length-1)

		for(let i=1; i<length; i++){
			gradient[i] = {
				r: gradient[i-1].r + stepR,
				g: gradient[i-1].g + stepG,
				b: gradient[i-1].b + stepB,
			}
		}
		
		return gradient.map(color => new Color(color.r, color.g, color.b));

	}
}

export default Color;