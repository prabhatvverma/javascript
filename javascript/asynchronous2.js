// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function (event) {
//     console.log("Button is Clicked....");
// });

// function test() {
//     for (let i = 0; i < 7000; i++) {
//         console.log("count : " + i);
//     }
// }
// test();

function go() {
    console.log("Going Somewhere ...");
}
// window.setTimeout(function(){
let timer = window.setInterval(go, 2000);


console.log("hello ..... normal excution....");
console.log("hello ..... normal excution....");
console.log("hello ..... normal excution....");
console.log("hello ..... normal excution....");

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    window.clearInterval(timer);
    console.log("Button Is Clicked ...");
});

setTimeout((param1, param2) => {
    console.log("Hello", param1, param2);
}, 0, "some value", 100);
console.log("World");

for (let i = 0; i < 5; i++) {
    console.log(i);
}