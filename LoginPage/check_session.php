<?php
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    echo json_encode(['authenticated' => false]);
    exit;
}
echo json_encode(['authenticated' => true, 'role' => $_SESSION['role']]);
?>