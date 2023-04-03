import "./styles.css";

const ele = document.querySelector(".accordion-body");
let currOpen = null;
ele.addEventListener("click", (e) => {
  if (currOpen) {
    currOpen.style.display = "none";
  }
  if (e.target.classList.contains("open")) {
    const parent = e.target.closest(".container");
    parent.children[1].style.display = "block";
    currOpen = parent.children[1];
  }
});
