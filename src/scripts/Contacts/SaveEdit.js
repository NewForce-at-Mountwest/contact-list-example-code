import buildContactObject from "./ContactObjectBuilder";
import ContactCollection from "../data/ContactCollection";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

const handleEditedContact = () => {
  document.querySelector("#form-output").addEventListener("click", () => {
    if (event.target.id.includes("edit-contact")) {
      // Get the user's input
      const nameVal = document.querySelector("#contact-name").value;
      const phoneVal = document.querySelector("#contact-phone").value;
      const emailVal = document.querySelector("#contact-email").value;

      const contactId = event.target.id.split("-")[2];

      // Turn the user's input into an object
      const objectToPost = buildContactObject(nameVal, phoneVal, emailVal);

      ContactCollection.editContact(contactId, objectToPost).then(() => {
        ContactList();
        document.querySelector("#form-output").innerHTML = ContactForm.buildForm();
      });
    }
  });
};

export default handleEditedContact;
