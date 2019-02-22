import ContactCollection from "../data/ContactCollection"
import ContactList from "./ContactList"

const activateDeleteButtons = () => {
    document.querySelector("#contacts-output").addEventListener("click", () => {
        if(event.target.classList.contains("delete")){
            const idToDelete = event.target.id.split("-")[1];
            ContactCollection.deleteContact(idToDelete)
            .then(ContactList)
        }
    })
}

export default activateDeleteButtons;