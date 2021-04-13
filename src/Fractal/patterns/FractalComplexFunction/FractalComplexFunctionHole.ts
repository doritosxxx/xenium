import Complex from "complex.js";
import AFractalComplexFunction from "./AFractalComplexFunction";
import { pm, prec } from '../../../functions';

class FractalComplexFunctionHole extends AFractalComplexFunction {
	name:string = "Hole"

	invoke(x: number): Complex {
		return new Complex(Math.cos(x), x*Math.sin(this.z)).exp().mul( this.z, x )
	}

	toString(): string {
		const z = this.z
		return `f(x)=(${prec(z)}+xi)e^(cos(x)${pm(prec(Math.sin(z)))}xi)`
	}

}

export default FractalComplexFunctionHole;