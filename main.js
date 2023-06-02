const input = document.querySelector("input");
const footer__button = document.querySelector(".footer__button");
const item__list = document.querySelector(".item__list");
const item__delete = document.querySelector(".item__delete");
footer__button.addEventListener("click", () => {
  addItem();
});

item__delete.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  console.log(id);
  if (id) {
    const itemBox = document.querySelector(`.item__box[data-id="${id}"]`);
    itemBox.remove();
    numberDownId();
  }
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});

let id = 2;
function addItem() {
  if (input.value === "") {
    alert("메시지를 입력해주세요.");
    return;
  }
  const itemBox = document.createElement("div");
  const itemRow = document.createElement("li");
  const itemDivider = document.createElement("div");
  itemBox.setAttribute("class", "item__box");
  itemBox.setAttribute("data-id", `${id}`);
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", `${id}`);
  itemDivider.setAttribute("class", "item__divider");
  itemRow.innerHTML = `<span class="item__name">${id}. ${input.value}</span>
  <button class="item__delete" data-id="${id}">
  <i class="fa-solid fa-trash-can" data-id="${id}"></i>
  </button>`;
  input.value = "";
  input.focus();
  id++;
  itemBox.appendChild(itemRow);
  itemBox.appendChild(itemDivider);
  item__list.appendChild(itemBox);
  addDeleteEventListener(itemBox);
  itemBox.scrollIntoView({ behavior: "smooth" });
  return item__list;
}
function addDeleteEventListener(itemDelete) {
  itemDelete.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      if (e.target.nodeName === "DIV" || e.target.nodeName === "LI") {
        return;
      }
      const itemBox = document.querySelector(`.item__box[data-id="${id}"]`);
      itemBox.remove();
      numberDownId();
    }
  });
}
function numberDownId() {
  id--;
}
