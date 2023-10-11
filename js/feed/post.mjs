import { urlPosts } from "../imports/url.mjs";
import { getMethod } from "../imports/request-methods/get.mjs";
import { singlePostHTML } from "../imports/postCard.mjs";

const postHTML = document.querySelector("#post_container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("post");

const postURL = urlPosts + "/" + id;

async function findPost() {
    try {
        const getRequest = await getMethod();
        const response = await fetch(postURL, getRequest);
        const post = await response.json();

        const postStructure = {
            "id": post.id,
            "image": post.media,
            "title": post.title,
            "text": post.body,
            "tags": post.tags
        };

        const html = singlePostHTML(postStructure);
        postHTML.appendChild(html);
        postHTML.classList.add("mt-5");
    } catch (error) {
        console.log(error);
    }
}

findPost()