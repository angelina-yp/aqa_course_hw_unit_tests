   function funMap<T>(array: T[], callback: (el: T, index: number, array: T[]) => T): T[] {
    const result: T[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

const num = [1, 2, 3, 4, 5];
const result = funMap(num, (el, i) => el * i);
console.log(result); 