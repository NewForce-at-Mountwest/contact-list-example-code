const logOutHandler = {
  renderLogOutButton: () => {
    return `<button id="logout">Logout</button>`;
  },
  activateLogOutButton: () => {
    document.querySelector("#form-output").addEventListener("click", () => {
      if (event.target.id === "logout") {
        sessionStorage.removeItem("userId");
      }
    });
  }
};

export default logOutHandler;
