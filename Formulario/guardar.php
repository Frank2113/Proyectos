<?php
    include("abre.php");
    $Nombre           =$_POST['Nombre'];
    $Apellidos        =$_POST['Apellidos'];
    $Calle            =$_POST['Calle'];
    $Cpostal          =$_POST['Cpostal'];
    $Colonia          =$_POST['Colonia'];
    $Telefono         =$_POST['Telefono'];
    


    $consulta = "INSERT INTO clientes (Nombre, Apellidos, Calle, Cpostal, Colonia, Bebida) VALUES
    ('$Nombre','$Apellidos','$Calle','$Cpostal','$Colonia','$Telefono')";

    if($conexion->query ($consulta) === TRUE){
        header("Location: index.html");
    }else{
        echo "Error: " . $consulta . "<br>" . $conexion->error;
    }
    $conexion->close();
?>