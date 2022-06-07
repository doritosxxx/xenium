import Complex from "complex.js";
import AFractalComplexFunction from "./AFractalComplexFunction";
import { prec } from '../../../functions';

export default  class FractalComplexFunctionWhirl extends AFractalComplexFunction {
	name:string = "Whirl"

	invoke(x: number): Complex {
		return new Complex(0, x*Math.cos(this.z)).exp().mul(Math.cos(x) * Math.sin(x) * x, 0)
	}

	toString(): string {
		const z = this.z
		return `f(x)=xsin(x)cos(x)e^(${prec(Math.cos(z))}xi)`
	}

}