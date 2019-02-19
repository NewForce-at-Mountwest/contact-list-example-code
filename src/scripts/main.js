// In main.js, import the ContactList component and the ContactForm component.
import ContactList from "./ContactList.js"
import ContactForm from "./ContactForm.js"
import sayHello from "./sayHello.js"

// The user should see the contact form at the top of the view, and the list of contacts underneath it.

// Builds Contact Form
document.querySelector(".output").innerHTML = ContactForm.buildForm();

// Adds event listener to save button
ContactForm.saveContact()
// Builds Contact List
ContactList();

// Bonus: Are there any other modules that could be made? Do any modules have more than one possible responsibility? Perhaps something that is a general utility function.


sayHello();