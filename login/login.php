<?php
// login.php

// Define static email and password
$static_email = "user@example.com";
$static_password = "password123";

// Get email and password from POST request
$email = $_POST['email'];
$password = $_POST['password'];

// Check if the submitted email and password match the static ones
if ($email === $static_email && $password === $static_password) {
    header("Location: ../main/welcome_page.html");
} else {
echo "Invalid email or password.";
}
?>