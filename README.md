# Infinihacks API Workshop

Slides are included in this git repo as a PDF.

Code snippets here.

Code for the project is in the folder 'project'

```js
// Perform a GET request to imgflip
let request = await fetch("https://api.imgflip.com/get_memes")
// Get data as a json object (note this method returns a promise, so don't forget to await it)
let data = await request.json()
// Print the data
console.log(data)
```
