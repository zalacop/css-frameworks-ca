import { urlLogin, urlRegister} from "./imports/url.js";

export async function registerUser(userRegisterData) {
    try {
        const registerData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userRegisterData),
        }
        const response = await fetch(urlRegister, registerData);
        const data = await response.json();
        console.log(data);
        return response
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