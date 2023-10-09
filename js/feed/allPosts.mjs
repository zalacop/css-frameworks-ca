import { urlPosts } from "../imports/url.mjs";
import { getMethod } from "../imports/request-methods/get.mjs";

export async function getPosts() {
    try {
        const getRequest = await getMethod();

        const response = await fetch(urlPosts, getRequest);
        const posts = await response.json();

        const allPosts = posts.map((post) => {
            const postInfo = {
                "id": post.id,
                "image": post.media,
                "title": post.title,
                "text": post.body,
                "tags": post.tags
            }
            return postInfo;
        });

        return allPosts;
    } catch (error) {
        console.log(error);
    }
}
getPosts();
