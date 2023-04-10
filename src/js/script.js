const url = "http://localhost:3000/posts";

async function fetchPosts() {
    return await fetch(url)
     .then(res => res.json())
     .catch(err => console.log(err));
}

async function addPost(post) {
    return await fetch(url,{
        method:"POST" , 
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .catch(err => console.log(err));
}



}