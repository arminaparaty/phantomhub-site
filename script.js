// CheatPhantom

console.log("CheatPhantom Loaded");

// Button Animation

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.04)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// Fade Animation

window.onload=()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="0.6s";

document.body.style.opacity="1";

},100);

};
