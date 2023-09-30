import { urlLogin, urlRegister} from "./imports/url.js";

async function registerUser(userRegisterData) {
    try {
        const registerData = {
            method: 'POST',
            header: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userRegisterData),
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