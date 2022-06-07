import ProxyBase from "../Proxy/ProxyBase"

interface IGeneratable {
	/**
	 * Converts initial data to the points.
	 */
	generate(proxy: ProxyBase): Promise<void>
}

export default IGeneratable
