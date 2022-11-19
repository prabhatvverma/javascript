const btn = document.querySelector(".btn");

btn.addEventListener("click", function (event) {
    console.log("Button is Clicked....");
});

function test() {
    for (let i = 0; i < 7000; i++) {
        console.log("count : " + i);
    }
}
test();