export default function sprintf(format: string, ...args: unknown[]): string {
    let i = 0;
    return format.replace(/%s/g, () => String(args[i++]));
}
