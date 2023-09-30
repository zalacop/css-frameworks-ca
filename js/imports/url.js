// creating the API url
export const host = "https://api.noroff.dev/api/v1";
export const socialEndpoints = "/social";
export const authentication = "/auth";
export const register = "/register";
export const login = "/login";
export const profile = "/profiles";
export const post = "/posts";

export const urlLogin = host + socialEndpoints + authentication + login;
export const urlRegister = host + socialEndpoints + authentication + register;
export const urlProfile = host + socialEndpoints + profile;
export const urlPost = host + socialEndpoints + post;

