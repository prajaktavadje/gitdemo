const correctEmail = "admin@gmail.com";
const correctPassword = "admin123";

document.getElementById("loginForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === correctEmail && password === correctPassword) {
        document.getElementById("message").innerText =
            "Login Successful!";
    } else {
        document.getElementById("message").innerText =
            "Invalid Email or Password!";
    }

});