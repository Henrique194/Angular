export function capitalizeNames(name: string): string {
    const firstChar = name.charAt(0).toUpperCase();
    const spaceIndex = name.search(/\s/);
    const charAfterSpace = name.charAt(spaceIndex + 1).toUpperCase();
    const stringFormatted = name.replace(/\w/, `${firstChar}`).replace(/\s\w/, ` ${charAfterSpace}`);
    return stringFormatted;
}