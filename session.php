<?php
   include('connect.php');
   session_start();
   
   $user_check = $_SESSION['login_user'];
   
   $ses_sql = mysqli_query($db,"select * from Customer where cust_username = '$user_check' ");
   
   $row = mysqli_fetch_array($ses_sql,MYSQLI_ASSOC);
   
   $login_session = $row['cust_username'];
   $login_email = $row['cust_email'];
$login_fname = $row['cust_name'];
   
   if(!isset($_SESSION['login_user'])){
      header("location:login.php");
   }
?>
