const logout = document.getElementById('logout');

async function logoutHandler(event) {
    event.preventDefault();
    console.log("working");
    //i need to send this down a route to get req.session.logged_in
    const response = await fetch('/api/users/logout', {method: "Post"});
    if(response.ok){
        document.location.replace('/'); //could also do a page reload
    };
}

logout.addEventListener('click', logoutHandler);