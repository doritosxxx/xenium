import Caption from "../Caption";

export default interface ICaptionable {
    /**
     * Returns object caption.
     */
    getCaption(): Caption;
}
