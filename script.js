
// Mobile navigation menu
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

// Login form
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    document.getElementById("loginMessage").textContent =
        "Demo login submitted for " + email;
}

// Contact form
function handleContact(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("contactMessage").textContent =
        "Thank you, " + name + "! Your message has been received.";

    event.target.reset();
}
