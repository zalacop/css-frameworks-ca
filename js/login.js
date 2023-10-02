import { loginUser } from "./authClient.js";

const loginForm = document.querySelector("#login_form");
const loginEmail = document.querySelector("#login_email");
const loginPassword = document.querySelector("#login_password");


function processLoginUser(event) {
    event.preventDefault();

    const loggedInUser = loginUser(loginEmail.value, loginPassword.value);

    window.location.replace("/profile/index.html");

}

loginForm.addEventListener("submit", processLoginUser);