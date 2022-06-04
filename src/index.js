import "./styles.css";

const buttonAdd = document.querySelector("#add-comment");
const buttonRemove = document.querySelector("#remove-comments");
const newComment = document.querySelector(".newComment");
const ul = document.querySelector("#ul");

buttonAdd.onclick = () => {
  const comment = newComment.value;
  const para = document.createElement("li");
  para.textContent = comment;
  ul.appendChild(para);
  newComment.value = "";
};

buttonRemove.onclick = () => {
  if (confirm("Do you want to delete all comments?") === true) {
    ul.innerHTML = "";
  }
};
