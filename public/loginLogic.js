/*Sign in Logic------------------------------------------*/
if (window.location.pathname.includes('/login')) {

  const signInForm = document.querySelector('form');

  signInForm.addEventListener('submit', handleSignIn);

  async function handleSignIn(event) {
    event.preventDefault();
    document.querySelector('#password').nextElementSibling.classList.add('hidden');

    const data = new FormData(event.target);

    const signInData = Object.fromEntries(data.entries());

    const res = await fetch('./users');

    const savedUsers = await res.json()

    let checker = []

    let signedInUser;

    async function checkDatabase() {
      savedUsers.forEach((savedUser) => {
        if (savedUser.username === signInData.username && savedUser.password === signInData.password) {
          checker.push(true)
          signedInUser = savedUser
        } else {
          checker.push(false)
        }
      })
    }

    await checkDatabase()

    if (checker.includes(true)) {
      checker = [];
      document.querySelector('.userPage').style.display = 'flex';
      document.querySelector('.signedInUser').textContent = `${signedInUser.name}`;
      document.querySelector('.userEmail').textContent = `${signedInUser.email}`
      document.querySelector('.signInPage').classList.add('hidden');
      document.querySelector('.Login a').textContent = 'Logga ut';
    } else {
      checker = [];
      signInForm.password.nextElementSibling.classList.remove('hidden')

    }
  }
}



/*Sign up Logic-------------------------------------------------*/
if (window.location.pathname.includes('/signUp')) {

  const signUpForm = document.querySelector('#signUpForm');

  signUpForm.addEventListener('submit', handleSignUp);

  async function handleSignUp(event) {
    event.preventDefault();

    if (!validator()) { return };

    const data = new FormData(event.target);

    const newUserData = Object.fromEntries(data.entries());

    const res = await fetch('/signUp/newUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUserData),
    });

    window.location.href = '/login'
  }

  function validator() {
    let checker = arr => arr.every(v => v === true)
    let booleans = [];

    validatorArr.forEach(function (func) {
      booleans.push(func());
    });

    return checker(booleans)
  }

  const passwordRegex = /^(?=.*[a-ö])(?=.*[A-Ö])(?=.*\d)(?=.*[@.#$!%*?&])[A-Öa-ö\d@.#$!%*?&]{8,15}$/;

  const lettersRegex = /^[a-öA-Ö]+ [a-öA-Ö]+$/;

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const validatorArr = [

    function usernameValidator() {
      if (signUpForm.username.value.length > 0) {
        return true
      } else {
        document.querySelector('#username').nextElementSibling.classList.remove('hidden');
        return false
      }
    },
    function emailValidator() {
      if (emailRegex.test(signUpForm.email.value)) {
        return true
      } else {
        document.querySelector('#email').nextElementSibling.classList.remove('hidden');
        return false
      }
    },
    function fullNameValidator() {
      if (lettersRegex.test(signUpForm.name.value)) {
        return true
      } else {
        document.querySelector('#name').nextElementSibling.classList.remove('hidden');
        return false
      }

    },
    function passwordValidator() {

      if (passwordRegex.test(signUpForm.password.value)) {
        return true
      } else {
        document.querySelector('#password').nextElementSibling.classList.remove('hidden');
        return false
      }
    }];

  document.querySelectorAll('.input').forEach(inputElement => {
    inputElement.addEventListener('blur', (e) => {
      if (e.target.id === 'name' && lettersRegex.test(e.target.value)) {
        inputElement.nextElementSibling.classList.add('hidden');
      } else if (e.target.id === 'email' && emailRegex.test(e.target.value)) {
        inputElement.nextElementSibling.classList.add('hidden');
      } else if (e.target.id === 'password' && passwordRegex.test(e.target.value)) {
        inputElement.nextElementSibling.classList.add('hidden');
      } else if (e.target.id === 'username' && e.target.value.length > 0) {
        inputElement.nextElementSibling.classList.add('hidden');
      }
    })

    inputElement.addEventListener('input', e => {
      inputElement.nextElementSibling.classList.remove('hidden');
    })

  })
}



