// A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.

const ContactCollection = {
  saveNewContact: contactObj => {
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
  }
};

export default ContactCollection;
