<?php
// Include the configuration file that contains database connection settings
require_once 'config.php';

try {
    // Execute a simple SQL query to check if the database connection is working
    $conn->query("SELECT 1");
    
    // If the query is successful, output a success message
    echo "Database connection successful!";
} catch(PDOException $e) {
    // If there is an error during the query execution, catch the exception
    // and terminate the script, displaying the error message
    die("Connection failed: " . $e->getMessage());
}
?>