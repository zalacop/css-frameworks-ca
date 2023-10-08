import { urlPosts } from "../imports/url.mjs";
import { getMethod } from "../imports/request-methods/get.mjs";

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
        })

        return allPosts;
    } catch (error) {
        console.log(error);
    }
}


const postContainer = document.querySelector("#post_container");

async function postsHTML() {
    const posts = await getPosts();

    const createHTML = posts.map((singlePost) => {
        return ` <div class="container post card mb-3">
                    <div class="row" >
                        <img src="${singlePost.image}" class="col-sm w-50 m-auto mt-2">
                        <div class="col-sm col-md-3 card-body">
                            <p class="fst-italic fw-lighter fs-6 mt-0 card-header mb-3">Post by Unknown author</p>
                            <h5 class="fs-5">${singlePost.title}</h5>
                            <p class="fs-6">${singlePost.text}</p>
                            <div class="d-flex align-items-center gap-5 ms-5">
                                <i class="fa-regular fa-heart fs-2"></i>
                                <button class="btn btn-sm btn-secondary px-4 py-2">Comment</button>
                            </div>
                        </div>
                    </div>
                </div>`;
    }).join("");

    postContainer.innerHTML = createHTML;
}
postsHTML();