import Caption from './Caption';
import FractalTest from './Fractal/patterns/FractalTest'
import CanvasProxy from './Proxy/CanvasProxy'
import PlainProxy from './Proxy/PlainProxy';


async function test1(){
	const fractal = new FractalTest(500, 500, 100)
	const caption = new Caption();
	const proxy = new CanvasProxy(500, 500);
	await fractal.generate(proxy, caption)
	//console.log(proxy.graphics)
	console.log(proxy.context.canvas.toDataURL())
}


test1()