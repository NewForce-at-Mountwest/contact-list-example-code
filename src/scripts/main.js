import loginHandler from "./auth/login"


/* This module is the entry point for the application and runs when the page loads */

// Display the login form
document.querySelector("#form-output").innerHTML = loginHandler.renderLoginForm();

// Activate login button
loginHandler.activateLoginButton();

// Activate button that takes you to the register form
loginHandler.activateRegisterButton();




