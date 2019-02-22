import UserCollection from "../data/UserCollection"
import registerHandler from "./Register"
import loadPageAfterLogin from "./LoadPageAfterLogin"



const loginHandler = {
    renderLoginForm: () => {
        return `
        <div class="form">
        <h3>Welcome back!</h3>
        <form>
            <input type="text" id="username-login" placeholder="Username">
            <input type="text" id="password-login" placeholder="Password">
        </form>
        <button id="login-btn">Login</button>
        <button id="register-btn">Register</button>
        </div>`
    },
    activateLoginButton: function(){
        document.querySelector("#login-btn").addEventListener("click", ()=>{
               // Get the values from the login form
        const userNameVal = document.querySelector("#username-login").value;
        const passwordVal = document.querySelector("#password-login").value;

        // Look up the user's information in the db based on their user name
        UserCollection.getUserByUserName(userNameVal)
        .then((parsedUser) => {
          parsedUser = parsedUser[0];

          // Check to make sure their password matches
          if(passwordVal === parsedUser.password){
            // If so, store their id in session storage
            sessionStorage.setItem("userId", parsedUser.id)
            loadPageAfterLogin()
          } else {
            console.warn("Your password is incorrect")
          }
        })
        })
    },
    activateRegisterButton: () => {
        document.querySelector("#register-btn").addEventListener("click", ()=>{
            // Build the form
            document.querySelector("#form-output").innerHTML = registerHandler.renderRegisterForm();

            // Add the event listener to the button in the register form
            registerHandler.activateSubmitButton();
        })

    }
}

export default loginHandler;