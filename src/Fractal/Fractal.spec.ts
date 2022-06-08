import { Color, LineStyle } from "../Drawing";
import { GraphicPoint } from "../Drawing/GraphicsElements";
import { ProxyBase, StorageProxy} from "../Proxy";
import Fractal from "./Fractal";

class MockFractal extends Fractal {
    async generate(proxy: ProxyBase): Promise<void> {
        const white = new Color(255, 255, 255);
        const line = new LineStyle(1, white, white);

        for (let i = 0; i < this.height; ++i) {
            for (let j = 0; j < this.width; ++j) {
                proxy.add(new GraphicPoint(line, i, j));
            }
        }
    }
}

test("should print `colors` and `iterations` values", () => {
    const fractal = new MockFractal(
        1,
        1,
        1,
        new Color(0, 0, 0),
        new Color(0, 0, 0)
    );

    const caption = fractal.getCaption();

    expect(caption.toString()).toBe("colors: #000000-#000000\niterations: 1");
});

test("should generate rectangle with 4 dots", async () => {
    const fractal = new MockFractal(
        2,
        2,
        1,
        new Color(0, 0, 0),
        new Color(0, 0, 0)
    );

    const proxy = new StorageProxy();
    await fractal.generate(proxy);

    expect(proxy.graphics).toHaveLength(4);

    const expectedArray = [
        {
            x: 0,
            y: 0,
        },
        {
            x: 1,
            y: 0,
        },
        {
            x: 0,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
    ].map((obj) => expect.objectContaining(obj));

    expect(proxy.graphics).toEqual(expect.arrayContaining(expectedArray));
});
