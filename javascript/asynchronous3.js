import { multiply, multiplyAsync } from "./async-util.js";

multiplyAsync(4, 6, function (result) {
    console.log("result from async : " + result);
})

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const result = multiply(2, 5);
console.log("sync result :" + result);


console.log("main thread finished .....");