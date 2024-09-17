
const slideshowElements = document.querySelectorAll(".slideshow-element");


const size = slideshowElements.length;
let count = 1;
document.querySelectorAll(".slideshow-element")[0]
    .classList.add("current");
setInterval(() => {


    document.querySelectorAll(".slideshow-element")[count]
        .classList.add("current");

    for (let i = 0; i < size; i++) {
        if (i != count) {
            document.querySelectorAll(".slideshow-element")[i]
                .classList.remove("current");
        }
    }

    count++;
    if (count == size) {
        count = 0;
    }

    console.log(count);

}, 3000);













// let count = 1;

// setInterval(() => {
//     count++;
//     let currentElement = document.querySelector(".current");
//     currentElement.classList.remove("current")

//     if (customElements > slideshowElements.length) {
//         slideshowElements[0].classList.add("current")
//     }
//     else {
//         currentElement.nextElementSibling.classList.add("current")

//     }

// }, 2000);