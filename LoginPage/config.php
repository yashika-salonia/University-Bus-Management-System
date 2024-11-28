<?php
// Define the database connection parameters
$host = "localhost"; // The hostname of the database server
$username = "root"; // The username to connect to the database
$password = ""; // The password for the database user
$database = "bus_management"; // The name of the database to connect to

try {
    // Create a new PDO instance to connect to the MySQL database
    $conn = new PDO("mysql:host=$host;dbname=$database", $username, $password);
    
    // Set the PDO [php data objects] error mode to exception to handle errors gracefully
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    // If the connection fails, catch the exception and display an error message
    echo "Connection failed: " . $e->getMessage();
}
?>