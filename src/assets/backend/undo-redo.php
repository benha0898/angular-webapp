<?php
// This file handles Undoing and Redoing transactions.
// When an undo/redo occurs, change the "undone" value and run query to reverse the effect.

include "crud.php";
$crud = new Crud(); // Use this Crud object to run queries
$_POST = json_decode(file_get_contents("php://input"), true);
header('Content-Type: application/json');

if (isset($_POST) && !empty($_POST)) {
    // transac, cardTable, idColumn, column, transacTable
    $transac = $_POST['transac'];
    $cardTable = $_POST['cardTable'];
    $column = $_POST['column'];
    $transacTable = $_POST['transacTable'];
    $keys = array_keys($transac); //id, transac, amount, time, undone
    $time = strtotime($transac[$keys[3]]);
    
    $query = "UPDATE $cardTable SET $column=$column"
        . ($transac[$keys[4]] ? '+' : '-')
        . $transac[$keys[2]]
        . " WHERE " . $keys[0] . "="
        . $transac[$keys[0]]
        . ";";
    
    $results = $crud->execute($query);
    if ($results) {
        $query = "UPDATE $transacTable SET undone = NOT undone WHERE "
          . $keys[0] . "=" . $transac[$keys[0]]
          . " AND transac_time=" . $transac[$keys[3]] . ";";
        $results = $crud->execute($query);
    }
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