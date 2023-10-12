import { urlPosts } from "../imports/url.mjs";
import { putMethod } from "../imports/request-methods/put.mjs";
import { displayPosts } from "./functions.mjs";

const title = document.querySelector("#post_title");
const body = document.querySelector("#post_body");
const image = document.querySelector("#post_image")
const tags = document.querySelector("#post_tags");

const updateBtn = document.querySelector("#updateBtn");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("post");

const postURL = urlPosts + "/" + id;

export async function editPost(data) {
    try {
        const putRequest = await putMethod(data);
        const response = await fetch(postURL, putRequest);
        const json = await response.json();

        if(response.ok) {
            window.location.replace(`/feed/post.html?post=${id}`);
        } else {
            console.log("You can't update this post!");
        }

    } catch (error) {
        console.log(error);
    }
}

updateBtn.addEventListener("click", () => {
    const request =  {
        title: title.value,
        body: body.value,
        media: image.value,
        tags: tags.value.split(",")
    }
    editPost(request);
})

const search = document.querySelector("#search");
const searchIcon = document.querySelector(".fa-magnifying-glass");

search.addEventListener("keypress", () => displayPosts(search.value));
searchIcon.addEventListener("click", () => displayPosts(search.value));

