import FractalComplexFunctionChaos from "./FractalComplexFunctionChaos";
import FractalComplexFunctionHole from "./FractalComplexFunctionHole";
import FractalComplexFunctionKnot from "./FractalComplexFunctionKnot";
import FractalComplexFunctionSphere from "./FractalComplexFunctionSphere";
import FractalComplexFunctionWhirl from "./FractalComplexFunctionWhirl";

// Maybe I don't need this beacause I can somehow create this union type from the tuple below "on the go".
/*
type FractalComplexFunction = 
	FractalComplexFunctionChaos | 
	FractalComplexFunctionHole |
	FractalComplexFunctionKnot |
	FractalComplexFunctionSphere |
	FractalComplexFunctionWhirl
*/

const complexFractalTypeList: [
    typeof FractalComplexFunctionChaos,
    typeof FractalComplexFunctionHole,
    typeof FractalComplexFunctionKnot,
    typeof FractalComplexFunctionSphere,
    typeof FractalComplexFunctionWhirl
] = [
    FractalComplexFunctionChaos,
    FractalComplexFunctionHole,
    FractalComplexFunctionKnot,
    FractalComplexFunctionSphere,
    FractalComplexFunctionWhirl,
];

export default complexFractalTypeList;
