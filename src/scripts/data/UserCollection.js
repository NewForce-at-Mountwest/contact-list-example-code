const UserCollection = {
  getUserByUserName: usernameParam => {
    return fetch(`http://localhost:8088/users?username=${usernameParam}`).then(
      r => r.json()
    );
  },
  addNewUser: userObject => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObject)
    }).then(r => r.json());
  }
};

export default UserCollection;
