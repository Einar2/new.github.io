window.onload = function (){
    document.querySelector(".preloader").style.display = "none";

    let logo = document.querySelectorAll(".logo_gif");
    for(let i = 0; i < logo.length; i++ ){
        logo[i].classList.add("b2");
    }
    document.querySelector(".footer").classList.add("b3");

    document.querySelector(".img_title").classList.add("b1");



}
