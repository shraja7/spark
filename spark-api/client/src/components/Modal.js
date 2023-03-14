class Modal {
  constructor() {
    this._modal = document.querySelector("#modal");
    this._modalBtn = document.querySelector("#modal-btn");
    this.addEventListeners();
  }

  //event listeners
  addEventListeners() {
    this._modalBtn.addEventListener("click", this.open.bind(this));
    window.addEventListener("click", this.outsideClick.bind(this));
  }

  //functions
  open = () => {
    this._modal.style.display = "block";
  };

  close = () => {
    this._modal.style.display = "none";
  };
  outsideClick = (e) => {
    if (e.target == this._modal) close(this.close());
  };
}

export default Modal;
