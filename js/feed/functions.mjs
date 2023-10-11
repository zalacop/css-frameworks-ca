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

// export async function getPosts() {
//     try {
//         const getRequest = await getMethod();

//         const response = await fetch(urlPosts, getRequest);
//         const posts = await response.json();

//         const allPosts = mapPosts(posts);

//         return allPosts;
//     } catch (error) {
//         console.log(error);
//     }
// }
// getPosts();

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
            const postLink = document.createElement("div");
            postLink.addEventListener("click", () => {
               window.location.replace(`/feed/post.html?post=${post.id}`
            )});
            const postCard = createHTML(post);
           postLink.appendChild(postCard);
           postHTML.appendChild(postLink);
           return postLink
        });

        createPostsHTML.forEach((post) => {
            return postHTML.appendChild(post);

        });

        return allPosts;
    } catch (error) {
        console.log(error);
    }
}

export async function withImageFilter() {
    try {
        postHTML.innerHTML = "";
        const posts = await filterAndDisplayPosts("");
        console.log(posts)

        const filterPostsWithImage = await posts.filter(post => post.image !== null && post.image !== "");

        console.log(filterPostsWithImage)

        const postsWithImageHTML = filterPostsWithImage.map((post) => {
            const html = createHTML(post);
            return postHTML.appendChild(html);
        })

        postsWithImageHTML.forEach((html) => {
            return postHTML.appendChild(html);
        })
        console.log(postsWithImageHTML)
    } catch (error) {
        console.log(error);
    }
}