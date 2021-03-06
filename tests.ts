import {
    complexFractalTypeList,
    FractalComplexFunctionChaos,
    FractalComplexFunctionHole,
    FractalComplexFunctionKnot,
    FractalComplexFunctionSphere,
    FractalComplexFunctionWhirl,
    FractalTest,
    CanvasProxy,
    StorageProxy,
    StubProxy,
    Color,
    Caption,
    Canvas,
} from "./src/index";
import _fs from "fs";
const fs = _fs.promises;

import path from "path";
import { randomInRange } from "./src/functions";

/**
 * CanvasProxy 500x500 and Complex function fractal.
 * Export to data uri.
 */
async function test2() {
    const fractal = new FractalComplexFunctionHole(500, 500);
    const proxy = new CanvasProxy(500, 500);
    await fractal.generate(proxy);
    const datauri = proxy.context.canvas.toDataURL();

    fs.writeFile(path.resolve(__dirname, "./img.datauri"), datauri);
}

/**
 * Color class test.
 */
function test3() {
    const color1 = new Color(255, 0, 117);
    console.log(color1, color1 + "");

    const color2 = Color.FromString("#FF0075");
    console.log(color2, color2 + "");

    const color3 = Color.FromString("#00FF88");
    console.log(color3, color3 + "");

    const color4 = new Color("#00FF88");
    console.log(color4, color4 + "");
}

/**
 * Caption test Complex Function Fractal.
 */
async function test4() {
    const fractal = new FractalComplexFunctionHole(100, 100);
    const proxy = new StorageProxy();
    const caption = new Caption();
    await fractal.generate(proxy, caption);

    console.log(caption.toString());
}

/**
 * Generate a pack of Complex Function fractals.
 */
async function test5() {
    const dir = path.resolve("./test5");
    if (!_fs.existsSync(dir)) await fs.mkdir(dir);

    // Fixed size and colors.
    const [width, height]: number[] = [500, 500];
    const [color1, color2]: Color[] = [
        new Color("#ADFF2F"),
        new Color("#C71585"),
    ];
    const z = 500;

    for (let it = 400; it < 8000; it *= 1.5) {
        // I should use factory here.

        const fractals = [
            new FractalComplexFunctionChaos(
                width,
                height,
                it,
                z,
                color1,
                color2
            ),
            new FractalComplexFunctionHole(
                width,
                height,
                it,
                z,
                color1,
                color2
            ),
            new FractalComplexFunctionKnot(
                width,
                height,
                it,
                z,
                color1,
                color2
            ),
            new FractalComplexFunctionSphere(
                width,
                height,
                it,
                z,
                color1,
                color2
            ),
            new FractalComplexFunctionWhirl(
                width,
                height,
                it,
                z,
                color1,
                color2
            ),
        ];

        for (let i = 0; i < fractals.length; i++) {
            const proxies = Array.from(new Array(5)).map(
                (_) => new CanvasProxy(width, height)
            );
            fractals[i].generate(proxies[i]).then(() => {
                const buffer = (
                    proxies[i].context.canvas as unknown as Canvas
                ).toBuffer();
                fs.writeFile(
                    dir + `/fractal${i}_${it}.png`,
                    new Uint8Array(buffer)
                );
            });
        }
    }
}

/**
 * Complex Function Fractal test.
 * Random parameters / exception check.
 */
async function test6() {
    const [width, height]: number[] = [300, 300];

    let [successCount, errorCount] = [0, 0];
    // Amount of tests.
    const amount = 1000;

    for (let i = 0; i < amount; i++) {
        // Factory this time.
        let types = [
            FractalComplexFunctionChaos,
            FractalComplexFunctionHole,
            FractalComplexFunctionKnot,
            FractalComplexFunctionSphere,
            FractalComplexFunctionWhirl,
        ];
        const fractal = new types[0](width, height);
        const proxy = new StubProxy();
        try {
            await fractal.generate(proxy);
            successCount++;
        } catch (err) {
            errorCount++;
            console.error(err);
        }
    }

    console.log("test 6 finished");
    console.log(`success: ${successCount}. error ${errorCount}`);
}

/**
 * randomInRange method test.
 */
function test7() {
    const length = 100;
    const iterations = 1e6;

    const result: number[] = [...new Array(length + 1)].map((e) => 0);
    for (let i = 0; i < iterations; ++i) {
        result[randomInRange(0, length)]++;
    }

    console.log("test 7 finished");
    console.log(result);
}

function test8() {
    const types = [
        FractalComplexFunctionChaos,
        FractalComplexFunctionHole,
        FractalComplexFunctionKnot,
        FractalComplexFunctionSphere,
        FractalComplexFunctionWhirl,
    ];

    const fractal = new FractalComplexFunctionKnot(100, 100, 1000, 400);

    function buildLink(fractal: FractalComplexFunctionKnot) {
        let type;
        types.forEach((t, i) => {
            if (fractal instanceof t) type = i;
        });
        const link = `https://justpic.surge.sh/?c1=${fractal.firstColor.toDec()}&c2=${fractal.lastColor.toDec()}&it=${
            fractal.iterations
        }&z=${fractal.z}&t=${type}`;
        return link;
    }

    console.log(buildLink(fractal));
}

// v1.2.0 test. New way of representing list of awaliable fractals.
// Draws random complex 100x100 fractal.
async function test9() {
    const fractalType =
        complexFractalTypeList[
            randomInRange(0, complexFractalTypeList.length - 1)
        ];

    const fractalInstance = new fractalType(200, 200);

    const proxy = new CanvasProxy(200, 200);
    await fractalInstance.generate(proxy);
    const datauri = proxy.context.canvas.toDataURL();

    console.log("test 9");
    console.log(datauri);
}

// test1()
// test2()
// test3()
// test4()
test5()
// test6()
// test7()
// test8()
// test9()
