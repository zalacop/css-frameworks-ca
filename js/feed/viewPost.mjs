import { urlPosts } from "../imports/url.mjs";
import { getMethod } from "../imports/request-methods/get.mjs";
import { addNewPost } from "./createPost.mjs";
import { deletePost } from "./deletePost.mjs";

const postHTML = document.querySelector("#post_container");
const postButton = document.querySelector("#post_btn");
const title = document.querySelector("#post_title");
const body = document.querySelector("#post_body");
const image = document.querySelector("#post_image");
const deleteButton = document.querySelector("#deleteBtn");

const postContainer = document.querySelector("#postContainer");
const postCard = document.querySelector("#postCard");
const postContent = document.querySelector("#postContent");
const interactDiv = document.querySelector("#interactDiv");

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

        function singlePostHTML() {
            if(postStructure.image !== null && postStructure.image !== "" && postStructure.image !== undefined) {
                image.src = postStructure.image;
            }
            
            title.innerText= postStructure.title;
            postContent.appendChild(title);

            body.innerText = postStructure.text;
            postContent.appendChild(body);
            postContent.appendChild(interactDiv);
            postCard.appendChild(postContent);
            postContainer.appendChild(postCard);
            return postContainer;
        }
        singlePostHTML()
        postHTML.classList.add("mt-5");
    } catch (error) {
        console.log(error);
    }
}

findPost();

deleteButton.addEventListener("click", deletePost);
