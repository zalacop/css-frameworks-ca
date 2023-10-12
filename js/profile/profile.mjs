import { displayPosts } from "../feed/functions.mjs";

const search = document.querySelector("#search");
const searchIcon = document.querySelector(".fa-magnifying-glass");

search.addEventListener("keypress", () => displayPosts(search.value));
searchIcon.addEventListener("click", () => displayPosts(search.value));
