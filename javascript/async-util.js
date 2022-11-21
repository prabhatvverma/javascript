function multiply(number1, number2) {
    return number1 * number2;
}
function multiplyAsync(number1, number2, fn) {
    setTimeout(() => {
        fn(number1 * number2);
    }, 0);
}

export {
    multiply,
    multiplyAsync
};