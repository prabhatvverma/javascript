import { multiply, multiplyAsync, multiplyAsync2 } from "./async-util.js";

multiplyAsync(4, 6, function (result) {
    console.log("result from async : " + result);
})

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const result = multiply(2, 5);
console.log("sync result :" + result);
console.log("main thread finished .....");

const multiplyPromise= multiplyAsync2(5,7);
multiplyPromise.then (function(result){
    console.log("result from async2 : "+result);
});