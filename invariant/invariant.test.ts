import { describe, it, expect } from "vitest";
import invariant from "./invariant";

describe("invariant", () => {
    it("does not throw when condition is truthy", () => {
        expect(() => invariant(true, "error")).not.toThrow();
        expect(() => invariant(1, "error")).not.toThrow();
        expect(() => invariant("non-empty", "error")).not.toThrow();
    });

    it("throws when condition is false", () => {
        expect(() => invariant(false, "something went wrong")).toThrow(
            "something went wrong"
        );
    });

    it("throws when condition is null", () => {
        expect(() => invariant(null, "was null")).toThrow("was null");
    });

    it("throws when condition is undefined", () => {
        expect(() => invariant(undefined, "was undefined")).toThrow(
            "was undefined"
        );
    });

    it("throws when condition is 0", () => {
        expect(() => invariant(0, "was zero")).toThrow("was zero");
    });

    it("formats the error message with sprintf args", () => {
        expect(() => invariant(false, "expected %s but got %s", "a", "b")).toThrow(
            "expected a but got b"
        );
    });

    it("throws an Error instance", () => {
        expect(() => invariant(false, "fail")).toThrow(Error);
    });
});
