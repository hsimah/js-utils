import { describe, it, expect } from "vitest";
import sprintf from "./sprintf";

describe("sprintf", () => {
    it("returns the format string unchanged when no placeholders", () => {
        expect(sprintf("hello world")).toBe("hello world");
    });

    it("replaces a single %s placeholder", () => {
        expect(sprintf("hello %s", "world")).toBe("hello world");
    });

    it("replaces multiple %s placeholders in order", () => {
        expect(sprintf("%s + %s = %s", 1, 2, 3)).toBe("1 + 2 = 3");
    });

    it("converts non-string args to strings", () => {
        expect(sprintf("%s", 42)).toBe("42");
        expect(sprintf("%s", true)).toBe("true");
        expect(sprintf("%s", null)).toBe("null");
        expect(sprintf("%s", undefined)).toBe("undefined");
    });

    it("returns an empty string when given an empty format", () => {
        expect(sprintf("")).toBe("");
    });

    it("replaces %s with undefined when args are exhausted", () => {
        expect(sprintf("%s and %s", "a")).toBe("a and undefined");
    });
});
