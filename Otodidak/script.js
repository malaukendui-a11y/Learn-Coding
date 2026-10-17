const loginForm = document.querySelector("#login-form");
const signupForm = document.querySelector("#signup-form");
const loginHeading = document.querySelector("#login-heading");
const signupHeading = document.querySelector("#signup-heading");
const loginSwitch = document.querySelector("#login-switch");
const signupSwitch = document.querySelector("#signup-switch");
const feedback = document.querySelector("#feedback");

function showMode(mode) {
    const isSignup = mode === "signup";

    loginForm.hidden = isSignup;
    signupForm.hidden = !isSignup;
    loginHeading.hidden = isSignup;
    signupHeading.hidden = !isSignup;
    loginSwitch.hidden = isSignup;
    signupSwitch.hidden = !isSignup;
    feedback.textContent = "";
}

document.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
    showMode(button.dataset.mode);
    });
});

document.querySelectorAll("[data-password-toggle]").forEach((button) => {
button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.passwordToggle);
    const isVisible = input.type === "password";

    input.type = isVisible ? "text" : "password";
    button.textContent = isVisible ? "Hide" : "Show";
    button.setAttribute(
        "aria-label",
        `${isVisible ? "Hide" : "Show"} password`
        );
    });
});

const signupPassword = document.querySelector("#signup-password");
const confirmPassword = document.querySelector("#confirm-password");

function checkPasswordsMatch() {
const passwordsDoNotMatch =
    confirmPassword.value !== "" &&
    confirmPassword.value !== signupPassword.value;

    confirmPassword.setCustomValidity(
    passwordsDoNotMatch ? "Passwords do not match." : ""
    );
}

signupPassword.addEventListener("input", checkPasswordsMatch);
confirmPassword.addEventListener("input", checkPasswordsMatch);

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    feedback.textContent =
    "Demo only: sign-in is not connected to a server yet.";
});

signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    feedback.textContent =
    "Demo only: account creation is not connected to a server yet.";
});

document.querySelector("#forgot-password").addEventListener("click", () => {
feedback.textContent =
    "Password reset is not connected to a server yet.";
});

const welcomeScreen = document.querySelector("#welcome-screen");
const authCard = document.querySelector("#auth-card");
const welcomeFeedback = document.querySelector("#welcome-feedback");

document.querySelectorAll("[data-open-form]").forEach((button) => {
button.addEventListener("click", () => {
    welcomeScreen.hidden = true;
    authCard.hidden = false;
    showMode(button.dataset.openForm);
    });
});

document.querySelectorAll("[data-social]").forEach((button) => {
button.addEventListener("click", () => {
    welcomeFeedback.textContent =
    `${button.dataset.social} sign-in belum dihubungkan.`;
    });
});