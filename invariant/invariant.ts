import sprintf from "../sprintf/sprintf";

export default function invariant(condition: unknown, format: string, ...args: unknown[]): asserts condition {
    if (!condition) {
        const message = sprintf(format, ...args);
        throw new Error(message);
    }
}
