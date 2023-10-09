import { urlPosts } from "../imports/url.mjs";
import { getMethod } from "../imports/request-methods/get.mjs";
import createHTML from "../imports/postCard.mjs";

const postHTML = document.querySelector("#post_container");

export async function jokeFilterPosts() {
    try {
        const getRequest = await getMethod();

        postHTML.innerHTML = "";

        const jokeUrl = urlPosts + "?_tag=joke";
        const response = await fetch(jokeUrl, getRequest);
        const jokePosts = await response.json();

        const allJokePosts = jokePosts.map((post) => {
            const postInfo = {
                "id": post.id,
                "image": post.media,
                "title": post.title,
                "text": post.body,
                "tags": post.tags
            }
            return postInfo;
        });

        const createJokeHTML = allJokePosts.map((post) => {
          return createHTML(post);
        });
        
        createJokeHTML.forEach((post) => {
            return postHTML.appendChild(post);
        });
    } catch (error) {
        console.log(error);
    }
}