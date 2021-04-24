import Caption from './Caption';
import Fractal from './Fractal/Fractal';
import CanvasProxy from './Proxy/CanvasProxy'
import ProxyBase from './Proxy/ProxyBase'
import StorageProxy from './Proxy/StorageProxy'
import StubProxy from './Proxy/StubProxy'
import Color from './Drawing/Color'
import ColoredPoint2d from './Drawing/ColoredPoint2d'
import LineStyle from './Drawing/LineStyle'
import Size from './Drawing/Size'
import { GraphicElement, GraphicFilledRectangle, GraphicPoint, GraphicRectangle} from './Drawing/GraphicsElements'

import complexFracralList from './Fractal/patterns/FractalComplexFunction'
import { FractalComplexFunctionChaos, FractalComplexFunctionHole, FractalComplexFunctionKnot, FractalComplexFunctionSphere, FractalComplexFunctionWhirl, FractalTest } from './Fractal/patterns/index'
import AFractalComplexFunction from './Fractal/patterns/FractalComplexFunction/AFractalComplexFunction'
// - Вынужден экспортировать Canvas, пока не починят баг.
// https://github.com/Automattic/node-canvas/issues/1783
// - Ты че дурак? А peer dependencies зачем?
// - Действительно. Возможно, стоит просто написать про баг в README и поставить peer dependency?
import type { Canvas } from 'canvas'


export { 
	Caption, 
	Fractal, 
	CanvasProxy,
	ProxyBase,
	StorageProxy,
	StubProxy,
	Color,
	ColoredPoint2d,
	LineStyle,
	Size,
	GraphicElement,
	GraphicFilledRectangle,
	GraphicPoint,
	GraphicRectangle,

	complexFracralList,
	AFractalComplexFunction,
	FractalComplexFunctionChaos, 
	FractalComplexFunctionHole, 
	FractalComplexFunctionKnot, 
	FractalComplexFunctionSphere, 
	FractalComplexFunctionWhirl, 
	FractalTest,

	Canvas
};