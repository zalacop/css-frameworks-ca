export default function createHTML(singlePost) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("container", "post", "card", "mb-3");

    const postContent = document.createElement("div");
    postContent.classList.add("col-sm", "col-md-3", "card-body");

    const postHeader = document.createElement("div");
    postHeader.classList.add("d-flex", "justify-content-between", "align-items-center");

    const postAuthor = document.createElement("p");
    postAuthor.classList.add("fst-italic", "fw-lighter", "fs-6", "mt-0", "card-header", "mb-3");
    postAuthor.innerText = "Post by Unknown author";

    const postTitle = document.createElement("h5");
    postTitle.classList.add("fs-5");
    postTitle.innerText = singlePost.title;

    const postText = document.createElement("p");
    postText.classList.add("fs-6");
    postText.innerHTML = singlePost.text !== undefined ? singlePost.text: "";

    const interactDiv = document.createElement("div");
    interactDiv.classList.add("d-flex", "align-items-center", "gap-5", "ms-5");

    const heartIcon = document.createElement("i");
    heartIcon.classList.add("fa-regular", "fa-heart", "fs-2");

    const commentBtn = document.createElement("button");
    commentBtn.classList.add("btn", "btn-sm", "btn-secondary", "px-4", "py-2");
    commentBtn.innerText = "Comment";

    interactDiv.appendChild(heartIcon);
    interactDiv.appendChild(commentBtn);

    postHeader.appendChild(postAuthor);

    postContent.appendChild(postHeader);
    postContent.appendChild(postTitle);
    postContent.appendChild(postText);
    postContent.appendChild(interactDiv);

    postContainer.appendChild(postContent);
    
    if(singlePost.image !== null && singlePost.image !== "") {
    const postCard = document.createElement("div");
    postCard.classList.add("row");

    const postImage = document.createElement("img");
    postImage.src = singlePost.image;
    postImage.classList.add("col-sm", "w-50", "m-auto", "mt-2");

    postCard.appendChild(postImage);
    postCard.appendChild(postContent);

    postContainer.appendChild(postCard);

    return postContainer;
    }

    return postContainer;
}

function addPostHeaderIcons(postHeader) {
    const updateIcons = document.createElement("div");
    updateIcons.classList.add("d-flex", "gap-3");
    
    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pen-to-square", "fs-5");
    
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash", "fs-5");

    updateIcons.appendChild(editIcon);
    updateIcons.appendChild(deleteIcon);

    postHeader.appendChild(updateIcons);
}


export function singlePostHTML(singlePost) {
    const postContainer = createHTML(singlePost);

    const postContent = postContainer.querySelector(".card-body");
    const postHeader = postContent.querySelector("div.d-flex.justify-content-between.align-items-center");

    addPostHeaderIcons(postHeader)
    return postContainer;
}