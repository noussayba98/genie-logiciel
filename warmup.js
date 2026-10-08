function element(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i]
}

const a = element(["foo", "bar", "baz"])
const b = element([1, 2])
const c = element([["foo"], ["bar"]])
console.log(a);
console.log(b);
console.log(c);