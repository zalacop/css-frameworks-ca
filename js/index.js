import { urlLogin, urlRegister, host, socialEndpoints, authentication, login, register } from "./imports/url";

async function registerUser(urlRegister, userRegisterData) {
    try {
        const registerData = {
            method: 'POST',
            body: JSON.stringify(userRegisterData),
            header: {
                'Content-type': 'application/json',
            }
        }
        const response = await fetch(urlRegister, registerData);
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}

async function loginUser() {
    try {
        const loginData = {

        }

    } catch (error) {
        console.log(error);
    }
}