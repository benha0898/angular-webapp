<?php
// This file handles the settings table (addPoint and Redeem)

include "crud.php";
$crud = new Crud(); // Use this Crud object to run queries
$_POST = json_decode(file_get_contents("php://input"), true);
header('Content-Type: application/json');

if (isset($_POST)) {
    if (empty($_POST)) {
        $results = $crud->getData("SELECT * FROM settings;");
        if ($results) {
            echo json_encode($results);
        }
    }
    else {
        $setting = $_POST['setting'];
        $amount = $_POST['amount'];
        $query = "UPDATE settings SET $setting=$amount;";
        
        $results = $crud->execute($query);
        if ($results) {
            echo json_encode($results);
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