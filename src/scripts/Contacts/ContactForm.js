// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.
import ContactCollection from "../data/ContactCollection";
import buildContactObject from "./ContactObjectBuilder";
import ContactList from "./ContactList";

const ContactForm = {
  buildForm: () => {
    return `
    <div class="form" id="contact-form">
      <h3>Add a New Contact</h3>
      <form action="">
        <input type="text"  id="contact-name" placeholder="Name">
        <input type="tel"  id="contact-phone" placeholder="Phone">
        <input type="email" id="contact-email" placeholder="Email">
      </form>
       <button id="save-contact">Save Contact</button>
    </div>`;
  },
  activateSaveButton: () => {
      document.querySelector("#form-output").addEventListener("click", () => {
        if(event.target.id === "save-contact"){

            // Get the user's input
            const nameVal = document.querySelector("#contact-name").value;
            const phoneVal = document.querySelector("#contact-phone").value;
            const emailVal = document.querySelector("#contact-email").value;

            // Turn the user's input into an object
            const objectToPost = buildContactObject(nameVal, phoneVal, emailVal)

            // Save the object to our database
            ContactCollection.saveNewContact(objectToPost)
            .then(() => {
                // Once the POST is complete, print all the contacts again
                ContactList();

                // Clear the form values
                document.querySelector("#contact-name").value = "";
                document.querySelector("#contact-phone").value = "";
                document.querySelector("#contact-email").value = "";

            })

        }

      })
  }
};

export default ContactForm;
