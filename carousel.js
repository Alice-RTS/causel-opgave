const CAROUSEL_IMG = document.querySelector(".carousel__image")
const carousel_forward = document.querySelector(".carousel__forwardButton")
const carousel_backward = document.querySelector(".carousel__backwardButton")
const slides = document.querySelector(".images")

const images = ["http://placekitten.com/300/300", "https://picsum.photos/300/300" ,"https://placekitten.com/g/300/300","https://placekitten.com/g/300/300","https://placekitten.com/g/300/300"]

var index = 0
//CAROUSEL_IMG.src = images [index]

carousel_forward.addEventListener("click", forward)
carousel_backward.addEventListener("click", backward)

function forward(event) {
    
    index++
    
  
    if(images.length === index){
        index = 0
    }    
    //CAROUSEL_IMG.src = images [index]
    slides.querySelectorAll("img").forEach(img => img.style.transform = `translateX(-${index}00%)`)
}


function backward(event) {
    index--
    if (index < 0) {
        index = images.length - 1
    }
    // CAROUSEL_IMG.src = images [index]
    slides.querySelectorAll("img").forEach(img => img.style.transform = `translateX(-${index}00%)`)
    }

