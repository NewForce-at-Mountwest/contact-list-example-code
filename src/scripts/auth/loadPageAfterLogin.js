import ContactList from "../Contacts/ContactList"
import ContactForm from "../Contacts/ContactForm"
import logOutHandler from "./logout"

// This module builds the contact list view once a user has logged in
const loadPageAfterLogin = () => {
// Builds logout button
document.querySelector("#form-output").innerHTML = logOutHandler.renderLogOutButton();
// Add click event to logout button
logOutHandler.activateLogOutButton();
//Builds Contact Form
document.querySelector("#form-output").innerHTML += ContactForm.buildForm();
// Adds event listener to save button
ContactForm.activateSaveButton()

// Builds Contact List
ContactList();

}

export default loadPageAfterLogin;