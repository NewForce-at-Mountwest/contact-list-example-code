import ContactCollection from "../data/ContactCollection";
import handleEditedContact from "./SaveEdit";


const activateEditButton = () => {
    document.querySelector("#contacts-output").addEventListener("click", () => {
        if(event.target.classList.contains("edit")){
            ContactCollection.getSingleContact(event.target.id.split("-")[1])
            .then((singleContact) => {
                document.querySelector("#contact-name").value = singleContact.name;

                document.querySelector("#contact-phone").value = singleContact.phone;

                document.querySelector("#contact-email").value = singleContact.email;

                document.querySelector("#save-contact").textContent = "Edit Contact";
                document.querySelector("#save-contact").id= `edit-contact-${singleContact.id}`;

                handleEditedContact();

            })
        }
    })
}

export default activateEditButton;