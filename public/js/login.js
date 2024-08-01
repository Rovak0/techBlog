const login = document.querySelector('.login-form');
const signUp = document.querySelector('.signup-form');

async function loginHandler(event) {
    event.preventDefault();
    //pull the data off the form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username&&password){
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ 'name': username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if(response.ok) {
            document.location.replace('/'); //send them to the home page
            alert('Login successful');
        }
        else{
            alert('Failed login');
        }
    }
    else{
        alert('Fill out the login information.')
    }
}


login.addEventListener('submit', loginHandler);
