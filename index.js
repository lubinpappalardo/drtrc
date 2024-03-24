// Get the input element by its title
const input = document.querySelector('input[title="Website link"]');

// Set the value of the input field to the current URL
input.value = window.location.href;


document.getElementById("follow-popup-close-btn").addEventListener("click", function() {
    document.getElementById("follow-popup").classList = "";
});

const followUsBtns = document.getElementsByClassName("follow-us-btn");
Array.from(followUsBtns).forEach(element => {
    element.addEventListener("click", function() {
        document.getElementById("follow-popup").classList = "visible";
        document.getElementById("nav").classList = "";
    });
});


function isMobile() {
    return window.innerWidth < 768;
}

document.getElementById("mobile-menu").addEventListener("click", function() {
    if (isMobile()) {
        document.getElementById("nav").classList = "visible";
    }
});

document.getElementById("mobile-nav-close-btn").addEventListener("click", function() {
        document.getElementById("nav").classList = "";
});