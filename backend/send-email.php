<?php
// filepath: /backend/send-email.php

// Get POST data
$from_name = isset($_POST['from_name']) ? strip_tags($_POST['from_name']) : '';
$user_email = isset($_POST['user_email']) ? strip_tags($_POST['user_email']) : '';
$subject = isset($_POST['subject']) ? strip_tags($_POST['subject']) : 'Contact Form Submission';
$message = isset($_POST['message']) ? strip_tags($_POST['message']) : '';

if ($from_name && $user_email && $message) {
    $to = "support@codeenclave.com"; // Change to your receiving email
    $headers = "From: $from_name <$user_email>\r\n";
    $headers .= "Reply-To: $user_email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Name: $from_name\n";
    $body .= "Email: $user_email\n";
    $body .= "Subject: $subject\n";
    $body .= "Message:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        http_response_code(500);
        echo "Failed to send message.";
    }
} else {
    http_response_code(400);
    echo "Please fill in all required fields.";
}
?>