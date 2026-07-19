<?php
// filepath: /backend/send-quote.php

$from_name = isset($_POST['from_name']) ? strip_tags($_POST['from_name']) : '';
$company = isset($_POST['company']) ? strip_tags($_POST['company']) : '';
$email = isset($_POST['email']) ? strip_tags($_POST['email']) : '';
$phone = isset($_POST['phone']) ? strip_tags($_POST['phone']) : '';
$subject = isset($_POST['subject']) ? strip_tags($_POST['subject']) : 'Quote Request';
$message = isset($_POST['message']) ? strip_tags($_POST['message']) : '';

if ($from_name && $email && $message) {
    $to = "support@codeenclave.com"; // Change to your receiving email
    $headers = "From: $from_name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Name: $from_name\n";
    $body .= "Company: $company\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Subject: $subject\n";
    $body .= "Message:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Quote request sent successfully!";
    } else {
        http_response_code(500);
        echo "Failed to send quote request.";
    }
} else {
    http_response_code(400);
    echo "Please fill in all required fields.";
}
?>