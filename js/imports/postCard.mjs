export default function createHTML(singlePost) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("container", "post", "card", "mb-3");
    
    const postCard = document.createElement("div");
    postCard.classList.add("row");

    const postImage = document.createElement("img");
    postImage.src = singlePost.image;
    postImage.classList.add("ol-sm", "w-50", "m-auto", "mt-2");

    const postContent = document.createElement("div");
    postContent.classList.add("col-sm", "col-md-3", "card-body");

    const postAuthor = document.createElement("p");
    postAuthor.classList.add("fst-italic", "fw-lighter", "fs-6", "mt-0", "card-header", "mb-3");
    postAuthor.innerText = "Post by Unknown author";

    const postTitle = document.createElement("h5");
    postTitle.classList.add("fs-5");
    postTitle.innerText = singlePost.title;

    const postText = document.createElement("p");
    postText.classList.add("fs-6");
    postText.innerHTML = singlePost.text;

    const interactDiv = document.createElement("div");
    interactDiv.classList.add("d-flex", "align-items-center", "gap-5", "ms-5");

    const heartIcon = document.createElement("i");
    heartIcon.classList.add("fa-regular", "fa-heart", "fs-2");

    const commentBtn = document.createElement("button");
    commentBtn.classList.add("btn", "btn-sm", "btn-secondary", "px-4", "py-2");
    commentBtn.innerText = "Comment";

    interactDiv.appendChild(heartIcon);
    interactDiv.appendChild(commentBtn);

    postContent.appendChild(postAuthor);
    postContent.appendChild(postTitle);
    postContent.appendChild(postText);
    postContent.appendChild(interactDiv);

    postCard.appendChild(postImage);
    postCard.appendChild(postContent);

    postContainer.appendChild(postCard);

    return postContainer;
    }