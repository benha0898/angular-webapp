<?php
// This file calls query to return the appropriate transac log table.

include "crud.php";
$crud = new Crud(); // Use this Crud object to run queries
$_POST = json_decode(file_get_contents("php://input"), true);
header('Content-Type: application/json');

if (isset($_POST) && !empty($_POST)) {
    $pcid = $_POST['pcid'];

    if ($pcid != -1) {
        $query = "SELECT * FROM pointcards WHERE pcid LIKE '$pcid%';";
    }
    else {
        $query = "SELECT * FROM pointcards;";
    }

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