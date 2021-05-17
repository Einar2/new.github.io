let img = document.querySelectorAll(".img_slider");
let circle = document.querySelector(".circles");

let a = document.querySelector(".infinity_slider_wrap");
let b = document.querySelector(".infinity_slider");
let body = document.querySelector("body");
let c = document.querySelector(".btn_block");
let d = document.querySelector("header");
let e = document.querySelector(".content_block");
let footer = document.querySelector(".footer");




let btn = document.querySelector(".btn_close");

btn.onclick = close;

for(let i = 0; i < img.length; i++){
    img[i].onclick = push;
}



function push(){
    circle.style.opacity = "0";
    btn.style.opacity = "1";
    a.classList.add("infinity_slider_wrap_active");
    b.classList.add("infinity_slider_active");
    c.classList.add("btn_block_active");

    footer.style.display = "none"
    for (let j = 0; j < img.length; j++){
        img[j].classList.add("img_block_img");
    }

    d.style.opacity = ".1";
    e.style.opacity = ".1";

    for(let i = 0; i < img.length; i++){

    clearInterval(time);

}
    body.classList.add("body");




}






function close(){
    body.classList.remove("body");
    circle.style.opacity = "1";
    btn.style.opacity = "0";
    a.classList.remove("infinity_slider_wrap_active");
    b.classList.remove("infinity_slider_active");
    c.classList.remove("btn_block_active");
    footer.style.display = "block"
    for (let j = 0; j < img.length; j++){
        img[j].classList.remove("img_block_img");
    }

    d.style.opacity = "1";

    e.style.opacity = "1";
}















//



