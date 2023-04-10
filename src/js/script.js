const url = "http://localhost:3000/posts";

async function fetchPosts() {
    return await fetch(url)
     .then(res => res.json())
     .catch(err => console.log(err));
}