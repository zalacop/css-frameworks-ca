export async function putMethod(data) {
    try {
        const accessToken = localStorage.getItem('accessToken');
        const putData = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data)
        }
        if(!accessToken) {
            console.log("User is not authenticated!")
        }
        return putData;
    } catch (error) {
        console.log(error);
    }
}