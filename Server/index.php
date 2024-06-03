<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Add this line to allow CORS

$response = [
    'status' => 'success',
    'message' => 'Hello, this is a response from index.php!'
];

echo json_encode($response);

?>
