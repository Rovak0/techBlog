const posting = document.querySelector('.post-form');

//fetch call function, then add the listener

async function postHandler(event){
    event.preventDefault();
    //there is title-post and text-post
    const title = document.querySelector('#title-post').value.trim();
    const text = document.querySelector('#text-post').value.trim();

    if (title&&text){ //valid post
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title , text }),
            headers: { 'Content-Type': 'application/json' },
        });
        if(response.ok) {
            document.location.replace('/dash'); //send them to the home page
            alert('Post successful');
        }
        else{
            alert('Failed Post');
        }
    }
    else{//not valid post
        alert('Fill out the post information.')
    }
}


posting.addEventListener('submit', postHandler);