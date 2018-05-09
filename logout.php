<?php
   session_start();
   
   if(session_destroy()) {
      header("Location: DTlogin.php");
   }
?>