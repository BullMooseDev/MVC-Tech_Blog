const signup = function(e) {
    e.preventDefault();

    const username = document.getElementById("username-signup").value;
    const email = document.getElementById("email-signup").value;
    const password = document.getElementById("password-signup").value;

    fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify({
            username,
            email,
            password
        }),
        headers: { "Content-Type": "application/json"}
    })
    .then(function() {
        document.location.replace('/')
    })
}

document.querySelector('.signup-form').addEventListener("submit", signup)