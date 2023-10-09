import { getPosts } from "./allPosts.mjs";
import { jokeFilterPosts } from "../feed/filterFunctions.mjs";
import createHTML from "../imports/postCard.mjs";

const postHTML = document.querySelector("#post_container");

async function postsHTML() {
    const posts = await getPosts();

    const createPostHTML = posts.map((post) => {
        const html = createHTML(post);
        return postHTML.appendChild(html);
    })
}
postsHTML();

const allFilter = document.querySelector("#all");

async function allFilterHTML() {
    try {
        postHTML.innerHTML = "";
        const getRequest = await postsHTML();
        return getRequest;
    } catch (error) {
        console.log(error);
    }
}
allFilter.addEventListener("click", allFilterHTML);

const jokeFilter = document.querySelector("#joke");
jokeFilter.addEventListener("click", jokeFilterPosts);