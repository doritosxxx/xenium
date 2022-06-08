import { pm, prec } from "./functions";

// `prec` function tests.
test("should leave number as is", () => {
    expect(prec(1)).toBe("1");
});

test("should leave number as is", () => {
    expect(prec(1.1)).toBe("1.1");
});

test("should remove last zero", () => {
    expect(prec(1.1)).toBe("1.1");
});

test("should keep only two digits after dot", () => {
    expect(prec(1.12345)).toBe("1.12");
});

test("should keep only one digit after dot", () => {
    expect(prec(1.10345)).toBe("1.1");
});

test("should return 0", () => {
    expect(prec(0.0001234)).toBe("0");
});

test("should return -0", () => {
    expect(prec(-0.0001234)).toBe("-0");
});

test("should keep only two digits after dot and also keep sign", () => {
    expect(prec(-123.123)).toBe("-123.12");
});

// `pm` function tests.
test("should leave string as is", () => {
    expect(pm("-123")).toBe("-123");
});

test("should append `+` at the beginning", () => {
    expect(pm("123")).toBe("+123");
});

test("should append `+` at the beginning", () => {
    expect(pm("0")).toBe("+0");
});

test("should leave number as is", () => {
    expect(pm(-123)).toBe("-123");
});

test("should append `+` at the beginning", () => {
    expect(pm(123)).toBe("+123");
});

test("should append `+` at the beginning", () => {
    expect(pm(0)).toBe("+0");
});

test("should append `+` at the beginning", () => {
    // That's wierd but `-0` converted to string is `0` (without minus sign).
    expect(pm(-0)).toBe("+0");
});
