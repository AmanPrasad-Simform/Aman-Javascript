const slides = document.getElementsByClassName("slider-item");
const nextButton = document.getElementById("slider-button-next");
const prevButton = document.getElementById("slider-button-prev");
const dots = document.getElementsByClassName("dot");
let position = 0;
const numberOfSlides = slides.length;

function hideAllSlides() {
    // remove all slides not currently being viewed
    for (const slide of slides) {
        slide.classList.remove("slider-item-visible");
        slide.classList.add("slider-item-hidden");
    }
}

const handleMoveToNextSlide = function (e) {
    hideAllSlides();

    // check if last slide has been reached
    if (position === numberOfSlides - 1) {
        position = 0; // go back to first slide
    } else {
        // move to next slide
        position++;
    }
    // make current slide visible
    slides[position].classList.add("slider-item-visible");

    // update dot to represent current slide
    dots[position].classList.add("selected-dot");
    dots[position].checked = true;
}

const handleMoveToPrevSlide = function (e) {
    hideAllSlides();

    // check if we're on the first slide
    if (position === 0) {
        position = numberOfSlides - 1; // move to the last slide
    } else {
        // move back one
        position--;
    }
    // make current slide visible
    slides[position].classList.add("slider-item-visible");

    // update dot to represent current slide
    dots[position].classList.add("selected-dot");
    dots[position].checked = true;
}

// listen for slide change events
nextButton.addEventListener("click", handleMoveToNextSlide);
prevButton.addEventListener("click", handleMoveToPrevSlide);

var id = "";
function myMove() {
    var flag = false
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 2);
    function frame() {
        if (pos == 250) {
            clearInterval(id);
            flag = true
            flagtrue()
        } else {
            flagbtn.style.visibility = "hidden";
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
            console.log("elsseee", flag)
        }
    }
    function flagtrue() {
        var flagbtn = document.getElementById("flagbtn")
        flagbtn.style.visibility = "visible";
        redboxanimation()
    }
}


let mybutton = document.getElementsByClassName("scrolltopbtn")
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton[0].style.visibility = "visible";
    } else { mybutton[0].style.visibility = "hidden"; }
}
function scrollToTop() {
    window.scrollTo(0, 0);
}


function redboxanimation(){
    var redbox = document.getElementById("myAnimation")
    setTimeout(()=>{
        redbox.style.visibility = "hidden";
    },100)
    redbox.style.transition = "ease"
}

const aman = "myteam"
function scrollElement(id){
   window.scroll(0, Position(document.getElementById(id)));
    }

// const navbarht = document.querySelector(".navbar")

// var ht = navbarht.offsetHeight;
//    function Position(obj){
//     var currenttop = 0;
//     if (obj.offsetParent){
//      do {
//       currenttop += obj.offsetTop;
//     }while ((obj = obj.offsetParent));
//      return [currenttop-ht];
//     }
//    }
   
//    const links = document.querySelectorAll(".nav-link")
//    for(const value of links){
//     console.log(value.getAttribute("data-custom"),"GAGGGAGAAG")
//     value.addEventListener("click",()=>{
//         console.log(value.getAttribute("data-custom"))
//         scrollElement(value.getAttribute("data-custom"))
//     })
//    }
console.log(document.querySelectorAll(".nav-item[data-custom]"),)
   document.querySelectorAll('.nav-link[data-custom]').forEach(element => {
    element.addEventListener('click', function (event) {
        document.getElementById(this.getAttribute('data-custom')).scrollIntoView({ behavior: "smooth", inline: "nearest" });
    });
});