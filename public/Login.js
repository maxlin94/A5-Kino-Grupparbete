class HandleLogin {
  constructor() {}
  userName() {
    return document.querySelector("#userNameAccLogin").value;
  }

  userPassword() {
    return document.querySelector("#passwordLogin").value;
  }

  loginBtn() {
    return document.querySelector("#LoginBtn");
  }

  saveUserName() {
    sessionStorage.setItem("Username", this.userName());
    let userName = sessionStorage.getItem("Username");
    return userName;
  }

  userLogin() {
    this.loginBtn().addEventListener("click", () => {
      this.saveUserName();
    });
  }
}
const HandleLogin2 = new HandleLogin();

HandleLogin2.userLogin();
