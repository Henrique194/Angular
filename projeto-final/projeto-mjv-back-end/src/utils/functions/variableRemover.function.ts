export function variableRemover<T, K>(x: T, y: K) {
    const filteredVariable = x === undefined ? (y === undefined ? undefined : y)
                                             : (y === undefined ? x : undefined);
    return filteredVariable;
}