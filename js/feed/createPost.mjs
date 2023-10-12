import { postMethod } from "../imports/request-methods/post.mjs";
import { urlPosts } from "../imports/url.mjs";

const title = document.querySelector("#post_title");
const body = document.querySelector("#post_body");
const image = document.querySelector("#post_image");

const postHTML = document.querySelector("#post_container");

async function newPost() {
    const postData = {
        title: title.value,
        body: body.value,
        media: image.value
    };

    console.log(postData)

    try {
        const postRequest = await postMethod(postData);
        const response = await fetch(urlPosts, postRequest);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

export async function addNewPost(event) {
    event.preventDefault();
    const response = await newPost();
    const id = response.id;
    console.log(response)

    const newPostData = {
        title: title.value = '',
        body: body.value = '',
        image: image.value = ''
    }
    window.location.replace(`/feed/post.html?post=${id}`);
}

