<?php
/**
 * Created by PhpStorm.
 * User: dawid
 * Date: 29.08.17
 * Time: 23:10
 */

$servername = "localhost";
$username = "root";
$password = "lwoska918";

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM   GameCenter.comments WHERE id_game = ". $_GET['id'];
$result = $conn->query($sql);
$counter=0;
if ($result->num_rows > 0) {
    echo ('['
    );
    while($row = $result->fetch_assoc()) {
        echo ('{
            "id":'.$row["id"].',
            "desc":"'.$row["desc"].'",
            "rate":"'.$row["rate"].'"
        }');
        $counter++;

        if ($counter < $result->num_rows)
        {
            echo (",");
        }
    }
    echo (']');
} else {
}
$conn->close();
