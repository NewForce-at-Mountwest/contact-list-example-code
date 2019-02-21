const loginHandler = {
    buildLoginForm: () => {
        return `
        <div class="form" id="login-form">
            <h3>Welcome back!</h3>
            <form>
                <input type="text" placeholder="Username" id="login-username">
                <input type="text" placeholder="Password" id="login-password">
            </form>
            <button id="login-submit">Login</button>
            <button id="register-btn">Create an Account</button>
        </div>`
    }
    // Add method to handle a register click (this should render the register form)

    // Add a method to handle a login click (this should check to see if the password matches the user's password in the database, and if it does add their password to session storage)

    // Once they're in session storage, we can redner the page (i.e. import and execute functions from ContactForm and ContactList)
}

export default loginHandler;