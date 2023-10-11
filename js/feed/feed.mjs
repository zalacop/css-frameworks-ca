import { displayPosts, withImageFilter } from "./functions.mjs";


const postHTML = document.querySelector("#post_container");
const allFilter = document.querySelector("#all");
const jokeFilter = document.querySelector("#joke");
const dogFilter = document.querySelector("#dog");
const withImageFilterHTML = document.querySelector("#withImage");


displayPosts("");


allFilter.addEventListener("click", () => displayPosts(""))
jokeFilter.addEventListener("click", () => displayPosts("joke"));
dogFilter.addEventListener("click",  () => displayPosts("dog"));
withImageFilterHTML.addEventListener("click", withImageFilter);