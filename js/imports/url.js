// creating the API url
const host = "https://api.noroff.dev/api/v1";
const socialEndpoints = "/social";
const authentication = "/auth";
const register = "/register";
const login = "/login";
const profile = "/profiles";
const post = "/posts";

export const urlLogin = host + socialEndpoints + authentication + login;
export const urlRegister = host + socialEndpoints + authentication + register;
export const urlProfile = host + socialEndpoints + profile;
export const urlPost = host + socialEndpoints + post;
