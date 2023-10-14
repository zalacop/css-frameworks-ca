import { displayPosts } from "../feed/functions.mjs";
import logOut from "../logOut.mjs";

const search = document.querySelector("#search");
const searchIcon = document.querySelector(".fa-magnifying-glass");
const logOutButton = document.querySelector("#logOut");

search.addEventListener("keypress", () => displayPosts(search.value));
searchIcon.addEventListener("click", () => displayPosts(search.value));

logOutButton.addEventListener('click', logOut);