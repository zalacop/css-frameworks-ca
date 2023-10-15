export default function createHTML(singlePost) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("container", "post", "card", "mb-3", "w-75");

    const postContent = document.createElement("div");
    postContent.classList.add("col-sm", "col-md-3", "card-body", "mx-auto");

    const postHeader = document.createElement("div");
    postHeader.classList.add("d-flex", "w-100", "d-flex", "justify-content-sm-center", "justify-content-md-start");

    const postAuthor = document.createElement("p");
    postAuthor.classList.add("fst-italic", "fw-lighter", "fs-6", "mt-0", "card-header", "mb-3");
    postAuthor.innerText = "Post by Unknown author";

    const postTitle = document.createElement("h5");
    postTitle.classList.add("card-title", "d-flex", "justify-content-sm-center", "justify-content-md-start");
    postTitle.innerText = singlePost.title;

    const postText = document.createElement("p");
    postText.classList.add("card-text", "d-flex", "justify-content-sm-center", "justify-content-md-start");
    postText.innerHTML = singlePost.text !== undefined ? singlePost.text: "";

    const interactDiv = document.createElement("div");
    interactDiv.classList.add("d-flex", "justify-content-sm-center", "justify-content-md-start", "gap-5", "ms-5" , "mx-auto");

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
    postCard.classList.add("row", "mx-auto");

    const postImage = document.createElement("img");
    postImage.src = singlePost.image;
    postImage.classList.add("col-sm", "w-50", "m-auto", "my-2");

    postCard.appendChild(postImage);
    postCard.appendChild(postContent);

    postContainer.appendChild(postCard);

    return postContainer;
    } else {
        postContent.classList.remove("col-md-3");
        postContent.classList.add("col-md-10")
    }

    return postContainer;
}
