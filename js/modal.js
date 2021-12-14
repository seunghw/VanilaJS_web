const modal = document.getElementById("modal");
const openModal = document.getElementById("open_btn");
const closeModal = document.getElementById("close_btn");

openModal.addEventListener("click", (e) => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", (e) => {
  modal.style.display = "none";
});
