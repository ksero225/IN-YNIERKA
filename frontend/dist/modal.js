let loginButton = document.querySelector("#loginButton");
let userLogin;
let userPassword;
if (loginButton) {
    loginButton.addEventListener("click", (Event) => {
        getUserLoginAndPassword();
        if (userLogin == null || userPassword == null) {
            alert("Nie podano hasła lub loginu");
        }
        else {
            alert("login: " + userLogin + " hasło: " + userPassword);
        }
    });
}
;
const getUserLoginAndPassword = () => {
    userLogin = document.querySelector("#username").value;
    userPassword = document.querySelector("#password").value;
};
