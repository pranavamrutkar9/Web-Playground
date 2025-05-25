const boxes = document.querySelectorAll(".box");
const colorButton = document.getElementById("colorButton");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function colorAllBoxes() {
    boxes.forEach(box => {
        box.style.backgroundColor = getRandomColor();
    });
}

colorAllBoxes();

colorButton.addEventListener("click", colorAllBoxes);

boxes.forEach(box => {
    box.addEventListener("click", () => {
        box.style.backgroundColor = getRandomColor();
    });
});
