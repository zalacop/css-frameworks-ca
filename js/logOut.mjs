export default function logOut() {
    const isThereToken = localStorage.getItem('accessToken');
    if(isThereToken) {
        window.localStorage.clear();
        window.location.replace('/index.html');
    } else {
        console.log("Can't Log out, there is no access token!");
    }
}



