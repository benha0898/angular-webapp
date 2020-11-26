<?php
// This file receives username and password from Angular frontend,
// run query and validate the login.

include "crud.php";
include "config.php";
$crud = new Crud(); // Use this Crud object to run queries
$_POST = json_decode(file_get_contents("php://input"), true);
header('Content-Type: application/json');

if (isset($_POST) && !empty($_POST)) {
    $username = $_POST['username'];
    $password = $_POST['password'];


    $query = "SELECT uname FROM users WHERE uname='$username' AND pwd=AES_ENCRYPT('$password', strtolower($_password))";

    $results = $crud->getData($query);
    // echo ($results);
    echo json_encode($results);
    
}
else {
    var_dump($_POST);
    ?>
        {
            "success": false,
            "message": "POST Request is required."
        }
        <?php
}

?>