<?php
  $jsondata = array();

  if( isset($_GET['datos']) ) {
        $jsondata = $_GET['datos'];
  }else {
        $jsondata = 'Hola! El valor recibido no es correcto.';
  }

  echo json_encode($jsondata);

?>