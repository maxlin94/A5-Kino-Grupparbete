const submit = document.getElementById("submit");
const passwordInput = document.getElementById("password");
const passwordTwoInput = document.getElementById("password2");
const passwordIndicator = document.getElementById("password-strength");
const error = document.getElementById("error");
const form = document.getElementById("form-register");
const email = document.getElementById("email");

function pwStrength() {
    const password = passwordInput.value;
    const length = password.length;
    let strength = 0;
    length > 0 ? passwordIndicator.classList = "flex" : passwordIndicator.classList = "hidden";
    length > 12 ? strength += 2 : '';
    length > 7 ? strength += 1 : strength -= 3;
    strength += /[A-Z]/.test(password) ? 1 : 0; 
    strength += /[a-z]/.test(password) ? 1 : 0; 
    strength += /[0-9]/.test(password) ? 1 : 0; 
    strength += /[!@#$%^&*()_+.-]/.test(password) ? 1 : 0;
    updateBars(strength);
    return strength;
}

function updateBars(num) {
    const bars = passwordIndicator.children
    if(num < 3) {
        bars[0].classList = "bar bar-red";
        bars[1].classList = "bar bar-gray";
        bars[2].classList = "bar bar-gray";
    }
    else if(num < 6) {
        bars[0].classList = "bar bar-yellow";
        bars[1].classList = "bar bar-yellow";
        bars[2].classList = "bar bar-gray";
    } else {
        bars[0].classList = "bar bar-green";
        bars[1].classList = "bar bar-green";
        bars[2].classList = "bar bar-green";
    }
}

function renderError(message) {
    error.innerHTML = "";
    const p = document.createElement("p");
    p.innerText = message;
    p.classList.add("text-red-500", "mt-2", "ml-2", "text-center")
    error.appendChild(p);
}

function checkFormFilledIn() {
    const inputs = form.querySelectorAll("input");
    for(const input of inputs) {
        if(input.value === "") {
            return false;
        }
    }
    return true;
}

function validateEmail() {
    const regex = /\S+@\S+\.\S+/;
    if(!regex.test(email.value)) {
        return false;
    }
    return true;
}

passwordInput.addEventListener("input", pwStrength);

submit.addEventListener("click", (e) => {
    const strength = pwStrength();

    const renderErrorAndPreventDefault = (errorMessage) => {
        renderError(errorMessage);
        e.preventDefault();
    };

    if (!checkFormFilledIn()) {
        renderErrorAndPreventDefault("Fyll i alla fält");
    } else if (!validateEmail()) {
        renderErrorAndPreventDefault("Ogiltig e-postadress");
    } else if (passwordInput.value !== passwordTwoInput.value) {
        renderErrorAndPreventDefault("Lösenorden matchar inte");
    } else if (passwordInput.value.length < 8) {
        renderErrorAndPreventDefault("Lösenordet måste vara minst 8 tecken långt");
    } else if (strength < 3) {
        renderErrorAndPreventDefault("Lösenordet är för svagt");
    }
});