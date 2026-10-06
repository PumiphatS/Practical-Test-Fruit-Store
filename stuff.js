//render a list of fruit there should be at least 5 fruit

// the fruit should have a different prices listed that I can modify

// I want to be able to delete one of the fruit


const fruits = [
    {name: "banana",  price: 50},
    {name: "strawberry",  price: 40},
    {name: "watermelon",  price: 20},
    {name: "pineapple",  price: 90},
    {name: "mango",  price: 80}
]

function renderFruits(){
    const container = document.getElementById("fruitContainer");
    container.innerHTML = "";

    fruits.forEach((fruit) => {
        const cardElement = createFruits(fruit);
        container.appendChild(cardElement);
    });
}


function createFruits(fruit) {
    const element = document.createElement("div");
    element.className = "fruitCard";
    element.style.border = "2px solid black";
    element.style.borderRadius = "5px";
    element.style.padding = "8px";
    element.style.marginBottom = "8px";
    element.style.width= "120px";

    element.innerHTML = 
    `<h2>${fruit.name}</h2>
    <p><strong>Price: $</strong>${fruit.price}</p>`

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", (event) => {
        const index = fruits.indexOf(fruit);
        event.stopPropagation();
        fruits.splice(index, 1);
        //
        renderFruits();
    });

    const addBtn = document.createElement("button");
    addBtn.className = "addBtn";
    addBtn.textContent = "+";
    addBtn.innerHTML="+";

    addBtn.addEventListener("click", () => {
        fruit.price += 1;
        renderFruits();
    });


    element.appendChild(deleteBtn);
    element.appendChild(addBtn);
    return element;
}

renderFruits(fruits);