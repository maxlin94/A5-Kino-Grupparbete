const submit = document.getElementById("submit");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const passwordStrength = document.getElementById("password-strength");
const error = document.getElementById("error");

function pwStrength() {
    const passwordValue = password.value;
    passwordValue.length > 0 ? passwordStrength.classList = "flex" : passwordStrength.classList = "hidden";
    let strength = 0;
    if(passwordValue.length < 5) strength -= 5;
    if(passwordValue.length > 5) strength += 1;
    if(passwordValue.length > 8) strength += 1;
    if(/[A-Z]/.test(passwordValue)) strength += 1;
    if(/[a-z]/.test(passwordValue)) strength += 1;
    if(/[0-9]/.test(passwordValue)) strength += 1;
    updateBars(strength);
}

function updateBars(num) {
    const bars = passwordStrength.children
    if(num < 3) {
        bars[0].classList = "bar bar-red";
        bars[1].classList = "bar bar-gray";
        bars[2].classList = "bar bar-gray";
    }
    else if(num < 5) {
        bars[0].classList = "bar bar-yellow";
        bars[1].classList = "bar bar-yellow";
        bars[2].classList = "bar bar-gray";
    } else {
        bars[0].classList = "bar bar-green";
        bars[1].classList = "bar bar-green";
        bars[2].classList = "bar bar-green";
    }
}

password.addEventListener("input", pwStrength);

submit.addEventListener("click", (e) => {
    if (password.value !== password2.value) {
        error.innerHTML = "";
        e.preventDefault();
        const p = document.createElement("p");
        p.innerText = "Lösenorden matchar inte";
        p.classList.add("text-red-500", "text-xs", "italic", "mt-2", "ml-2")
        error.appendChild(p);
    }
});