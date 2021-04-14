import Caption from './Caption';
import * as drawing from './Drawing';
import * as graphicElements from './Drawing/GraphicsElements';
import Fractal from './Fractal/Fractal';
import * as patterns from './Fractal/patterns';
import * as proxies from './Proxy';


// Вынужден экспортировать Canvas, пока не починят баг.
// https://github.com/Automattic/node-canvas/issues/1783
import type { Canvas } from 'canvas'


export { proxies, Fractal, drawing, graphicElements, Caption, patterns, Canvas };