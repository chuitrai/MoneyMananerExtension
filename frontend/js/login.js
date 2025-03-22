// js for login page
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // prevent the form from submitting

        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!validateEmail(email)) {
            alert("Invalid email address");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        }


        // Virtual authentication check (Can replace with API call)
        if (email === 'example@gmail.com' && password === 'password') {
            alert("Login successful!");
            window.location.href = 'overview.html';
        } else {
            alert("Invalid email or password");
            }
        
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
})