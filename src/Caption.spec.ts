import Caption from "./Caption";

test("should return empty string", () => {
    expect(new Caption().toString()).toEqual("");
});

test("should return single key", () => {
    const caption = new Caption();
    caption.add("key");
    expect(caption.toString()).toBe("key");
});

test("should return key-value pair", () => {
    const caption = new Caption();
    caption.add("key", "value");
    expect(caption.toString()).toBe("key: value");
});

test("should return multiple key-value pairs with newline", () => {
    const caption = new Caption();
    caption.add("a", "b");
    caption.add("c", "d");
    caption.add("e", "f");
    expect(caption.toString()).toBe("a: b\nc: d\ne: f");
});

test("should return multiple key-value pairs with equal keys", () => {
    const caption = new Caption();
    caption.add("a", "b");
    caption.add("a", "d");
    expect(caption.toString()).toBe("a: b\na: d");
});

test("should return mixed key-value and key entries", () => {
    const caption = new Caption();
    caption.add("key");
    caption.add("key", "value");
    caption.add("other", "this");
    expect(caption.toString()).toBe("key\nkey: value\nother: this");
});