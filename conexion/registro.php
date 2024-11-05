<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];

    // Encriptar la contraseña antes de guardarla en la base de datos
    $hashedPassword = password_hash($contraseña, PASSWORD_DEFAULT);

    // Insertar los datos en la tabla, especificando la fecha
    $sql = "INSERT INTO usuarios (name, email, password, fecha_registro) VALUES ('$nombre', '$email', '$hashedPassword', NOW())";

    if ($conn->query($sql) === TRUE) {
        echo "Usuario registrado con éxito";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
