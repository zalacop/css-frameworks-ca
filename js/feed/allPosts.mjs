import { urlPosts } from "../imports/url.mjs";
import { getMethod } from "../imports/request-methods/get.mjs";
import createHTML from "../imports/postCard.mjs";

export default function mapPosts(posts) {
    return posts.map((post) => ({
            "id": post.id,
            "image": post.media,
            "title": post.title,
            "text": post.body,
            "tags": post.tags
        }))
}



const postHTML = document.querySelector("#post_container");

export async function filterAndDisplayPosts(tag) {
    try {
        const getRequest = await getMethod();

        postHTML.innerHTML = "";

        function buildUrl(tag) {
            if(tag === null && tag === "") {
                return urlPosts;
            } else {
                return urlPosts + `?_tag=${tag}`;
            }
        }

        const url = buildUrl(tag);

        const response = await fetch(url, getRequest);
        const posts = await response.json();

        const allPosts = mapPosts(posts);

        const createPostsHTML = allPosts.map((post) => {
            return createHTML(post);
        });

        createPostsHTML.forEach((post) => {
            return postHTML.appendChild(post);
        });

        return allPosts;
    } catch (error) {
        console.log(error);
    }
}

