<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require 'vendor/autoload.php'; // Loads PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Get JSON data
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo "Invalid request.";
    exit;
}

$name = htmlspecialchars($data["from_name"]);
$company = htmlspecialchars($data["company"]);
$email = filter_var($data["email"], FILTER_VALIDATE_EMAIL);
$phone = htmlspecialchars($data["phone"]);
$subject = strip_tags($data["subject"]);
$message = htmlspecialchars($data["message"]);

if (!$email) {
    echo "Invalid email address.";
    exit;
}

$mail = new PHPMailer(true);

try {
    // Gmail SMTP settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'youremail@gmail.com';  // Replace with your Gmail address
    $mail->Password = 'pass';     // Replace with your Gmail App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Email settings
    $mail->setFrom('youremail@gmail.com', 'Your Name');
    $mail->addAddress('youremail@gmail.com'); // Where the email will be sent

    $mail->Subject = $subject;
    $mail->Body = "Name: $name\nCompany: $company\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

    $mail->send();
    echo "Email sent successfully!";
} catch (Exception $e) {
    echo "Failed to send email: {$mail->ErrorInfo}";
}
?>
