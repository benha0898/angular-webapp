<?php
// This file handles Deleting a row in a table.

include "crud.php";
$crud = new Crud(); // Use this Crud object to run queries
$_POST = json_decode(file_get_contents("php://input"), true);
header('Content-Type: application/json');

if (isset($_POST) && !empty($_POST)) {
    // transac, cardTable, idColumn, column, transacTable
    $table = $_POST['table'];
    $id_row = $_POST['id_row'];
    $id = $_POST['id'];
    
    $query = "DELETE FROM $table WHERE $id_row=$id;";
    
    $results = $crud->execute($query);
    if ($results) {
        echo json_encode($results);
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