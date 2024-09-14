//User clicks button
//Cohsume an API
// Send back random image to html 

let img = document.getElementById("i")

//Accessing Button Element
let button = document.getElementById("b")
//Assign a listener for a click on the button
button.addEventListener("click", ()=>{
    //consume API

    //endpoint - https://dog.ceo/api/breeds/image/random 
    //json or xml -JSON
    //how much data - 1 obj
    //what does that data look like - 2 things, message = potential image, success 

    //HTTP Request

      //1. Utilize the endpoint with the correct method (verb)
    const baseURL = "https://dog.ceo/api/breeds"
    let route = "image/random"
    let endpoint = `${baseURL}/${route}`

    fetch(endpoint)

    .then((response) => {
        console.log(response);
        if (response.ok) {
            // sent down to the next then
        return response.json();
    } else {
        throw Error ("Irish Broke it lol")
    }
    })

    .then((data) => {
        // 3. Do something with the parsed data
        img.setAttribute("src", data.message)
        console.log(data)

img.style.width = "300px"
img.style.height = "300px"
img.style.objectFit = "cover"

    })

    .catch(error => {
        console.log(error);
    })

})

