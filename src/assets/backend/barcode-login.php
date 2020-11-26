<?php
// This file receives barcode from Angular frontend,
// run query and validate the login.

include "crud.php";
$crud = new Crud(); // Use this Crud object to run queries
$_POST = json_decode(file_get_contents("php://input"), true);
header('Content-Type: application/json');

if (isset($_POST) && !empty($_POST)) {
    $barcode = $_POST['barcode'];

    $query = "SELECT login_barcode FROM settings WHERE login_barcode=$barcode";

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