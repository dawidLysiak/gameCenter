<?php
/**
 * Created by PhpStorm.
 * User: dawid
 * Date: 29.08.17
 * Time: 23:10
 */

//echo ("login". $_POST['login']);
//echo ("\npassword". $_POST['password']);
$name = $_POST['name'];
$desc = $_POST['desc'];
$category = $_POST['category'];
$image = $_POST['image'];
$file = $_POST['file'];

echo $name. "<br>";
echo $desc. "<br>";
echo $category. "<br>";
echo $image. "<br>";
echo $file. "<br>";


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

//$sql = "INSERT INTO  GameCenter.comments (id_game,`desc`,rate)  VALUES (". $id. ",'". $rcomment. "',". $rate.")";
//$result = $conn->query($sql);
//echo $sql;
//if ($result->num_rows > 0) {
//    // output data of each row
//    while($row = $result->fetch_assoc()) {
//        echo ('{
//                    "id":'.$row["idd"]).'
//                }';
//    }
//} else {
////    echo "0 results";
//}
////print ('aaa');
$conn->close();

