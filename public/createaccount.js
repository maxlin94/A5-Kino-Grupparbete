class PassWordValidation {
  constructor() {
    // this.setupSubmitListener();
  }
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

    if (passwordInput.length < 8) {
      passwordStrengthText.innerText = "Ej godkänt";
      passwordStrengthText.style.color = "red";
      submitBtn.style.display = "none";
    } else if (
      passwordInput.match(regularExpression) &&
      passwordInput.length >= 8
    ) {
      passwordStrengthText.innerText = "Godkänt";
      passwordStrengthText.style.color = "green";
      submitBtn.style.display = "block";
    }
  }

  // setupSubmitListener() {
  //   this.getSubmitBtn().addEventListener("click", (event) => {
  //     const passwordInput = this.getPwInput().value;
  //     const passwordStrengthText = this.getPwStrengthText();
  //     const regularExpression = /[|#\(\)\[\]{}<>=:;"'&!\-@]/;

  //     if (passwordInput.length > 8 && passwordInput.match(regularExpression)) {
  //     } else if (!passwordInput.match(regularExpression)) {
  //       passwordStrengthText.innerText = "Något fattas";
  //       passwordStrengthText.style.color = "orange";
  //     }
  //   });
  // }

  validationInput() {
    const pwInput = this.getPwInput();
    pwInput.addEventListener("input", () => {
      this.pwPower();
    });
  }
}

const validator = new PassWordValidation();
validator.validationInput();
