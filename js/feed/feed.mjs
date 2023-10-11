import { getPosts, filterAndDisplayPosts } from "./allPosts.mjs";
import createHTML from "../imports/postCard.mjs";

const postHTML = document.querySelector("#post_container");
const allFilter = document.querySelector("#all");
const jokeFilter = document.querySelector("#joke");
const dogFilter = document.querySelector("#dog");
const withImageFilter = document.querySelector("#withImage");

filterAndDisplayPosts("");



async function withImageFilterHTML() {
        postHTML.innerHTML = "";
        const posts = await filterAndDisplayPosts("");

        console.log(posts)

        const filterPostsWithImage = posts.filter(post => post.image !== null && post.image !== "");

        console.log(filterPostsWithImage)
 
        const postsWithImageHTML = filterPostsWithImage.map((post) => {
            const html = createHTML(post);
            return postHTML.appendChild(html);
        })
        console.log(postsWithImageHTML)
}

allFilter.addEventListener("click", () => filterAndDisplayPosts(""))
jokeFilter.addEventListener("click", () => filterAndDisplayPosts("joke"));
dogFilter.addEventListener("click",  () => filterAndDisplayPosts("dog"));
withImageFilter.addEventListener("click", withImageFilterHTML);
