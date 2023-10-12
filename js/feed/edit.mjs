import { urlPosts } from "../imports/url.mjs";
import { putMethod } from "../imports/request-methods/put.mjs";


const title = document.querySelector("#post_title");
const body = document.querySelector("#post_body");
const image = document.querySelector("#post_image");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("post");

const postURL = urlPosts + "/" + id;


export async function editPost(data) {
    try {
        console.log(data)
        const putRequest = await putMethod(data);
        const response = await fetch(postURL, putRequest);
        const json = await response.json();
        console.log(json)

    } catch (error) {
        console.log(error);
    }
}
