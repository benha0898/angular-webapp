<?php
// This file handles Editing a row in Pointcards table.

include "crud.php";
$crud = new Crud(); // Use this Crud object to run queries
$_POST = json_decode(file_get_contents("php://input"), true);
header('Content-Type: application/json');

if (isset($_POST) && !empty($_POST)) {
    // pcid, name, phone
    $pcid = $_POST['pcid'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    
    $query = "UPDATE pointcards SET name='$name', phone=$phone WHERE pcid=$pcid;";
    
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