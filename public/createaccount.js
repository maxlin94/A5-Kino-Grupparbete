class PassWordValidation {
  constructor() {}
  getPwStrengthText() {
    return document.querySelector("#pwPower");
  }
  getPwInput() {
    return document.querySelector("#createPasswordAcc");
  }

  getSubmitBtn() {
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.style.display = "none";
    return submitBtn;
  }
  pwPower() {
    const passwordInput = this.getPwInput().value;
    const passwordStrengthText = this.getPwStrengthText();
    const regularExpression = /[|#\(\)\[\]{}<>=:;"'&!\-@]/;

    if (passwordInput.length < 8 && !passwordInput.match(regularExpression)) {
      passwordStrengthText.innerText = "Ej godkänt";
      passwordStrengthText.style.color = "red";
      submitBtn.style.display = "none";
      return;
    } else if (
      passwordInput.match(regularExpression) &&
      passwordInput.length >= 8
    ) {
      passwordStrengthText.innerText = "Godkänt";
      passwordStrengthText.style.color = "green";
      submitBtn.style.display = "block";
    }
  }

  validationInput() {
    const pwInput = this.getPwInput();
    pwInput.addEventListener("input", () => {
      this.pwPower();
    });
  }
}

const validator = new PassWordValidation();
validator.validationInput();

class InputValidation {
  getUserNameInput() {
    return document.querySelector("#firstNameAcc");
  }

  getUserLastNameInput() {
    return document.querySelector("#lastNameAcc");
  }

  getUserEmail() {
    return document.querySelector("#emailAcc");
  }

  validation() {
    this.getUserLastNameInput().addEventListener("input", () => {
      if (
        this.getUserLastNameInput().value.length < 2 &&
        this.getUserLastNameInput().value.length === 1
      ) {
        this.getUserLastNameInput().style.background = "red";
      } else if (this.getUserLastNameInput().value.length === 0) {
        this.getUserLastNameInput().style.background = "";
      } else {
        this.getUserLastNameInput().style.background = "lightgreen";
      }
    });

    this.getUserNameInput().addEventListener("input", () => {
      if (
        this.getUserNameInput().value.length < 2 &&
        this.getUserNameInput().value.length === 1
      ) {
        this.getUserNameInput().style.background = "red";
      } else if (this.getUserNameInput().value.length === 0) {
        this.getUserNameInput().style.background = "";
      } else {
        this.getUserNameInput().style.background = "lightgreen";
      }
    });

    this.getUserEmail().addEventListener("input", () => {
      const emailValue = this.getUserEmail().value.trim();

      if (emailValue.length === 0) {
        this.getUserEmail().style.background = "";
      } else if (emailValue.length < 2 || !emailValue.includes("@")) {
        this.getUserEmail().style.background = "red";
      } else {
        this.getUserEmail().style.background = "lightgreen";
      }
    });
  }
}

const InputValidation2 = new InputValidation();

InputValidation2.validation();
