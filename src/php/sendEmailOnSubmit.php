<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if($_SERVER["REQUEST_METHOD"] === "POST"){
    header('Content-Type: application/json');
    echo json_encode(['data'=>'hello']);
}