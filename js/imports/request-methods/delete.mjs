export async function deleteMethod() {
    try {
        const deleteData = {
            method: 'DELETE',
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