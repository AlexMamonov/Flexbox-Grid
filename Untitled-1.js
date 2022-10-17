const controls = document.querySelector("#controls");
const buttons = document.querySelector("#buttons");
const flexContainer = document.querySelector("#flexContainer");

buttons.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const { btn } = e.target.dataset;

  switch (btn) {
    case "addBtn":
      const num = document.querySelectorAll(".flex-item").length + 1;
      if (num < 7) {
        const newItem = document.createElement("div");
        newItem.className = "flex-item";
        newItem.textContent = num;
        flexContainer.append(newItem);
      }
      break;
    case "removeBtn":
      const index = document.querySelectorAll(".flex-item").length - 1;
      if (index > 0) {
        const itemToRemove = document.querySelectorAll(".flex-item")[index];
        itemToRemove.remove();
      }
      break;
  }
});

controls.addEventListener("change", (e) => {
  const prop = e.target.id;
  const value = e.target.value;

  if (e.target.parentElement.id === "flexContainerProps") {
    flexContainer.style[prop] = value;
  } else {
    const selectedItem = document.querySelector(".selected");
    selectedItem.style[prop] = value;
  }
});

flexContainer.addEventListener("click", (e) => {
  if (
    e.target.className !== "flex-item" ||
    e.target.classList.contains("selected")
  )
    return;

  if (document.querySelector(".selected") !== null)
    document.querySelector(".selected").classList.remove("selected");

  e.target.classList.add("selected");

  const getStyle = (property, element = e.target) =>
    getComputedStyle(element).getPropertyValue(property);

  order.value = getStyle("order");
  flexGrow.value = getStyle("flex-grow");
  flexShrink.value = getStyle("flex-shrink");
  alignSelf.value = getStyle("align-self");
});
