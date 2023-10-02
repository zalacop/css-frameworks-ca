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
        return data;

    } catch (error) {
        console.log(error);
    }
}

export async function loginUser(email, password) {
    try {
        const loginInfo = {
            email: email,
            password: password
        }

        const loginData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginInfo),
        }

        const response = await fetch(urlLogin, loginData);
        const data = await response.json();
        console.log(data);
        const accessToken = data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        console.log(accessToken);


    } catch (error) {
        console.log(error);
    }
}