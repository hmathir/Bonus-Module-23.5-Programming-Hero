function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1); // sum() call it self inside sum() function.
}
const result = sum(5);
console.log(result);