import { getSinglePost } from "../imports/request-methods/get.mjs"
import { deletePost } from "./deletePost.mjs";
import { displayPosts } from "./functions.mjs";

const postHTML = document.querySelector("#post_container");
postHTML.classList.add("mt-5");

const title = document.querySelector("#post_title");
const body = document.querySelector("#post_body");
const image = document.querySelector("#post_image");

const editBtn = document.querySelector("#editBtn");
const deleteButton = document.querySelector("#deleteBtn");

const postContainer = document.querySelector("#postContainer");
const postCard = document.querySelector("#postCard");
const postContent = document.querySelector("#postContent");
const interactDiv = document.querySelector("#interactDiv");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("post");


async function singlePostHTML() {
    const postStructure = await getSinglePost(id);

    title.innerText= postStructure.title;
    postContent.appendChild(title);

    body.innerText = postStructure.text;
    postContent.appendChild(body);
    postContent.appendChild(interactDiv);
    postCard.appendChild(postContent);
    postContainer.appendChild(postCard);

    if(postStructure.image !== null && postStructure.image !== "") {
        image.src = postStructure.image;
        
        postCard.appendChild(image);
        postCard.appendChild(postContent);
        postContainer.appendChild(postCard);
    } else {
        image.src = "";
    }
}
singlePostHTML()

editBtn.addEventListener("click", () => {
    window.location.replace(`/feed/edit.html?post=${id}`);
})     
deleteButton.addEventListener("click", deletePost);

const search = document.querySelector("#search");
const searchIcon = document.querySelector(".fa-magnifying-glass");

search.addEventListener("keypress", () => displayPosts(search.value));
searchIcon.addEventListener("click", () => displayPosts(search.value));

