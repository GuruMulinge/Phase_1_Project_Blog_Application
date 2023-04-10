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


async function getPost(id){
    return await fetch(`${url}/${id}`)
      .then(res => res.json())
      .catch(err => console.log(err));
}

function displayPostsTitles(){
    fetchPosts().then(posts => {
        posts.forEach(post => {
            const postList = document.getElementById("post-lists");
            const listItem = document.createElement("li");
            listItem.className = "list-group-item";
            listItem.id = `post-id-${post.id}`;
            listItem.style.cursor = "pointer";
            listItem.innerText = post.title;
            postList.appendChild(listItem);

            document.getElementById("post-id-1").classList.add("active");

            listItem.addEventListener("click", event => {
                document.querySelector(".active").classList.remove("active");
                event.target.classList.toggle("active");
                displayPost(post);
            } );
        });
    });
}
