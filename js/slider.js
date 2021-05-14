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
