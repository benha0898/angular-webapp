<?php
// This file handles transactions using the given table, column, value and card id.
// When a transaction is done, add a new entry to the appropriate log table.

include "crud.php";
$crud = new Crud(); // Use this Crud object to run queries
$_POST = json_decode(file_get_contents("php://input"), true);
header('Content-Type: application/json');

if (isset($_POST) && !empty($_POST)) {
    $transac = $_POST['transac'];
    $table = $_POST['table'];
    $column = $_POST['column'];
    $value = $_POST['value'];
    $idcolumn = $_POST['idcolumn'];
    $id = $_POST['id'];

    $query = "UPDATE $table SET $column=$column+$value WHERE $idcolumn=$id;";
    $undo_query = "UPDATE $table SET $column=$column-$value WHERE $idcolumn=$id;";

    $results = $crud->execute($query);
    if ($results && $idcolumn=="pcid") {
        $results = $crud->execute("INSERT INTO pctransac VALUES ($id,'$transac',$value,UNIX_TIMESTAMP(),0);");
    }
    elseif ($results && $idcolumn=="gcid") {
        $results = $crud->execute("INSERT INTO gctransac VALUES ($id,'$transac',$value,UNIX_TIMESTAMP(),0);");
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