const passwordInput = document.getElementById('password');
const passwordStrengthText = document.getElementById('passwordStrength');

passwordInput.addEventListener('input', () => {
    const strength = checkPasswordStrength(passwordInput.value);
    passwordStrengthText.textContent = strength;
    passwordStrengthText.classList.remove('hidden');
});

function checkPasswordStrength(password) {
    let strength = '';
    const patterns = [
        /.{8,}/, // Minst 8 tecken
        /[a-z]/, // Minst en liten bokstav
        /[A-Z]/, // Minst en stor bokstav
        /\d/, // Minst en siffra
    ];
    const passed = patterns.reduce((count, pattern) => pattern.test(password) ? count + 1 : count, 0);

    switch (passed) {
        case 4:
            strength = 'Starkt';
            passwordStrengthText.classList.add('text-green-500');
            passwordStrengthText.classList.remove('text-yellow-500', 'text-red-500');
            break;
        case 3:
            strength = 'Medel';
            passwordStrengthText.classList.add('text-yellow-500');
            passwordStrengthText.classList.remove('text-green-500', 'text-red-500');
            break;
        default:
            strength = 'Svagt';
            passwordStrengthText.classList.add('text-red-500');
            passwordStrengthText.classList.remove('text-yellow-500', 'text-green-500');
    }

    return strength;
}
