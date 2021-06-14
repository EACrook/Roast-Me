//since we talked about having people to be able to signup and login...
//event listeners
async function loginFormHandler(event) {
    event.preventDefault();
    //email and password login
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#current-password').value.trim();
    document.querySelector('#logindiv').classList.remove('hide');
    document.querySelector('#signupdiv').classList.add('hide');
    if (email && password) {
        const response = await fetch('/api/user-routes/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        //check for response status
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

async function signupFormHandler(event) {
    event.preventDefault();
    //username, email and password signup
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#new-password').value.trim();
    document.querySelector('#signupdiv').classList.remove('hide');
    document.querySelector('#logindiv').classList.add('hide');

    if (username && email && password) {
        const response = await fetch('/api/user-routes', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        //check for response status
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

//for already signed-up users to login
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

//for new users to signup for login
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);