import { describe, it, expect } from "vitest";
import isEmpty from "./isEmpty";

describe("isEmpty", () => {
    describe("arrays", () => {
        it("returns true for an empty array", () => {
            expect(isEmpty([])).toBe(true);
        });

        it("returns false for a non-empty array", () => {
            expect(isEmpty([1])).toBe(false);
        });
    });

    describe("objects", () => {
        it("returns true for an empty object", () => {
            expect(isEmpty({})).toBe(true);
        });

        it("returns false for a non-empty object", () => {
            expect(isEmpty({ a: 1 })).toBe(false);
        });

        it("returns true for null", () => {
            expect(isEmpty(null)).toBe(true);
        });
    });

    describe("primitives", () => {
        it("returns true for an empty string", () => {
            expect(isEmpty("")).toBe(true);
        });

        it("returns false for a non-empty string", () => {
            expect(isEmpty("hello")).toBe(false);
        });

        it("returns true for 0", () => {
            expect(isEmpty(0)).toBe(true);
        });

        it("returns false for a non-zero number", () => {
            expect(isEmpty(42)).toBe(false);
        });

        it("returns true for undefined", () => {
            expect(isEmpty(undefined)).toBe(true);
        });

        it("returns true for false", () => {
            expect(isEmpty(false)).toBe(true);
        });

        it("returns false for true", () => {
            expect(isEmpty(true)).toBe(false);
        });
    });
});
