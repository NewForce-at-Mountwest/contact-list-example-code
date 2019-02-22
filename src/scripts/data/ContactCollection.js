// A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.

const ContactCollection = {
  saveNewContact: contactObj => {
    debugger;
    return fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactObj)
    });
  },
  getAllContacts: () => {
    const activeUserId = sessionStorage.getItem("userId");
    return fetch(`http://localhost:8088/contacts?userId=${activeUserId}`).then(r => r.json());
  },
  deleteContact: (contactId) => {
    return fetch(`http://localhost:8088/contacts/${contactId}`, {
      method: "DELETE"
    })
  },
  getSingleContact: (contactId) => {
    return fetch(`http://localhost:8088/contacts/${contactId}`)
    .then(r=> r.json())
  },
  editContact: (contactId, contactObj) => {
    return fetch(`http://localhost:8088/contacts/${contactId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactObj)
    });
  }
};

export default ContactCollection;
