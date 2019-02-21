
import BuildContact from "./Contact.js"
import ContactCollection from "../data/ContactCollection.js"

// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.


const ContactList = () => {
    document.querySelector("#contacts-output").innerHTML = "";
    ContactCollection.getAllContacts()
    .then(contacts => {
        contacts.forEach(singleContact => {
            document.querySelector("#contacts-output").innerHTML += BuildContact(singleContact);
        })

    })
}

export default ContactList;