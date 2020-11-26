<?php
// This file creates a connection to the database

include 'config.php';

class DbConfig {
    protected $connection;

    public function __construct() {
        if (!isset($this->connection)) {
            $this->connection = new mysqli($_host,$_user,$_password,$_db);
            if (!$this->connection) {
                echo "Cannot connect to the database server";
                exit;
            }
        }
        return $this->connection;
    }
}

?>