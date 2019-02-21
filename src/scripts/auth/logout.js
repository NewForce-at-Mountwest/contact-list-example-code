const logOutHandler = {
    renderLogOutButton: () => {
        return `<button id="logout">Logout</button>`
    },
    activateLogOutButton: () => {
        document.querySelector("#logout").addEventListener("click", () => {
            sessionStorage.removeItem("userId")
        })
    }
}

export default logOutHandler;