import { urlPosts } from "../url.mjs";

export async function getMethod() {
    try {
        const accessToken = localStorage.getItem('accessToken');
        const getData = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        }

        return getData;
    } catch (error) {
        console.log(error);
    }
}

export async function getSinglePost(id) {
    try {
        const postURL = urlPosts + "/" + id;
        const getRequest = await getMethod();
        const response = await fetch(postURL, getRequest);
        const post = await response.json();

        return {
            "id": post.id,
            "image": post.media,
            "title": post.title,
            "text": post.body,
            "tags": post.tags
        };
    } catch (error) {
        console.log(error);
    }
}
