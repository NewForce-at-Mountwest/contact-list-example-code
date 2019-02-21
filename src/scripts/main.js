// // In main.js, import the ContactList component and the ContactForm component.
import ContactList from "./ContactList.js"
import ContactForm from "./ContactForm.js"


// Builds Contact Form
document.querySelector(".output").innerHTML = ContactForm.buildForm();

// Adds event listener to save button
ContactForm.activateSaveButton()

// Builds Contact List
ContactList();



