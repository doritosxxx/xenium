import AFractalComplexFunction from './AFractalComplexFunction'
import FractalComplexFunctionChaos from './FractalComplexFunctionChaos'
import FractalComplexFunctionHole from './FractalComplexFunctionHole'
import FractalComplexFunctionKnot from './FractalComplexFunctionKnot'
import FractalComplexFunctionSphere from './FractalComplexFunctionSphere'
import FractalComplexFunctionWhirl from './FractalComplexFunctionWhirl'

const complexFracralList: typeof AFractalComplexFunction[] = [
	FractalComplexFunctionChaos,
	FractalComplexFunctionHole,
	FractalComplexFunctionKnot,
	FractalComplexFunctionSphere,
	FractalComplexFunctionWhirl 
]

export default complexFracralList;
