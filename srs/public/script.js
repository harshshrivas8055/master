// script.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const signupContainer = document.getElementById('signupContainer');
    const showSignupLink = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');

    showSignupLink.addEventListener('click', function(e) {
        e.preventDefault();
        signupContainer.classList.remove('hidden');
    });

    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        signupContainer.classList.add('hidden');
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        // Send login request to backend
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        // Send signup request to backend
    });
});
