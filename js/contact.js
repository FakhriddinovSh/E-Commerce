

/* Contact Page JS  code */
const elLabel = document.querySelector(".payment-method-label")
const elInput = document.querySelector(".payment-method-input")
const elWrapper = document.querySelector(".payment-method");
const elInputs = document.querySelectorAll(".payment-method-card-info-input");
const elBtn = document.querySelector(".contact-send-btn");

elBtn.addEventListener("click", function (evt) {
    elInputs.forEach(input => {
        if (input.value == "") {
            input.removeAttribute("name");
        }
    })
})