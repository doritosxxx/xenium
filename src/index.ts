import Caption from './Caption';
import FractalTest from './Fractal/patterns/FractalTest'
import CanvasProxy from './Proxy/CanvasProxy'

const fractal = new FractalTest(100, 100, 5)

;(async() => {
	const caption = new Caption();
	const proxy = new CanvasProxy(100, 100);
	await fractal.generate(proxy, caption)
	console.log(proxy.context.canvas.toDataURL())
})()