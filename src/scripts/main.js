// // In main.js, import the ContactList component and the ContactForm component.
import ContactList from "./ContactList.js"
import ContactForm from "./ContactForm.js"
// import LoginHandler from "./Login.js"

// Uncomment this out to show the login form right when the page loads
// document.querySelector(".output").innerHTML = LoginHandler.buildLoginForm();

// Builds Contact Form
document.querySelector(".output").innerHTML = ContactForm.buildForm();

// Adds event listener to save button
ContactForm.activateSaveButton()

// Builds Contact List
ContactList();



