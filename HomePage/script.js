// Add this at the start of your script.js or in a <script> tag
document.addEventListener('DOMContentLoaded', function() {
    fetch('../LoginPage/check_session.php')
        .then(response => response.json())
        .then(data => {
            if (!data.authenticated) {
                window.location.href = '../LoginPage/index.html';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            window.location.href = '../LoginPage/index.html';
        });
});

// Add logout function
function handleLogout() {
    fetch('../LoginPage/logout.php')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = '../LoginPage/index.html';
            }
        })
        .catch(error => console.error('Error:', error));
}


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Remove direct event listeners as we've updated href in HTML
function handleLogout() {
    // Add any logout logic if needed
    window.location.href = '../LoginPage/index.html';
}