<?php
// Start a new session or resume the existing session
session_start();

// Check if the user is logged in by verifying the session variable 'logged_in'
// If the session variable is not set or is not true, the user is not authenticated
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    // Return a JSON response indicating that the user is not authenticated
    echo json_encode(['authenticated' => false]);
    exit; // Exit the script to prevent further execution
}

// If the user is authenticated, return a JSON response indicating success
// and include the user's role from the session
echo json_encode(['authenticated' => true, 'role' => $_SESSION['role']]);
?>