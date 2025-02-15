<?php
// Get the requested URL
$request_uri = $_SERVER['REQUEST_URI'];

// List of valid routes (adjust as needed)
$valid_routes = [
    '/',
    '/Services',
    '/Portfolio',
    '/ContactUs',
    '/Privacy',
    '/Quote',
    '/Branding',
    '/SEO',
    '/WebDev',
    '/RequestReceived'
];

// Check if the requested route is valid
if (in_array($request_uri, $valid_routes) || preg_match('/\.(?:js|css|png|jpg|jpeg|gif|ico|svg|woff2|ttf)$/', $request_uri)) {
    // Serve React app normally
    include 'index.html';
} else {
    // Serve a 404 response with index.html
    http_response_code(404);
    include 'index.html';
}
?>