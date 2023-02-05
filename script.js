const submitButton = document.querySelector(".btn-submit");
const ratingContainer = document.querySelector(".rating-container");
const successContainer = document.querySelector(".success-container");
const displayRatingAmountWrapper = document.querySelector(".amount-content");
const errorWrapper = document.querySelector(".error");
const ratings = document.querySelectorAll('input[name="rating"]');

function getRatingValue() {
    if (!ratings.checked) {
        errorWrapper.classList.remove("hidden");
    }
    for (const r of ratings) {
        if (r.checked) {
            console.log(r.value);
            ratingContainer.classList.add("hidden");
            successContainer.classList.remove("hidden");
            displayRatingAmountWrapper.innerHTML += "You selected " + r.value + " out of 5";
        }
    }
}