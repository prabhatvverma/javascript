function multiply(number1, number2) {
    return number1 * number2;
}
function multiplyAsync(number1, number2, fn) {
    setTimeout(() => {
        fn(number1 * number2);
    }, 0);
}

function multiplyAsync2(number1, number2) {
    return new Promise(function (resolve, reject) {
        resolve(number1 * number2)
    })
}

async function multiplyAsync3(number1, number2) {
    return await number2 * number2;
}

export {
    multiply,
    multiplyAsync,
    multiplyAsync2,
    multiplyAsync3
};