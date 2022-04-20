import Encrypter from "./Encrypter.js";
import Modal from "./Modal.js";

export default class Controller {
  constructor() {
    this.emptyResult = document.querySelector(".output.empty");
    this.fullResult = document.querySelector(".output.full");
    this.outputResult = document.querySelector(".output .result");
    this.textInput = document.querySelector("textarea");
    this.encrypt = document.getElementById("encrypt");
    this.decrypt = document.getElementById("decrypt");
    this.copy = document.getElementById("copy");

    this.modal = new Modal();

    this.addListeners();
  }

  addListeners = () => {
    this.encrypt.addEventListener("click", this.handleEncrypter);
    this.decrypt.addEventListener("click", this.handleEncrypter);
    this.copy.addEventListener("click", this.handleCopy);
  };

  
  handleEncrypter = (e) => {
    const text = this.textInput.value;

    if (!this.validateText(text)) {
      this.emptyResult.classList.remove("hidden");
      this.outputResult.innerText = "";
      this.fullResult.classList.add("hidden");
      return;
    }

    this.textInput.value = "";

    let result = "";
    switch (e.target.id) {
      case "encrypt":
        this.outputResult.innerText = Encrypter.encrypt(text);
        break;

      case "decrypt":
        this.outputResult.innerText = Encrypter.decrypt(text);
        break;
    }

    this.emptyResult.classList.add("hidden");
    this.fullResult.classList.remove("hidden");
  };

  handleCopy = () => {
    navigator.clipboard.writeText(this.outputResult.innerText);
    this.showAlert("Copiado en el portapapeles", "Atención");
  };

  validateText = (text) => {
    /* Si el texto esta vacío falla */
    if (!text) {
      this.modal.showAlert("No se ha ingresado ningún texto.");
      return false;
    }

    /* Si alguna letra es mayuscula falla */
    if (text.match(/[A-Z]/)) {
      this.modal.showAlert("Solo se permiten minúsculas.");
      return false;
    }

    /* Si alguna letra tiene acento falla */
    if (text.match(/[áéíóú]/i)) {
      this.modal.showAlert("No se permiten acentos.");
      return false;
    }

    return true;
  };
}