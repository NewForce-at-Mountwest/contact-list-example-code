import UserCollection from "../data/UserCollection"
import loadPageAfterLogin from "./LoadPageAfterLogin";


const registerHandler = {
    renderRegisterForm: () => {
       return `
        <div class="form">
        <h3>Create an Account</h3>
        <form>
            <input type="text" id="name-register" placeholder="Name">
            <input type="text" id="username-register" placeholder="Username">
            <input type="password" id="password-register" placeholder="Password">
        </form>
        <button id="register-btn-submit">Submit</button>
        </div>`
    },
    activateSubmitButton: () => {
        document.querySelector("#register-btn-submit").addEventListener("click", () => {

            const nameVal = document.querySelector("#name-register").value
            const usernameVal = document.querySelector("#username-register").value
            const passwordVal = document.querySelector("#password-register").value

            const userObject = {
              name: nameVal,
              username: usernameVal,
              password: passwordVal
            }

            console.log(userObject);
            UserCollection.addNewUser(userObject)
            .then((parsedUser)=> {
                console.log("this is parsed user in register", parsedUser);
                sessionStorage.setItem("userId", parsedUser.id)
                loadPageAfterLogin();
            })
        })
    }

}

export default registerHandler;