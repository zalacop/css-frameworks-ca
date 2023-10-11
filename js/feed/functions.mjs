import { urlPosts } from "../imports/url.mjs";
import { getMethod } from "../imports/request-methods/get.mjs";
import createHTML from "../imports/postCard.mjs";


const postHTML = document.querySelector("#post_container");

function mapPosts(posts) {
    return posts.map((post) => ({
            "id": post.id,
            "image": post.media!== null && post.media !== '' ? post.media : null,
            "title": post.title,
            "text": post.body,
            "tags": post.tags
        }))
}

async function fetchAndFilterPosts(tag) {
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
        return allPosts;
    } catch (error) {
        console.log(error);
    }
}

export async function displayPosts(tag) {
    try {
    postHTML.innerHTML = "";
    const getPosts = await fetchAndFilterPosts(tag);

    const createPostsHTML = getPosts.map((post) => {
        const postLink = document.createElement("div");
        postLink.addEventListener("click", () => {
           window.location.replace(`/feed/post.html?post=${post.id}`
        )});
        const postCard = createHTML(post);
        postLink.appendChild(postCard);
        postHTML.appendChild(postLink);
        return postLink;
    });

    createPostsHTML.forEach((post) => {
        return postHTML.appendChild(post);
    });
    } catch(error) {
        console.log(error)
    }
}

export async function withImageFilter() {
    try {
        postHTML.innerHTML = "";
        const posts = await fetchAndFilterPosts("");
        
        const filterPostsWithImage = await posts.filter(post => post.image !== null && post.image !== "");

        const postsWithImageHTML = filterPostsWithImage.map((post) => {
            const postLink = document.createElement("div");
            postLink.addEventListener("click", () => {
            window.location.replace(`/feed/post.html?post=${post.id}`
            )});
            const postCard = createHTML(post);
            postLink.appendChild(postCard);
            postHTML.appendChild(postLink);
            return postLink;
        });

        postsWithImageHTML.forEach((html) => {
            return postHTML.append(html);
        });
    } catch (error) {
        console.log(error);
    }
}