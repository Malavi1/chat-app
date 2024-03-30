// app/javascript/controllers/sample_controller.js

// app/javascript/controllers/sample_controller.js

import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input"];

  connect() {
    console.log('hello world')
  }

  removeInputOnSubmit() {
    this.formTarget.addEventListener("submit", (e) => {
      e.preventDefault();
      this.clearInput();
    });
  }

  clearInput() {
    this.inputTarget.value = "";
  }
}

