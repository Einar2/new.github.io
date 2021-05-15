let img = document.querySelectorAll(".img_slider");
let circle = document.querySelector(".circles");

let a = document.querySelector(".infinity_slider_wrap");
let b = document.querySelector(".infinity_slider");
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
    circle.style.display = "none";
    btn.style.opacity = "1";
    a.classList.add("infinity_slider_wrap_active");
    b.classList.add("infinity_slider_active");
    c.classList.add("btn_block_active");
    footer.style.opacity = ".1";
    for (let j = 0; j < img.length; j++){
        img[j].classList.add("img_block_img");
    }

    d.style.opacity = ".1";
    e.style.opacity = ".1";

    for(let i = 0; i < img.length; i++){

    clearInterval(time);

}




}






function close(){
    circle.style.display = "flex";
    btn.style.opacity = "0";
    a.classList.remove("infinity_slider_wrap_active");
    b.classList.remove("infinity_slider_active");
    c.classList.remove("btn_block_active");
    for (let j = 0; j < img.length; j++){
        img[j].classList.remove("img_block_img");
        img[j].classList.add("img_block_img_low");
    }

    d.style.opacity = "1";
    footer.style.opacity = "1";
    e.style.opacity = "1";
}















//


let images = document.querySelectorAll(".img_slider");
let blocks = document.querySelectorAll(".img_block");
let circles = document.querySelectorAll(".slide_circle");
let step = 0;


function slider(){

    for(let i = 0; i < images.length; i++){
        images[i].classList.add("opacity0");


    }

    images[step].classList.remove("opacity0");

    setTimeout(function(){
        slider_2();
    },1000)

 //circle
    for(let k = 0; k < circles.length; k++ ){
        circles[k].classList.remove("active_slide");
    }

    circles[step].classList.add("active_slide");


}



function slider_2(){
    for(let j = 0; j < blocks.length; j++){
        blocks[j].classList.add ("delay");
    }
        blocks[step].classList.remove("delay");
}

slider_2();
slider();


 let time = setInterval(function(){
if(step + 1 == images.length){
        step = 0;
    }
    else{
        step++;
    }
    slider();

},5000);



//BTN


document.querySelector(".left").onclick = function(){

    if(step - 1 == -1){
        step = images.length - 1;
    }
    else{
        step--;
    }
    slider();
    clearInterval(time);


    //


    //
};



document.querySelector(".rigth").onclick = function(){
    if(step + 1 == images.length){
        step = 0;
    }
    else{
        step++;
    }
    slider();
    clearInterval(time);


    //







    //

};
