const nextBtn = document.getElementById("NEXT")
const prevBtn = document.getElementById("PREV")


let counter = 0
nextBtn.addEventListener("click", ()=>{ 
counter++;
if (counter < imgArray.length) {
    counter++;
} else {
    counter = 0;
}
let path = `./assets/${imgArray[counter]}`
img[0].src = path;
console.log("Counter") })


prevBtn.addEventListener("Click", ()=>{
counter--
console.log(counter) })