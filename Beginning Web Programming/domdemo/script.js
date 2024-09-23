// alert("Connected")
let food = document.getElementById("fruit");
console.log(food);

food.style.color = "red";
food.style.border = "blue ridge 15px";

let food2 = document.getElementsByClassName("breakfast");
console.log(food2[0]);

let food3 = document.getElementsByTagName("li");
console.log(food3[1].textContent);
food3[1].textContent = "Sold Out";

let food4 = document.querySelector(".breakfast");
console.log(food4);

let food5 = document.querySelectorAll("h1");
console.log(food5[1]);

let ul = document.querySelector("ul");
console.log(ul);

let li = document.querySelector("li");
li.innerHTML = "Chocolate <b>Yummy!</b>";
//document.querySelector("a").getAttribute("href");
//document.querySelector("a").setAttribute("href", "http://www.amazon.com");

let input = document.querySelectorAll("[type='text']");

let submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", (event) => {
   event.preventDefault();
   //let fname = input[0].value;
   //let lname = input[1].value;
   //let age = input[2].value;
let person = {
fname: input[0].value,
lname: input[1].value,
age: Number(input[2].value
)}
let strPerson = JSON.stringify(person)
console.log(strPerson);
   input[0].value = "";
   input[1].value = "";
   input[2].value = "";
});


// let animal = {
//     breed: "dog",
//     age: 24
// }
// //obj that we're used too
// let animal2 = {breed: "dog", age: 24}
// //Obj just in one line
// let animal3 = {"breed": "dog", "age": 24}
// //still a JS obj
// let person = {
//     _id: 12345
// }

// //we cannot use numbers in keys in JS obj

// let person = {
//     l1age: 24
// }
// //invalid

// let person = {"1age": 24}

// typeof animal3
// //will return an obj

// animal 3 = JSON.stringify(animal 3)
// type of animal3

//JavaScript Object Notation (JSON)
//Number 1 way of passing data
// animal 3 = JSON.parse(animal3)
//{breedL 'dog', 'age'}
// typeof animal3'
// 'object'