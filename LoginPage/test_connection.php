<?php
require_once 'config.php';
try {
    $conn->query("SELECT 1");
    echo "Database connection successful!";
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>