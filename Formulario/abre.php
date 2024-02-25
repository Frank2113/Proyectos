<?php

$conexion = new mysqli("localhost","root","","comex");
    if($conexion){
        echo "la gestion fue exitosa!";
    }else{
        echo "fallo la gestion";
    }
?>
