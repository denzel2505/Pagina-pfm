<?php
$host = "localhost"; // Cambia esto si tu base de datos está en otro servidor
$user = "root"; // Tu usuario de MySQL
$password = ""; // La contraseña de tu usuario
$dbname = "elkinmb3"; // El nombre de tu base de datos

// Crear la conexión
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}else{
    echo "Conexión exitosa";
}
?>
