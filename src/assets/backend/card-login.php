<?php
// This file receives card number and card type from Angular frontend,
// run query and return card details (or create new card).

include "crud.php";
$crud = new Crud(); // Use this Crud object to run queries
$_POST = json_decode(file_get_contents("php://input"), true);
header('Content-Type: application/json');

if (isset($_POST) && !empty($_POST)) {
    $cardNumber = $_POST['cardNumber'];
    $cardType = $_POST['cardType'];

    if ($cardType == "Point Card") {
        $query = "SELECT * FROM pointcards WHERE pcid=$cardNumber;";
        $query2 = "INSERT INTO pointcards VALUES ($cardNumber, 0, NULL, NULL);";
    }
    else {
        $query = "SELECT * FROM giftcards WHERE gcid=$cardNumber;";
        $query2 = "INSERT INTO giftcards VALUES ($cardNumber, 0);";
    }

    $results = $crud->getData($query);
    if (!$results) {
        if ($crud->execute($query2)) {
            $results = $crud->getData($query);
        }
    }
    if ($cardType == "Point Card") {
        array_push($results, $crud->getData("SELECT * FROM settings;"));
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