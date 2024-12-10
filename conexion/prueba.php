<?php
include 'db.php'; // Asegúrate de que db.php contiene la conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];

    // Usar sentencia preparada para evitar inyección SQL
    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE email = :email");

    // Vincular el parámetro con bindParam() en lugar de bind_param()
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    
    // Ejecutar la consulta
    $stmt->execute();
    
    // Obtener el resultado de la consulta
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        // Verificar la contraseña
        if (password_verify($contraseña, $result['password'])) {
            echo "Inicio de sesión exitoso";

            // Redirigir a la página de inicio
            header('Location: ../inicio.html');
            exit(); // Asegurarse de que el script se detiene después de redirigir
        } else {
            echo "Contraseña incorrecta";
        }
    } else {
        echo "No existe una cuenta con ese email";
    }
}
?>
