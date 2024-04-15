document.addEventListener('DOMContentLoaded', function () {
    var signupForm = document.getElementById("signupForm");
    var loginForm = document.getElementById("loginForm");
    var forgotPasswordForm = document.getElementById("forgotPasswordForm");

    if (signupForm) {
        signupForm.addEventListener("submit", registerUser);
    }

    if (loginForm) {
        loginForm.addEventListener("submit", loginUser);
    }

    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener("submit", resetPassword);
    }
});

function registerUser(e) {
    e.preventDefault();
    var email = document.querySelector("#email").value;
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    var users = JSON.parse(localStorage.getItem("users")) || [];
    var existingUser = users.find(u => u.username === username);

    if (existingUser) {
        alert("Username already exists. Please choose a different username.");
    } else {
        var newUser = {
            email: email,
            username: username,
            password: password
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
    }
}

function loginUser(e) {
    e.preventDefault();
    var username = document.querySelector("#loginUsername").value;
    var password = document.querySelector("#loginPassword").value;

    var users = JSON.parse(localStorage.getItem("users")) || [];
    var user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login successful!");
        // Save user details in session storage for future use
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        // Redirect to index or dashboard page
        window.location.href = "./index.html"; // Adjust as per your page structure
    } else {
        alert("Login failed! Incorrect username or password.");
    }
}

function resetPassword(e) {
    e.preventDefault();
    var username = document.querySelector("#forgotUsername").value;
    var newPassword = document.querySelector("#newPassword").value;

    var users = JSON.parse(localStorage.getItem("users")) || [];
    var userIndex = users.findIndex(u => u.username === username);

    if (userIndex !== -1) {
        // Update the password for the user
        users[userIndex].password = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Password reset successful!");
    } else {
        alert("User not found!");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var signupButton = document.getElementById("signupButton");

    if (signupButton) {
        signupButton.addEventListener("click", function() {
            window.location.href = "/assistant/AI.html";
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById("loginButton");

    if (loginButton) {
        loginButton.addEventListener("click", function() {
            window.location.href = "/assistant/AI.html";
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var doneButton = document.getElementById("doneButton");

    if (doneButton) {
        doneButton.addEventListener("click", function() {
            window.location.href = "./index.html";
        });
    }
});
