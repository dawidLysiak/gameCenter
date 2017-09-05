<?php
/**
 * Created by PhpStorm.
 * User: dawid
 * Date: 29.08.17
 * Time: 23:10
 */

$desc ='';
if (isset($_GET['order']) )
{
    if ($_GET['order'] == 'desc') {
        $desc = 'DESC';
    }
}

$servername = "localhost";
$username = "root";
$password = "lwoska918";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM   GameCenter.Game ORDER BY name ". $desc;
$result = $conn->query($sql);

if ($result->num_rows > 0) {
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
} else {
}
$conn->close();

