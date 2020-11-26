<?php
// This file edits account info

include "crud.php";
include 'config.php';

$crud = new Crud(); // Use this Crud object to run queries
$_POST = json_decode(file_get_contents("php://input"), true);
header('Content-Type: application/json');

if (isset($_POST) && !empty($_POST)) {
    $uname = $_POST['uname'];
    $password = $_POST['password'];
    
    $query = "SELECT * FROM users WHERE uname='$uname';";
    $query2 = "INSERT INTO users(uname,pwd) VALUES ('$uname', AES_ENCRYPT('$password', strtolower($_password)));";

    $results = $crud->getData($query);
    if ($results) {
        ?>
        {
            "success": false,
            "message": "Username already exists!"
        }
        <?php
    }
    else {
        $results = $crud->execute($query2);
        if (!$results) {
            ?>
            {
                "success": false,
                "message": "Can't create new account."
            }
            <?php
        }
        else {
            ?>
            {
                "success": true,
                "message": "Account <?php "$uname" ?> created."
            }
            <?php
        }
    }
    
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