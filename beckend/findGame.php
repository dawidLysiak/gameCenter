<?php


$text = $_GET['text'];

$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";

$sql = "SELECT * FROM   GameCenter.Game WHERE name LIKE '%".$text."%'";
//echo $sql;
$result = $conn->query($sql);

//if ($result->num_rows > 0) {
    // output data of each row
    echo ('['
            );
    $counter = 0;
    while($row = $result->fetch_assoc()) {
        echo ('{
            "id":'.$row["id"].',
            "name":"'.$row["name"].'",
            "ico_path":"'.$row["ico_path"].'",
            "file_path":"'.$row["file_path"].'",
            "descryption":"'.$row["descryption"].'",
            "rate":'.$row["rate"].',
            "category":"'.$row["category"].'"
        }');
        $counter++;

        if ($counter < $result->num_rows)
        {
            echo (",");
        }
    }
    echo (']');
//} else {
////    echo "0 results";
//}
//print ('aaa');
$conn->close();

