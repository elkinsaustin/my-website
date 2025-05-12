/*
Union Road Nature Project Website
   Author: Austin Elkins
    Date: 2025-05-11
    Filename: contactus.js

*/

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sendButton').addEventListener('click', function () {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const email = document.getElementById('email').value;

        if (firstName && lastName && phoneNumber && email) {
            alert(`Summary:\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail: ${email}`);
        } else {
            alert('Please fill out all required fields.');
        }
    });

    document.getElementById('resetButton').addEventListener('click', function () {
        document.getElementById('contactForm').reset();
    });
});