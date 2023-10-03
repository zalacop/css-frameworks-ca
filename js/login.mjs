import { loginUser, registerUser } from "./authClient.mjs";
import { validateRegistration } from "./registration.mjs";

const registerForm = document.querySelector("#register_form");
const registerEmail = document.querySelector("#register_email");
const username = document.querySelector("#username");
const registerPassword = document.querySelector("#register_password");

function validateAndRegisterUser(event) {
    event.preventDefault();

    if(validateRegistration()) {
        // if it returns true, call the api to register a user
        const user = {
            name: username.value,
            email: registerEmail.value,
            password: registerPassword.value
        }

        const registeredUser = registerUser(user);

        window.location.replace("/profile/index.html");
    } else {
        console.log(error);
    }
}

registerForm.addEventListener("submit", validateAndRegisterUser);

const loginForm = document.querySelector("#login_form");
const loginEmail = document.querySelector("#login_email");
const loginPassword = document.querySelector("#login_password");


async function processLoginUser(event) {
    event.preventDefault();

    const loggedInUser = await loginUser(loginEmail.value, loginPassword.value);

    if(loggedInUser) {
       window.location.replace("/profile/index.html"); 
    } else {
        console.log("Login failed");
    }
}

loginForm.addEventListener("submit", processLoginUser);