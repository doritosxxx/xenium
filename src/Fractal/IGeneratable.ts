import Caption from "../Caption";
import ICanvaslike from "../Proxy/ICanvaslike";

interface IGeneratable {
	/**
	 * Converts initial data to the points. 
	 * @param caption - Caption builder which aggregates genetarion information.
	 */
	generate: (proxy:ICanvaslike, caption?:Caption) => Promise<void>
}

export default IGeneratable;