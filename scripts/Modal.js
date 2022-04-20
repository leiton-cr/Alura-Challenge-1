export default class Modal {
  constructor() {
    this.modal = document.querySelector(".modal");
    this.modalText = document.querySelector(".modal__text");
    this.modalTitle = document.querySelector(".modal__title");
    this.closeModal = document.querySelector(".close__modal");

    this.addListeners();
  }

  addListeners = () => {
    this.closeModal.addEventListener("click", () => this.modal.close());
  };

  showAlert = (message, title) => {
    this.modalTitle.innerText = title || "Error";
    this.modalText.innerText = message;
    this.modal.showModal();
  };
}