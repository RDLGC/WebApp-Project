function showPassword() {
    const showPasswordIcon = document.querySelector(".password-visible");
    const hidePasswordIcon = document.querySelector(".password-hidden");
    const passwordInput = document.querySelector(".password-input");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordIcon.style.display = "block";
        hidePasswordIcon.style.display = "none";
    } else {
        passwordInput.type = "password";
        showPasswordIcon.style.display = "none";
        hidePasswordIcon.style.display = "block";
    }
}

function confirmLogin() {
    const emailInput = document.querySelector(".email-input");
    const passwordInput = document.querySelector(".password-input");

    if (!emailInput.value || !passwordInput.value) {
        emailInput.style.outline = "2px solid rgb(127, 20, 20)";
        passwordInput.style.outline = "2px solid rgb(127, 20, 20)";
    } else {
        emailInput.style.outlineColor = "rgba(0, 0, 0, 20%)";
        passwordInput.style.outlineColor = "rgba(0, 0, 0, 20%)";
    }

    if (!emailInput.value.includes("@")) {
        emailInput.style.outlineColor = "2px solid rgb(127, 20, 20)";
    } else {
        emailInput.style.outlineColor = "rgba(0, 0, 0, 20%)";
    }

    // if (!isValidPassword()) {
    //     passwordInput.style.outline = "2px solid rgb(127, 20, 20)";
    // }
}

// function isValidPassword() {
//     const passwordInput = document.querySelector(".password-input");

//     if (passwordInput.value.length > 8) { return true }
//     if (passwordInput.value.includes("!")) { return true }

//     return false;
// }

function showConfirmPassword() {
    const showPasswordIcon = document.querySelector(".confirm-password-visible");
    const hidePasswordIcon = document.querySelector(".confirm-password-hidden");
    const passwordInput = document.querySelector(".confirm-password-input");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordIcon.style.display = "block";
        hidePasswordIcon.style.display = "none";
    } else {
        passwordInput.type = "password";
        showPasswordIcon.style.display = "none";
        hidePasswordIcon.style.display = "block";
    }
}

function confirmSignUp() {
    const fullNameInput = document.querySelector(".full-name-input");
    const mobileNumberInput = document.querySelector(".mobile-number-input");
    const emailInput = document.querySelector(".email-input");
    const passwordInput = document.querySelector(".password-input");
    const confirmPasswordInput = document.querySelector(".confirm-password-input");

    if (!fullNameInput.value || !mobileNumberInput.value || !emailInput.value || !passwordInput.value || !confirmPasswordInput.value) {
        fullNameInput.style.outline = "2px solid rgb(127, 20, 20)";
        mobileNumberInput.style.outline = "2px solid rgb(127, 20, 20)";
        emailInput.style.outline = "2px solid rgb(127, 20, 20)";
        passwordInput.style.outline = "2px solid rgb(127, 20, 20)";
        confirmPasswordInput.style.outline = "2px solid rgb(127, 20, 20)";
    } else {
        fullNameInput.style.outline = "rgba(0, 0, 0, 20%)";
        mobileNumberInput.style.outline = "rgba(0, 0, 0, 20%)";
        emailInput.style.outline = "rgba(0, 0, 0, 20%)";
        passwordInput.style.outline = "rgba(0, 0, 0, 20%)";
        confirmPasswordInput.style.outline = "rgba(0, 0, 0, 20%)";
    }

    if (!emailInput.value.includes("@")) {
        emailInput.style.outlineColor = "2px solid rgb(127, 20, 20)";
    } else {
        emailInput.style.outlineColor = "rgba(0, 0, 0, 20%)";
    }
}