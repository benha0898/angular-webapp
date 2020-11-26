<?php
// This file contains all the queries we will use. Each query is a function.

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include_once 'dbconn.php';

class Crud extends DbConfig{
    // Create a connection to the database, stored in $this->connection
    public function __construct() {
        parent::__construct();
    }

    // A function to handle all get queries. Used for GET requests.
    public function getData($query) {
        // print $query . "<br>";
        $results = $this->connection->query($query);
        // If no results found, return false
        if ($results==false) {
            // print "No results found<br>";
            return false;
        }

        // Otherwise, put all results into an array of rows, then return $rows
        // The fetch_assoc method returns the next row as an associative array
        // (e.g. ['uname'=>'Bob', 'pwd'=>'abc'])
        $rows = array();
        while ($row = $results->fetch_assoc()) {
            $rows[]=$row; // Each element in array $rows is an associative array
        }
        return $rows;
    }

    // A function to execute a query. Used for POST requests.
    public function execute($query) {
        $results = $this->connection->query($query);
        if ($results==false) {
            echo "Error: Cannot execute the command";
            return false;
        }
        else {
            return true;
        }
    }

    // A function to escape special characters in a string before using in an SQL query
    // e.g. a single-quote <'> will be escaped into two single-quotes <''>
    public function escape_string($value) {
        return $this->connection->real_escape_string($value);
    }
}

?>