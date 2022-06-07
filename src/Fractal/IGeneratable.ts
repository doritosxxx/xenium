import ProxyBase from "../Proxy/ProxyBase";

export default interface IGeneratable {
    /**
     * Converts initial data to the points.
     */
    generate(proxy: ProxyBase): Promise<void>;
}
