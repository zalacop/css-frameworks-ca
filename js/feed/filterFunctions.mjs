import { urlPosts } from "../imports/url.mjs";
import { getMethod } from "../imports/request-methods/get.mjs";
import createHTML from "../imports/postCard.mjs";
import mapPosts from "./allPosts.mjs";

const postHTML = document.querySelector("#post_container");

export async function filterAndDisplayPosts(tag) {
    try {
        const getRequest = await getMethod();

        postHTML.innerHTML = "";
    
        const url = urlPosts + `?_tag=${tag}`;

        const response = await fetch(url, getRequest);
        const posts = await response.json();


        const allPosts = mapPosts(posts);

        const createPostsHTML = allPosts.map((post) => {
            return createHTML(post);
        });

        createPostsHTML.forEach((post) => {
            return postHTML.appendChild(post);
        });
    } catch (error) {
        console.log(error);
    }
}