<?php
// Enable error reporting for all types of errors and display them
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Include the configuration file which likely contains database connection settings
require_once 'config.php';

// Start a new session or resume the existing session
session_start();

// Set the content type of the response to JSON
header('Content-Type: application/json');

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the required fields are present in the POST request
    if (!isset($_POST['role_id']) || !isset($_POST['email']) || !isset($_POST['password'])) {
        // If any required field is missing, return a JSON response indicating failure
        echo json_encode(['success' => false, 'message' => 'Missing required fields']);
        exit; // Exit the script
    }

    // Retrieve the role ID, email (username), and password from the POST data
    $role = $_POST['role_id'];
    $username = $_POST['email'];
    $password = $_POST['password'];
    
    try {
        // Prepare a SQL statement to select the user from the database based on username, password, and role
        $stmt = $conn->prepare("SELECT * FROM users WHERE username = :username AND password = :password AND role_id = :role");
        
        // Bind the parameters to the SQL statement
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':role', $role);
        
        // Execute the prepared statement
        $stmt->execute();
        
        // Check if exactly one row was returned (indicating a successful login)
        if ($stmt->rowCount() == 1) {
            // Set session variables to indicate the user is logged in
            $_SESSION['logged_in'] = true;
            $_SESSION['username'] = $username;
            $_SESSION['role'] = $role;
            
            // Return a JSON response indicating success
            echo json_encode(['success' => true]);
        } else {
            // If no matching user was found, return a JSON response indicating invalid credentials
            echo json_encode(['success' => false, 'message' => 'Invalid username or password']);
        }
    } catch(PDOException $e) {
        // If there is a database error, return a JSON response indicating the error
        echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
    }
    exit(); // Exit the script
}
?>