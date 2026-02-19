<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Example: Send an email using PHP's mail function
    $to = 'wahomewarish@gmail.com'; // Change this to your email address
    $subject = 'New Message from Contact Form';
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = ''; // Change this to the sender's email address

    if (mail($to, $subject, $body, $headers)) {
        echo 'Message sent successfully!';
    } else {
        echo 'Error sending message!';
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo 'Error: Method Not Allowed';
}
?>
