// A Contact component that displays a person's name, phone number, and address.

const Contact = (singleContactObj) => {
   return `<div class="card" id="contact-card">
   <h3>${singleContactObj.name}</h3>
   <p>${singleContactObj.phone}</p>
   <p>${singleContactObj.email}</p>
   <button class="delete" id="delete-${singleContactObj.id}">Delete</button>
   <button class="edit" id="edit-${singleContactObj.id}">Edit</button>
</div>`
}

export default Contact;