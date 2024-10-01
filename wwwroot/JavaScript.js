// Get the login and register forms
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Add event listeners to the forms
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    // TO DO: Implement login logic here
    console.log('Login attempt:', email, password);
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    // TO DO: Implement registration logic here
    console.log('Registration attempt:', name, email, password, confirmPassword);
});