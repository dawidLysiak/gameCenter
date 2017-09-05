<?php
/**
 * Created by PhpStorm.
 * User: dawid
 * Date: 29.08.17
 * Time: 23:10
 */

//echo ("login". $_POST['login']);
//echo ("\npassword". $_POST['password']);


$servername = "localhost";
$username = "root";
$password = "lwoska918";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";

$sql = "SELECT * FROM   GameCenter.User WHERE name = '". $_POST['login']."' AND password = '". $_POST['password']. "'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo ('{
                    "id":'.$row["idd"]).'
                }';
    }
} else {
}
$conn->close();

