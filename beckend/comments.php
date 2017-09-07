<?php

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

$sql = "SELECT * FROM   GameCenter.comments WHERE id_game = ". $_GET['id'];
$result = $conn->query($sql);


$counter=0;
if ($result->num_rows > 0) {
    echo ('['
    );
    // output data of each row
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
//    echo "0 results";
}
//print ('aaa');
$conn->close();
