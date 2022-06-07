import Complex from "complex.js";
import AFractalComplexFunction from "./AFractalComplexFunction";
import { prec } from "../../../functions";

export default class FractalComplexFunctionSphere extends AFractalComplexFunction {
    name: string = "Sphere";

    invoke(x: number): Complex {
        return new Complex(0, x * Math.cos(this.z))
            .exp()
            .mul(Math.cos(x * (this.z + 1)), 0);
    }

    toString(): string {
        const z = this.z;
        return `f(x)=cos(${prec(z + 1)}x)e^(${prec(Math.cos(z))}xi)`;
    }
}
