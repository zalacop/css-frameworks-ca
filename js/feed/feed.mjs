import { displayPosts, withImageFilter } from "./functions.mjs";
import { addNewPost } from "./createPost.mjs";
import logOut from "../logOut.mjs";

const allFilter = document.querySelector("#all");
const jokeFilter = document.querySelector("#joke");
const dogFilter = document.querySelector("#dog");
const withImageFilterHTML = document.querySelector("#withImage");
const postButton = document.querySelector("#post_btn");

const search = document.querySelector("#search");
const searchIcon = document.querySelector(".fa-magnifying-glass");
const logOutButton = document.querySelector("#logOut");


displayPosts("");

search.addEventListener("keypress", () => displayPosts(search.value));
searchIcon.addEventListener("click", () => displayPosts(search.value));

allFilter.addEventListener("click", () => displayPosts(""))
jokeFilter.addEventListener("click", () => displayPosts("joke"));
dogFilter.addEventListener("click",  () => displayPosts("dog"));
withImageFilterHTML.addEventListener("click", withImageFilter);


postButton.addEventListener("click", (event) => addNewPost(event));

logOutButton.addEventListener('click', logOut);