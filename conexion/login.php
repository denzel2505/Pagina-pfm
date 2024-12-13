<?php
session_start(); // Inicia la sesión
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'] ?? '';
    $contraseña = $_POST['contraseña'] ?? '';

    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE email = :email");
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        if (password_verify($contraseña, $result['password'])) {
            // Guarda información del usuario en la sesión
            $_SESSION['user_id'] = $result['id']; // ID del usuario
            $_SESSION['user_name'] = $result['name']; // Nombre del usuario

            echo "Inicio de sesión exitoso";
            header('Location: ../inicio.html');
            exit();
        } else {
            echo "Contraseña incorrecta";
        }
    } else {
        echo "No existe una cuenta con ese email";
    }
}
?>
