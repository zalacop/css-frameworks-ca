import { urlPosts } from "../imports/url.mjs";
import { getMethod } from "../imports/request-methods/get.mjs";
import { editPost } from "../feed/edit.mjs";
import { deletePost } from "./deletePost.mjs";

const postHTML = document.querySelector("#post_container");
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
        postHTML.classList.add("mt-5");
    } catch (error) {
        console.log(error);
    }
}

findPost();


const imgSrc = document.getElementById("post_image").getAttribute("src");

editBtn.addEventListener("click", () => {
    const request =  {
        title: title.innerText,
        body: body.innerText,
        media: imgSrc
    }
    console.log(request)
    editPost(request);
})
        
deleteButton.addEventListener("click", deletePost);
