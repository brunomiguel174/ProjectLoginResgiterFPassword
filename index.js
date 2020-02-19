/* catch the DOM */

const container = document.getElementById("container");

const signUpButton = document.getElementById("signUp");

const input_signIn = document.getElementById("input--signIn");

const input_signUp = document.getElementById("input--signUp");

const signInButton = document.getElementById("signIn");

const inputEmailIn = document.getElementById("inputEmailIn");

const inputPasswordIn = document.getElementById("inputPasswordIn");

const formWarningSignIn = document.getElementById("form--warningSignIn");

const input__emailSignUp = document.getElementById("input--emailSignUp");

const input__passwordSignUp = document.getElementById("input--passwordSignUp");

const input__repeatPasswordSignUp = document.getElementById("input--repeatPasswordSignUp");

const formWarningSignUp = document.getElementsByClassName("form--warningSignUp")[0];

const form__warningPassword = document.getElementsByClassName("form--warningPassword")[0];

const header = document.querySelector("header");

/* catch the DOM */

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');

    header.classList.add("change--colorHeader");

    formWarningSignIn.classList.remove("appear--warning");

    formWarningSignIn.textContent = "";

    inputPasswordIn.value = "";

    input__emailSignUp.value = inputEmailIn.value;

    setTimeout(() => {
        header.classList.remove("change--colorHeader");
    }, 1000);
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');

    header.classList.remove("change--colorHeader");

    formWarningSignUp.textContent = "";

    form__warningPassword.textContent = "";

    form__warningPassword.classList.remove("appear--warning");

    formWarningSignUp.classList.remove("appear--warning");

    input__passwordSignUp.value = "";

    input__repeatPasswordSignUp.value = "";

    header.classList.add("change--colorHeader");

    setTimeout(() => {
        header.classList.remove("change--colorHeader");
    }, 1000);
});


input_signIn.addEventListener('click',
    (event) => {
        event.preventDefault();

        if (inputEmailIn.value.trim() === "" || inputPasswordIn.value.trim() === "") {
            formWarningSignIn.classList.add("appear--warning");

            formWarningSignIn.textContent = "⚠️ All fields are required";
 
        }
        else {
            inputEmailIn.style.outline = "none";
            inputPasswordIn.style.outline = "none";

            formWarningSignIn.textContent = "";
            formWarningSignIn.classList.remove("appear--warning");
        }
    });

input_signUp.addEventListener('click',
    (event) => {
        event.preventDefault();

        if (input__emailSignUp.value.trim() === "" || input__passwordSignUp.value.trim() === "" || input__repeatPasswordSignUp.value.trim() === "") {
            formWarningSignUp.textContent = "⚠️ All fields are required";

            formWarningSignUp.classList.add("appear--warning");

            form__warningPassword.innerHTML = "";

            form__warningPassword.classList.remove("appear--warning");                

        } else if (inputEmailIn.value.trim() !== "" || input__passwordSignUp.value.trim() !== input__repeatPasswordSignUp.value.trim()) {
            formWarningSignUp.textContent = "";

            formWarningSignUp.classList.remove("appear--warning")

            form__warningPassword.classList.add("appear--warning");

            form__warningPassword.textContent = "Passwords don't match❗️";
        }
        else {
            formWarningSignUp.textContent = "";

            form__warningPassword.textContent = "";
        }
    });


