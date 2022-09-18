let first_button = document.querySelector(".first-button");
let icon1 = document.querySelector(".animated-icon1");
let mobile_nav = document.querySelector(".navigation");

first_button.addEventListener("click", () => {
    icon1.classList.toggle("open");
    mobile_nav.classList.toggle("d-none");

})
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}