<?php
// This file edits account info

include "crud.php";
include "config.php";

$crud = new Crud(); // Use this Crud object to run queries
$_POST = json_decode(file_get_contents("php://input"), true);
header('Content-Type: application/json');

if (isset($_POST) && !empty($_POST)) {
    $old_uname = $_POST['old_uname'];
    $old_password = $_POST['old_password'];
    $new_uname = $_POST['new_uname'];
    $new_password = $_POST['new_password'];

    $query = "SELECT * FROM users WHERE uname='$old_uname' AND pwd=AES_ENCRYPT('$old_password', strtolower($_password));";
    $query2 = "UPDATE users SET uname='$new_uname', pwd=AES_ENCRYPT('$new_password', strtolower($_password)) WHERE uname='$old_uname';";

    $results = $crud->getData($query);
    if (!$results) {
        ?>
        {
            "success": false,
            "message": "Inccorect username or password!!"
        }
        <?php
    }
    else {
        $results = $crud->execute($query2);
        if (!$results) {
            ?>
            {
                "success": false,
                "message": "Can't update account info."
            }
            <?php
        }
        else {
            ?>
            {
                "success": true,
                "message": "Account Edited"
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