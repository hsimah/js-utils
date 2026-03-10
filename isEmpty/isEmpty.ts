export default function isEmpty(value: unknown): boolean {
    if (Array.isArray(value)) {
        return value.length === 0;
    } else if (typeof value === "object") {
        return value != null ? Object.keys(value).length === 0 : true;
    } else {
        return !value;
    }
}
