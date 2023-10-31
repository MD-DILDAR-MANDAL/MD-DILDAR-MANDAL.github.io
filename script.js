document.addEventListener("DOMContentLoaded", function() {
    const head = document.querySelector("header");

    window.addEventListener ("scroll", function() {
        head.classList.toggle ("sticky", window.scrollY >20);
    });
});