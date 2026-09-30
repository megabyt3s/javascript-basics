const gridContainer = document.querySelector("#grid-container");
const resizeBtn = document.querySelector("#resize-button");
const colors = ["#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF"];

function createGrid(size) {
  gridContainer.textContent = "";
  gridContainer.style.setProperty("--grid-size", size);

  const squareSize = 800 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      square.style.backgroundColor = randomColor;
    });

    gridContainer.appendChild(square);
  }
}

resizeBtn.addEventListener("click", () => {
  const size = Number(prompt("Enter the number of squares per side:"));

  if (size >= 1 && size <= 100) {
    createGrid(size);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});
createGrid(16);
