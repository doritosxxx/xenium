import Caption from "../Caption";
import ProxyBase from "../Proxy/ProxyBase";

interface IGeneratable {
	/**
	 * Converts initial data to the points. 
	 * @param caption - Caption builder which aggregates genetarion information.
	 */
	generate: (proxy:ProxyBase, caption?:Caption) => Promise<void>
}

export default IGeneratable;