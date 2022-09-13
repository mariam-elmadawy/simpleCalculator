"use strict";
let display = document.querySelector(".display");
let buttons = Array.from(document.getElementsByTagName("button"));

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerHTML) {
            case "C":
                display.innerHTML = "";
                break;
            case "=":
                try {
                    display.innerHTML = eval(display.innerHTML);
                } catch {
                    display.innerHTML = "error, try again!";
                }
                break;
            default:
                display.innerHTML += e.target.innerHTML;
        }
    });
});