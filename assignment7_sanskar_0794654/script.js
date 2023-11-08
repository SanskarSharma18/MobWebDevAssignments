// Initialize Swiper

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// Validate.js for credit card and CVV

document.addEventListener('DOMContentLoaded', function () {
    const creditCardInput = document.getElementById('creditCard');
    const cvvInput = document.getElementById('cvv');
    
    // Add event listeners to validate credit card and CVV
    creditCardInput.addEventListener('input', validateCreditCard);
    cvvInput.addEventListener('input', validateCVV);
    
    function validateCreditCard() {
        const pattern = /^[0-9]{10}$/;
        if (!pattern.test(creditCardInput.value)) {
            creditCardInput.setCustomValidity('Invalid credit card number (10 digits)');
        } else {
            creditCardInput.setCustomValidity('');
        }
    }
    
    function validateCVV() {
        const pattern = /^[0-9]{3}$/;
        if (!pattern.test(cvvInput.value)) {
            cvvInput.setCustomValidity('Invalid CVV (3 digits)');
        } else {
            cvvInput.setCustomValidity('');
        }
    }
});