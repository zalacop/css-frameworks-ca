import { postMethod } from "../imports/request-methods/post.mjs";
import { urlPosts } from "../imports/url.mjs";

const title = document.querySelector("#post_title");
const body = document.querySelector("#post_body");
const image = document.querySelector("#post_image");
const postButton = document.querySelector("#post_btn");

const postHTML = document.querySelector("#post_container");

export default async function newPost() {
    const postData = {
        title: title.value,
        body: body.value,
        media: image.value
    };

    try {
        const postRequest = await postMethod(postData);
        const response = await fetch(urlPosts, postRequest);
        const json = await response.json();
        console.log(json)

    } catch (error) {
        console.log(error);
    }
}

async function addNewPost(event) {
    event.preventDefault();
    await newPost();
    const newPostData = {
        title: title.value = '',
        body: body.value = '',
        image: image.value = ''
    }
    postHTML.innerHTML = ""
}

postButton.addEventListener("click", addNewPost);