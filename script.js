document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById("form-feedback");

form.addEventListener('submit',function(event) {
       event.preventDefault();
       //retriveal and trimming of username
       const username = document.getElementById('username').value.trim();
       const password = document.getElementById('password').value.trim();
       const email = document.getElementById('email').value.trim();
})
let isValid = true;
let messages = [];
if (username.length < 3) {
    isValid = false;
    messages.push('username must be at least 3 characters long');
}
if (!email.includes('@')) {
    isValid = false;
    messages.push('Email should contain @');
}

if (!email.includes('.')) {
    isValid = false;
    messages.push('Email should contain a period (.)');
}


if (password.length > 8) {
    isValid = false;
    messages.push('password should be at least 8 characters long');
}
feedbackDiv.style.display = 'block';
if (isValid) {
    feedbackDiv.textContent = 'Registration successful'
    feedbackDiv.style.color = '#28a745';
}else{
    feedbackDiv.innerHTML = messages.join('<br>');
    feedbackDiv.style.color = '#dc3545';
}
});
