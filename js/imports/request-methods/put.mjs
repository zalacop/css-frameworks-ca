export async function putMethod(postID) {
    try {
        const deleteData = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        if(!response.ok) {
            console.log("Failed to delete this post!");
        }

        // return deleteData;
    } catch (error) {
        console.log(error);
    }
}