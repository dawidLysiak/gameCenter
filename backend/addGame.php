<?php



$plik_tmp = $_FILES['pic']['tmp_name'];
$plik_nazwa = $_FILES['pic']['name'];
$plik_rozmiar = $_FILES['pic']['size'];
$picName = $plik_nazwa;

$name = $_POST['name'];
$desc = $_POST['desc'];
$category = $_POST['category'];
//echo $name;

$servername = "localhost";
$username = "root";
if(is_uploaded_file($plik_tmp)) {
     move_uploaded_file($plik_tmp, "/home/dawid/Dokumenty/temp/$plik_nazwa");
//    echo $a;
//    echo "Plik: <strong>$plik_nazwa</strong> o rozmiarze
//    <strong>$plik_rozmiar bajtów</strong> został przesłany na serwer!";
}

$plik_tmp = $_FILES['game']['tmp_name'];
$plik_nazwa = $_FILES['game']['name'];
$plik_rozmiar = $_FILES['game']['size'];

if(is_uploaded_file($plik_tmp)) {

// Create connection
    $conn = new mysqli($servername, $username, $password);

// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
//echo "Connected successfully";
    
    $a = move_uploaded_file($plik_tmp, "sciezka/$plik_nazwa");
//    echo $a;
//    echo "Plik: <strong>$plik_nazwa</strong> o rozmiarze
//    <strong>$plik_rozmiar bajtów</strong> został przesłany na serwer!";
    $sql = "INSERT INTO GameCenter.Game (name,descryption,category,ico_path,file_path) VALUES  ('". $name. "','". $desc. "','". $category."','".$picName."','".$plik_nazwa."')";
    echo $sql;
$result = $conn->query($sql);
echo $sql;
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo ('{
                    "id":'.$row["idd"]).'
                }';
    }
} else {
//    echo "0 results";
}
//print ('aaa');
    header("Location: http://localhost:3000/listGames");

}
echo '
<link rel="stylesheet" type="text/css" href="css/style.css" media="screen" />
<div class="logout">
    <p align="right"><a href="http://localhost">Wyloguj</a></p>
</div>


<div class="centered">
<div class="container">
    <div class="timeline">
        <div class="row">
            <nav class="navbar navbar-inverse" role="navigation">
                <div class="container">


                    <ul class="nav navbar-nav">
                    </ul>
                </div>
            </nav>
        </div>



        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="form_main">
                        <h4 class="heading"><strong>Dodaj </strong> Grę <span></span></h4>
                        <div class="form">
                            <form action="addGame.php" method="POST" enctype="multipart/form-data">
                                Tytuł <input id="name" name="name" type="text" class="txt" > <br>
                                Opis <input id="desc" name="desc"type="text" class="txt" > <br>
                                Kategoria <input id="category"name="category" type="text" class="txt" > <br>
                                Wybierz zdjęcie  <input type="file" name="pic" accept="image/*" #image>
                                Dodaj plik z grą <input type="file" name="game"  ><br><br>
                                  <input type="submit" class="btn btn-primary"  value="Wyslij">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        ';
?>
