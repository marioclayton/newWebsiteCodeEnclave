<?php
http_response_code(404);
header("Content-Type: text/html");

// Debugging: Log to confirm if this script runs
error_log("404.php triggered: " . $_SERVER['REQUEST_URI']);

readfile("index.html");
exit();
