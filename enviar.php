<?php

  $destino="bryan.a@kuper.mx";
  $nombre=$_POST["nombre"];
  $apellidos=$_POST["apellidos"];
  $telefono=$_POST["telefono"];
  $correo=$_POST["correo"];
  $contenido="Nombre: " . $nombre . "\nApellidos: " . $apellidos . "\nCorreo: " . $correo . "\nTelefono: " . $telefono;
  mail($destino,"Visitante Bokludoteca", $contenido);
  header("Location:index.html");
?>