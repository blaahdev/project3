// --- VARIABLES
let activeColor = 0;
// --- QUERY SELECTORS
const sizes = document.querySelectorAll(".size-options span");
const colors = document.querySelectorAll(".color-options span");
const productImages = document.querySelectorAll(".product-img");
const cardTop = document.getElementById("card-top");
const price = document.getElementById("price");
// ---- RENDERS
// ---- ANIMATE
// ---- EVENT LISTENERS

sizes.forEach((size) =>
  size.addEventListener("click", (e) => {
    sizes.forEach((each) => each.classList.remove("active"));
    size.classList.add("active");
  })
);

colors.forEach((color, i) =>
  color.addEventListener("click", () => {
    //remove prev class via index;
    colors[activeColor].classList.remove("active");
    productImages[activeColor].classList.remove("active");
    //update new class via index
    activeColor = i;
    productImages[i].classList.add("active");
    if (i === 0) {
      cardTop.style.backgroundColor = "var(--bg-primary)";
      price.style.backgroundColor = "var(--bg-blue)";
    } else {
      cardTop.style.backgroundColor = "var(--bg-red)";
      price.style.backgroundColor = "var(--bg-red)";
    }
  })
);
// --- EXECUTES
