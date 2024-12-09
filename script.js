let wrapper = document.querySelector(".wrapper");
let template = document.querySelector("template");

let names = ["Mannat Gupta"];
let nameInput = document.getElementById("nameInput");
let addNameBtn = document.getElementById("addNameBtn");

addNameBtn.addEventListener("click", () => {
  let newName = nameInput.value.trim();
  if (newName) {
    createSticker(newName);
    nameInput.value = "";
  } else {
    alert("Please enter a valid name!");
  }
});

// Dynamically create stickers
function createSticker(name) {
  let node = document.importNode(template.content, true);
  let nameOfStick = node.querySelector(".name");
  if (nameOfStick) {
    nameOfStick.innerText = name;
    wrapper.appendChild(node);
  } else {
    console.error("Sticker template does not contain a '.name' element.");
  }
}

// Generate initial stickers from pre-loaded names
names.forEach(createSticker);
