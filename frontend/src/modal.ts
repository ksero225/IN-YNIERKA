let loginButton: HTMLButtonElement = document.querySelector("#loginButton");
let userLogin: String;
let userPassword: String;


if(loginButton){
    loginButton.addEventListener("click", (Event) => {
        getUserLoginAndPassword();
        if(userLogin == null || userPassword == null){
            alert("Nie podano hasła lub loginu");
        }else{
            alert("login: " + userLogin + " hasło: " + userPassword);
        }
    });
};

const getUserLoginAndPassword = () => {
    userLogin = (document.querySelector("#username") as HTMLInputElement).value;
    userPassword =  (document.querySelector("#password") as HTMLInputElement).value;

}
