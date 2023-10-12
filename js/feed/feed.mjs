import { displayPosts, withImageFilter } from "./functions.mjs";
import {addNewPost} from "./createPost.mjs";


// const postHTML = document.querySelector("#post_container");
const allFilter = document.querySelector("#all");
const jokeFilter = document.querySelector("#joke");
const dogFilter = document.querySelector("#dog");
const withImageFilterHTML = document.querySelector("#withImage");
const postButton = document.querySelector("#post_btn");


displayPosts("");

allFilter.addEventListener("click", () => displayPosts(""))
jokeFilter.addEventListener("click", () => displayPosts("joke"));
dogFilter.addEventListener("click",  () => displayPosts("dog"));
withImageFilterHTML.addEventListener("click", withImageFilter);


postButton.addEventListener("click", (event) => addNewPost(event));