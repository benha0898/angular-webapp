<?php
// This file calls query to return the appropriate transac log table.

include "crud.php";
$crud = new Crud(); // Use this Crud object to run queries
$_POST = json_decode(file_get_contents("php://input"), true);
header('Content-Type: application/json');

if (isset($_POST) && !empty($_POST)) {
    $table = $_POST['table'];
    $start = $_POST['start'];
    $end = $_POST['end'];

    $query = "SELECT * FROM $table WHERE transac_time>='$start' AND transac_time<='$end';";

    $results = $crud->getData($query);
    if ($results) {
        echo json_encode($results, JSON_NUMERIC_CHECK);
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