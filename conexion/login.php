<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];

    // Consultar el email del usuario
    $sql = "SELECT * FROM usuarios WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Verificar la contraseña
        if (password_verify($contraseña, $row['contraseña'])) {
            echo "Inicio de sesión exitoso";
            // Redirigir a la página de inicio
            header('Location: ../body/index.html');
        } else {
            echo "Contraseña incorrecta";
        }
    } else {
        echo "No existe una cuenta con ese email";
    }

    $conn->close();
}
?>
