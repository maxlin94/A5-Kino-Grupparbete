document.addEventListener('DOMContentLoaded', function() {
document.querySelector('#loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  console.log('Användarnamn:', username, 'Lösenord:', password);
});
});