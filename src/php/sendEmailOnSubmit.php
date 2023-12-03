<?php

if($_SERVER['method'] === "POST"){
    return json_encode(['data'=>'hello']);
}