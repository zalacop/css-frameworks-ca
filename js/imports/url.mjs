// creating the API url
const base = "https://api.noroff.dev/api/v1";
const socialEndpoints = "/social";
const authentication = "/auth";
const register = "/register";
const login = "/login";
const profile = "/profiles";
const posts = "/posts";

export const urlLogin = base + socialEndpoints + authentication + login;
export const urlRegister = base + socialEndpoints + authentication + register;
export const urlProfile = base + socialEndpoints + profile;
export const urlPosts = base + socialEndpoints + posts;
