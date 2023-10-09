import { urlPosts } from "../imports/url.mjs";
import { getMethod } from "../imports/request-methods/get.mjs";
import postCard from "../imports/postCard.mjs";

async function getPosts() {
    try {
        const getRequest = await getMethod();

        const response = await fetch(urlPosts, getRequest);
        const posts = await response.json();

        const allPosts = posts.map((post) => {
            const postInfo = {
                "id": post.id,
                "image": post.media,
                "title": post.title,
                "text": post.body
            }
            return postInfo;
        });

        return allPosts;
    } catch (error) {
        console.log(error);
    }
}
getPosts()

const postHTML = document.querySelector("#post_container");

async function postsHTML() {
    const posts = await getPosts();

    const createPostHTML = posts.map((post) => {
        const html = postCard(post);
        return postHTML.appendChild(html);
    })
    
}
postsHTML();

