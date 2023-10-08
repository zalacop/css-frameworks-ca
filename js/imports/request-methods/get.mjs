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
    } catch (error) {
        console.log(error);
    }
}