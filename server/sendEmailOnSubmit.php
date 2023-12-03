<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if($_SERVER["REQUEST_METHOD"] === "POST"){
    // Retrieve the raw JSON data from the request body
    $jsonData = file_get_contents('php://input');

    // Decode the JSON data
    $formData = json_decode($jsonData, true);

    // Check if JSON decoding was successful
    if ($formData === null) {
        // Handle JSON decoding error
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid JSON data']);
        exit();
    }

    if(!isset($formData['name'], $formData['email'],$formData['phone'])
        || empty($formData['name']) ||  empty($formData['email']) || empty($formData['phone'])){
        http_response_code(400);
        echo json_encode(['error'=>'missing fields']);
        exit();
    }

    // Access form fields
    $name = htmlspecialchars($formData['name'], ENT_QUOTES, 'UTF-8');
    $email = filter_var($formData['email'], FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email']);
        exit();
    }

    $phone = filter_var($formData['phone'], FILTER_SANITIZE_NUMBER_INT);

    $budget = isset($formData['budget']) && !empty($formData['budget']) ?
        filter_var($formData['budget'], FILTER_SANITIZE_NUMBER_INT): null;

    $about_company = isset($formData['about_company']) && !empty($formData['about_company']) ?
        htmlspecialchars($formData['about_company']) : null;

    $description = isset($formData['description']) && !empty($formData['description']) ?
        htmlspecialchars($formData['description']) : null;

    $headers = 'Content-Type: text/html; charset=utf-8';

    $to='atefe@bime.see5.net';
    $subject = 'consult request';

    $message = 'name: '.$name  .' <br /> ' .'email: ' . $email  .' <br /> ' .'phone: ' . $phone ;
    $message .= !is_null($budget) ?  ' <br /> ' .'budget: ' . $budget :"";
    $message .= !is_null($description) ? ' <br /> ' .'description: ' . $description : "";
    $message .= !is_null($about_company) ?  ' <br /> ' .'about company: ' . $about_company : "";

    mail($to,$subject, $message, $headers);
    echo json_encode(['success' => 'success']);
}