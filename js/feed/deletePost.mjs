import { urlPosts } from "../imports/url.mjs";
import { deleteMethod } from "../imports/request-methods/delete.mjs";

const postHTML = document.querySelector("#post_container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("post");

const postURL = urlPosts + "/" + id;

const deleteButton = document.querySelector("#deleteBtn");

export async function deletePost() {
    try {
        const deleteRequest = await deleteMethod();
        const response = await fetch(postURL, deleteRequest);
        const json = await response.json();

        if(response.ok) {
            window.location.replace("/feed/index.html");
        } else {
            console.log("You can't delete this post!");
            alert("You can't delete this post!");
        }
    } catch (error) {
        console.log(error);
    }
}
