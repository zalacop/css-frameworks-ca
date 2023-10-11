import { filterAndDisplayPosts, withImageFilter } from "./allPosts.mjs";
// import createHTML from "../imports/postCard.mjs";

const postHTML = document.querySelector("#post_container");
const allFilter = document.querySelector("#all");
const jokeFilter = document.querySelector("#joke");
const dogFilter = document.querySelector("#dog");
const withImageFilterHTML = document.querySelector("#withImage");

// async function postsHTML() {
//     const posts = await getPosts();

//     const createPostHTML = posts.map((post) => {
//         const html = createHTML(post);
//         return postHTML.appendChild(html);
//     })
// }
// postsHTML();

// const withImageFilter = document.querySelector("#withImage");

// async function withImageFilterHTML() {
//     try {
//         postHTML.innerHTML ="";
//         const posts = await getPosts();

//         const filterPostsWithImage = posts.filter(post => post.image !== null && post.image !== "");

//         const postsWithImageHTML = filterPostsWithImage.map((post) => {
//             const html = createHTML(post);
//             return postHTML.appendChild(html);
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// withImageFilter.addEventListener("click", withImageFilterHTML);

filterAndDisplayPosts("");


// async function withImageFilter() {
//     try {
//         postHTML.innerHTML = "";
//         const posts = await filterAndDisplayPosts("");
//         console.log(posts)

//         const filterPostsWithImage = await posts.filter(post => post.image !== null && post.image !== "");

//         console.log(filterPostsWithImage)

//         const postsWithImageHTML = filterPostsWithImage.map((post) => {
//             const html = createHTML(post);
//             return postHTML.appendChild(html);
//         })
//         console.log(postsWithImageHTML)
//     } catch (error) {
//         console.log(error);
//     }
// }

allFilter.addEventListener("click", () => filterAndDisplayPosts(""))
jokeFilter.addEventListener("click", () => filterAndDisplayPosts("joke"));
dogFilter.addEventListener("click",  () => filterAndDisplayPosts("dog"));
withImageFilterHTML.addEventListener("click", withImageFilter);
