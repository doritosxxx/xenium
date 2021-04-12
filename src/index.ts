import { Color } from './Drawing';
import FractalComplexFunctionHole from './Fractal/patterns/FractalComplexFunction/FractalComplexFunctionHole';
import FractalTest from './Fractal/patterns/FractalTest';
import {CanvasProxy, PlainProxy} from './Proxy';
import _fs  from 'fs'
const fs = _fs.promises

import path from 'path'
import Caption from './Caption';

// CanvasProxy 500x500 and Test fractal.
// Export to data uri.
async function test1(){
	const fractal = new FractalTest(500, 500, 10, 
		new Color("#333333"), 
		new Color("#00FF88")
	)
	const proxy = new CanvasProxy(500, 500)
	await fractal.generate(proxy)
	console.log(proxy.context.canvas.toDataURL())
}

// CanvasProxy 500x500 and Complex function fractal.
// Export to data uri.
async function test2(){
	const fractal = new FractalComplexFunctionHole(500, 500)
	const proxy = new CanvasProxy(500, 500)
	await fractal.generate(proxy)
	const datauri = proxy.context.canvas.toDataURL()

	fs.writeFile(path.resolve("./img.datauri"), datauri)

}

/**
 * Color class test.
 */
function test3(){
	const color1 = new Color(255, 0 , 117)
	console.log(color1, color1+"")

	const color2 = Color.FromString("#FF0075")
	console.log(color2, color2+"")
	
	const color3 = Color.FromString("#00FF88")
	console.log(color3, color3+"")
	
	const color4 = new Color("#00FF88")
	console.log(color4, color4+"")
}

/**
 * Caption test Complex Function Fractal.
 */
async function test4(){
	const fractal = new FractalComplexFunctionHole(100, 100)
	const proxy = new PlainProxy()
	const caption = new Caption()
	await fractal.generate(proxy, caption)

	console.log(caption.toString())


}

test4()