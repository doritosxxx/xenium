import Caption from './Caption';
import FractalComplexFunction from './Fractal/patterns/FractalComplexFunction';
import FractalTest from './Fractal/patterns/FractalTest'
import CanvasProxy from './Proxy/CanvasProxy'
import PlainProxy from './Proxy/PlainProxy';

// CanvasProxy 500x500 and Test fractal.
// Export to data uri.
async function test1(){
	const fractal = new FractalTest(500, 500)
	const proxy = new CanvasProxy(500, 500)
	await fractal.generate(proxy)
	console.log(proxy.context.canvas.toDataURL())
}

// CanvasProxy 500x500 and Complex function fractal.
// Export to data uri.
async function test2(){
	const fractal = new FractalComplexFunction(500, 500)
	const proxy = new CanvasProxy(500, 500)
	await fractal.generate(proxy)
	console.log(proxy.context.canvas.toDataURL())	

}


test2()