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