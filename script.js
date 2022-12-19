let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides() {
    let i;
    /* targeting all element by class name pagination */

    let slides = document.getElementsByClassName("imgSlide");
    let dots = document.getElementsByClassName("pagination");

    /* hiding all images by default using for loop and display none */
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    /* removing active class from all dots paginaton */
    for (i=0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    /* show image slide dynamically */
    slides[slideIndex - 1].style.display = "block";

    /* adding active class to respective dots pagination */
    dots[slideIndex - 1].classList.add("active");
}

