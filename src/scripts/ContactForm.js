// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.
import ContactCollection from "./ContactCollection";
const ContactForm = {
  buildForm: () => {
    return `<form action="" id="contact-form">
        <input type="text" id="contact-name" placeholder="Name">
        <input type="tel" id="contact-phone" placeholder="Phone">
        <input type="email" id="contact-email" placeholder="Email">
    </form>
    <button id="save-contact">Save Contact</button>`;
  },
  saveContact: () => {
      document.querySelector(".output").addEventListener("click", () => {
        if(event.target.id === "save-contact"){
            const nameVal = document.querySelector("#contact-name").value;
            const phoneVal = document.querySelector("#contact-phone").value;
            const emailVal = document.querySelector("#contact-email").value;

            const contactObject = {
                name: nameVal,
                phone: phoneVal,
                email: emailVal
            }

            ContactCollection.saveNewContact(contactObject)
            .then(() => {
                return ContactCollection.getAllContacts()
            })
            .then((contacts) => {
                console.log(contacts)
            })
        }

      })
  }
};

export default ContactForm;
