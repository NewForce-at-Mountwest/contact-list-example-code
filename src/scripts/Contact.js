// A Contact component that displays a person's name, phone number, and address.

const Contact = (singleContactObj) => {
   return ` <div>
   <h3>${singleContactObj.name}</h3>
   <p>${singleContactObj.phone}</p>
   <p>${singleContactObj.email}</p>
</div>`
}

export default Contact;