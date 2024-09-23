// JS for menu
let currentIndex = 0;  

const menuItems = [
    {
        name: "Crunchwrap Supreme",
        description: "Ultimate mix of crunch and wrap",
        price: 4.99,  
        image: "assets/item1.jpeg"
    },
    {
        name: "Baja Blast",
        description: "God's gift to the earth",
        price: 2.99,
        image: "assets/item2.jpeg"
    },
    {
        name: "Soft Taco",
        description: "A taco that is soft",
        price: 1.99,
        image: "assets/item3.jpeg"
    },
    {
        name: "Hard Taco",
        description: "A taco that is hard",
        price: 1.99,
        image: "assets/item4.jpeg"
    }
];

function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
}

//Menu display
function updateMenuDisplay(index) {
    document.getElementById("menuName").textContent = menuItems[index].name;
    document.getElementById("menuDescription").textContent = menuItems[index].description;
    document.getElementById("menuPrice").textContent = formatPrice(menuItems[index].price);
    document.getElementById("menuImage").src = menuItems[index].image;
    document.getElementById("menuImage").alt = menuItems[index].name;
}

//Go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % menuItems.length;
    updateMenuDisplay(currentIndex);
}

//Go to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    updateMenuDisplay(currentIndex);
}

//Event listeners
document.addEventListener('DOMContentLoaded', function() {
    updateMenuDisplay(currentIndex);

document.getElementById("nextBtn").addEventListener("click", nextImage);
document.getElementById("prevBtn").addEventListener("click", prevImage);

})
