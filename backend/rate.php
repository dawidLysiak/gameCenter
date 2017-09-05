<?php
/**
 * Created by PhpStorm.
 * User: dawid
 * Date: 29.08.17
 * Time: 23:10
 */

$rate = $_POST['rate'];
$rcomment = $_POST['comment'];
$id = $_POST['id'];

$servername = "localhost";
$username = "root";
$password = "lwoska918";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO  GameCenter.comments (id_game,`desc`,rate)  VALUES (". $id. ",'". $rcomment. "',". $rate.")";
$result = $conn->query($sql);

$conn->close();

