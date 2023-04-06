const links = document.querySelectorAll(".nav-link")
const bars = document.querySelectorAll(".myBar");
const mybutton = document.getElementsByClassName("scrolltopbtn")
const navbarht = document.querySelector(".navbar")
const ht = navbarht.offsetHeight;
const tabcontent = document.querySelectorAll(".tab-contents");
const toggleTabs = document.querySelector(".tab-titles");

const slides = document.getElementsByClassName("slider-item");
const nextButton = document.getElementById("slider-button-next");
const prevButton = document.getElementById("slider-button-prev");
const dots = document.getElementsByClassName("dot");
let position = 0;   // we are changing it that's why "let"
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


//The tech animation which we see on the homepage
let id = "";
function techAnimation() {
    let flag = false
    let elem = document.getElementById("myAnimation");
    let pos = 0;
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
        }
    }
}
function flagtrue() {
    let flagbtn = document.getElementById("flagbtn")
    flagbtn.style.visibility = "visible";
    boxAnimation()
}
function boxAnimation() {
    let redbox = document.getElementById("myAnimation")
    setTimeout(() => {
        redbox.style.visibility = "hidden";
    }, 100)
    redbox.style.transition = "ease"
}

// The rating bars which is on the homepage
function animateBars() {
    for (barItem of bars) {
        width = barItem.getAttribute("data-status");
        console.log('in for each loop ==== ', barItem, '=== width ==== ', width);
        barItem.style.width = width + "%";
        barItem.innerHTML = width + "%";
        barItem.style.transition = 'all 1s ease-in'
    }
}

// Function to reset the homepage animation
function resetAnimationBars() {
    document.querySelectorAll(".myBar").forEach((element) => {
        console.log('Element Style', element);
        element.style = { width: '10%' }
        element.innerHTML = '10%';
    });
}

// Function to call the animations again if the id==home is clicked
function animationCall(id) {
    if (id == 'home') {
        resetAnimationBars();
        setTimeout(() => {
            techAnimation();
            animateBars();
        }, 100);
    }
    window.scroll(0, Position(document.getElementById(id)));
}

//function to show or hide the scrolltop button and executing it
window.onscroll = function () { scrollFunction(); };
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton[0].style.visibility = "visible";
    } else { mybutton[0].style.visibility = "hidden"; }
}
function scrollToTop() {
    window.scrollTo(0, 0);
}

//function to scroll the element to it's height using it's ID
function Position(obj) {
    let currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop - ht];
    }
}

for (const value of links) {
    value.addEventListener("click", () => {
        scrollElement(value.getAttribute("data-custom"))
        animationCall(value.getAttribute("data-custom"))
    })
}

function scrollElement(id) {
    window.scroll(0, Position(document.getElementById(id)));
}

// Toggle the about section 
toggleTabs.addEventListener("click", (e) => {
    const removeClass = toggleTabs.children;
    if (e.target.children.length === 0) {
        for (let element of removeClass) {
            element.classList.remove("active-link");
        }
        tabcontent.forEach((element) => {
            element.classList.remove("active-tab");
        });
        document
            .getElementById(`${e.target.innerText.toLowerCase()}`)
            .classList.add("active-tab");
        e.target.classList.add("active-link");
    } else {
        return;
    }
});