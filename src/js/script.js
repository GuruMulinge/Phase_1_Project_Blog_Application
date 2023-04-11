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

function displayPost(post) {
    document.getElementById("post-body").innerText = postbody;
    document.getElementById("post-author").innerText = `Author :   ${post.author}`;
    document.getElementById("post-date").innerText = `Publish Date:  ${post.date}`;
    document.getElementById("post-image").src = post.post_image;
    document.getElementById("post-title").innerText = post.title;

    const postLikes = document.getElementById("post-ikes");
    const postDislikes = document.getElementById("post-dislikes");

    postLikes.innerText = `Post Likes: ${post.likes}`;
    postDislikes.innerText = `Post Dislikes: ${post.dislikes}`;


    const likePost = document.getElementById("like-post");
    const dislikePost = document.getElementById("dislike-post");

    likePost.style.cursor = "pointer";
    dislikePost.style.cursor = "pointer"


    likePost.addEventListener("click", async() => {
        post.likes++;
        await updatePost(post).then(() => {
            postLikes.innerText = `Post Likes: ${post.likes}`;
        });
    });

    dislikePost.addEventListener("click", async() => {
        post.dislikes++;
        await updatePost(post).then(() => {
            postDislikes.innerText = `Post Dislikes: ${post.dislikes}`;
        });
    });
}

function displayFirstPost() {
    fetchPosts().then(posts => {
        displayPost(posts[0]);
    });
}

function addPostToDom(post){
    const postList = document.getElementById("post-lists");
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.id = `post-id-${post-id}`;
    listItem.style.cursor = "pointer";
    listItem.innerText = post.title;
    postList.appendChild(listItem);
    listItem.addEventListener("click", event =>{
        document.querySelector(".active").classList.remove("active");
        event.target.classList.toggle("active");
        displayPost(post);
    });
}

function clearForm() {
    document.getElementById("blog-post-title").value = "";
    document.getElementById("blog-post-body").value = "";
    document.getElementById("blog-post-author").value = "";
    document.getElementById("blog-post-image-link").value = "";
}

