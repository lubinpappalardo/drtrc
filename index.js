// Get the input element by its title
const input = document.querySelector('input[title="Website link"]');

// Set the value of the input field to the current URL
input.value = window.location.href;


document.getElementById("follow-popup-close-btn").addEventListener("click", function() {
    document.getElementById("follow-popup").classList = "";
});

document.getElementById("follow-us-btn").addEventListener("click", function() {
    document.getElementById("follow-popup").classList = "visible";
});