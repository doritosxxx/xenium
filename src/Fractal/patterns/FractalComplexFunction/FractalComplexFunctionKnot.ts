import Complex from "complex.js";
import AFractalComplexFunction from "./AFractalComplexFunction";
import { prec, pm } from "../../../functions";

export default class FractalComplexFunctionKnot extends AFractalComplexFunction {
    name: string = "Knot";

    invoke(x: number): Complex {
        return new Complex(Math.cos(x), x * Math.sin(this.z))
            .exp()
            .mul(Math.sin(x) * Math.cos(x), 0);
    }

    toString(): string {
        const z = this.z;
        return `f(x)=sin(x)cos(x)e^(cos(x)${pm(prec(Math.sin(z)))}xi)`;
    }
}
