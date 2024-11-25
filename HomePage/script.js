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

// Logout function
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

// Menu and navigation functionality
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Scroll active link highlighting
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

// Optional: Mobile menu toggle (uncomment if needed)
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };