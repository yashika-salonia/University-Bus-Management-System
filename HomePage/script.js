// Wait for the DOM to fully load before executing the following code
document.addEventListener('DOMContentLoaded', function() {
    // Make a request to check the user's session status
    fetch('../LoginPage/check_session.php')
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // If the user is not authenticated, redirect them to the login page
            if (!data.authenticated) {
                window.location.href = '../LoginPage/index.html';
            }
        })
        .catch(error => {
            // Log any errors that occur during the fetch and redirect to the login page
            console.error('Error:', error);
            window.location.href = '../LoginPage/index.html';
        });
});

// Function to handle user logout
function handleLogout() {
    // Make a request to log the user out
    fetch('../LoginPage/logout.php')
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // If the logout is successful, redirect to the login page
            if (data.success) {
                window.location.href = '../LoginPage/index.html';
            }
        })
        .catch(error => console.error('Error:', error)); // Log any errors that occur during logout
}

// Menu and navigation functionality
let menuIcon = document.querySelector('#menu-icon'); // Select the menu icon element
let navbar = document.querySelector('.navbar'); // Select the navbar element
let sections = document.querySelectorAll('section'); // Select all section elements on the page
let navlinks = document.querySelectorAll('header nav a'); // Select all navigation links

// Highlight the active link based on the current scroll position
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // Get the current vertical scroll position
        let offset = sec.offsetTop - 150; // Calculate the offset for the section
        let height = sec.offsetHeight; // Get the height of the section
        let id = sec.getAttribute('id'); // Get the ID of the section
        
        // Check if the current scroll position is within the bounds of the section
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active'); // Remove 'active' class from all links
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active'); // Add 'active' class to the current link
            });
        }
    });
};

// Optional: Mobile menu toggle functionality (currently commented out)
// Uncomment the following lines to enable mobile menu toggle
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x'); // Toggle the menu icon style
//     navbar.classList.toggle('active'); // Toggle the active class on the navbar
// };