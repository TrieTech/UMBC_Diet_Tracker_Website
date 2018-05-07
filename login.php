<?php

require_once 'Customer.php'

$cUsername = "";
$cPassword = "";

$cUsernameError = $cPassError = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){
  if(empty(trim($_POST["login"]))){
    $cUsernameError = 'Please enter a username.';
  }else{
    $username = trim($_POST["login"]);
  }
  if(empty(trim($_POST["password"]))){
    $cPasswordError = "Please enter a password";
  }else {
    $cPassword = trim($_POST['password']);
  }

  if(empty($cUsernameError) && empty($cPassError)){

    $query = "SELECT `"

?>
