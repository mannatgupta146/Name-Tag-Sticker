let wrapper = document.getElementsByClassName("wrapper")[0];
let template = document.getElementsByTagName("template")[0];

// Name array and DOM elements for input
let names = ["Mannat Gupta"];
let nameInput = document.getElementById("nameInput");
let addNameBtn = document.getElementById("addNameBtn");

// Add a name when the button is clicked
addNameBtn.addEventListener("click", () => {
    let newName = nameInput.value.trim();
    if (newName) {
        if (!names.includes(newName)) { // Prevent duplicate names
            names.push(newName);
            createSticker(newName);
            nameInput.value = ""; // Clear input field after adding
        } else {
            alert("This name already exists!");
        }
    } else {
        alert("Please enter a valid name!");
    }
});

// Array of colors for stickers
let colors = [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#800000",
    "#8B0000", "#FFA500", "#FFD700", "#6B8E23", "#7CFC00", "#000080", "#8B008B",
    "#F4A460", "#FF3855", "#FD3A4A", "#FB4D46", "#FA5B3D", "#FFAA1D", "#FFF700",
    "#299617", "#A7F432", "#2243B6", "#5DADEC", "#5946B2", "#9C51B6"
];

// Function to create a sticker
let createSticker = function (name) {
    // Clone template content
    let clone = template.content.cloneNode(true);
    let div = clone.querySelector(".container");
    let nameOfStick = clone.querySelector(".name");

    // Set the name and random styles
    nameOfStick.innerHTML = name;
    div.style.background = colors[Math.floor(Math.random() * colors.length)];
    div.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

    // Append the clone to the wrapper
    wrapper.appendChild(clone);
};

// Render initial stickers
names.forEach(createSticker);
