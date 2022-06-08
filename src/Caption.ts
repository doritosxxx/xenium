export default class Caption {
    public lineSeparator = "\n";
    public entrySeparator = ": ";

    private lines: string[];

    constructor() {
        this.lines = [];
    }

    add(key: string, value: string | number): void;
    add(value: string | number): void;
    add(key: string, value?: string | number): void {
        if (value == undefined) this.lines.push(key.toString());
        else
            this.lines.push(
                key.toString() + this.entrySeparator + value.toString()
            );
    }

    toString() {
        return this.lines.join(this.lineSeparator);
    }
}
