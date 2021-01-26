<?php
    $destinatario = 'guillejuanmanuel@gmail.com';//cooreo a donde se enviara
    $nombre = $_POST['nombre'];
    $asunto = $_POST['consulta'];
    $email = $_POST['email'];

    $header = "Enviado desde el cv";
    $mensajeCompleto = $asunto . "\n Atentamente:". $nombre;

    mail($destinatario, $mensajeCompleto, $header);
    echo"<script>alert('Correo enviado exitosamente')</script>";
    echo"<script>setTimeout(\"location.href='index.html'\",1000</script>";
?> 