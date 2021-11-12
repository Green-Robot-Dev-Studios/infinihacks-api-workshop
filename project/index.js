async function showRedditPosts() {
    // Perform a GET request to reddit
    let request = await fetch("https://www.reddit.com/r/aww/top.json")
    // Get data as a json object (note this method returns a promise, so don't forget to await it)
    let data = await request.json()
    // Print the data
    console.log(data)

    // Get the posts
    let posts = data.data.children;
    // Loop through the posts
    for (i of posts) {
        // Create a <p> element to hold the title
        let title = document.createElement("p");
        title.innerHTML = i.data.title;
        document.body.appendChild(title);
        
        // Create a <img> element to show the thumbnail
        let thumb = document.createElement("img");
        thumb.src = i.data.thumbnail;
        document.body.appendChild(thumb);
    }
}