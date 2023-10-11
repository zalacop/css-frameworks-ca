import { urlPosts } from "../imports/url.mjs";
import { getMethod } from "../imports/request-methods/get.mjs";
import createHTML from "../imports/postCard.mjs";
import mapPosts from "./allPosts.mjs";

const postHTML = document.querySelector("#post_container");

// export async function jokeFilterPosts() {
//     try {
//         const getRequest = await getMethod();

//         postHTML.innerHTML = "";

//         const jokeUrl = urlPosts + "?_tag=joke";
//         const response = await fetch(jokeUrl, getRequest);
//         const jokePosts = await response.json();

//         const allJokePosts = mapPosts(jokePosts);

//         const createJokeHTML = allJokePosts.map((post) => {
//           return createHTML(post);
//         });
        
//         createJokeHTML.forEach((post) => {
//             return postHTML.appendChild(post);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

// export async function dogFilterPosts() {
//     try {
//         const getRequest = await getMethod();

//         postHTML.innerHTML = "";

//         const dogUrl = urlPosts + "?_tag=dog";
//         const response = await fetch(dogUrl, getRequest);
//         const dogPosts = await response.json();

//         const allDogPosts = mapPosts(dogPosts);

//         const createDogHTML = allDogPosts.map((post) => {
//           return createHTML(post);
//         });
        
//         createDogHTML.forEach((post) => {
//             return postHTML.appendChild(post);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

export async function filterAndDisplayPosts(tag) {
    try {
        const getRequest = await getMethod();

        postHTML.innerHTML = "";
    
        const url = urlPosts + `?_tag=${tag}`;

        const response = await fetch(url, getRequest);
        const posts = await response.json();


        const allPosts = mapPosts(posts);

        const createPostsHTML = allPosts.map((post) => {
            return createHTML(post);
        });

        createPostsHTML.forEach((post) => {
            return postHTML.appendChild(post);
        });
    } catch (error) {
        console.log(error);
    }
}