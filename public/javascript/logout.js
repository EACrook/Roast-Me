//I guess since we're having users login, we're having logout as well
async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });
    //check for response
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
document.querySelector('#logout').addEventListener('click', logout);