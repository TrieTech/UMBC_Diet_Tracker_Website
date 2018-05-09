<?php
   include('connect.php');
   session_start();
   
   $user_check = $_SESSION['login_user'];
   
   $ses_sql = mysqli_query($db,"select * from Customer where cust_username = '$user_check' ");

   
   $row = mysqli_fetch_array($ses_sql,MYSQLI_ASSOC);
   
   $login_session = $row['cust_username'];
   $login_email = $row['cust_email'];
   $login_fname = $row['cust_name'];
   $login_occupation = $row['cust_occupation'];
   $login_city = $row['cust_city'];
   $login_state = $row['cust_state'];
   
   if(!isset($_SESSION['login_user'])){
      header("location: DTlogin.php");
   }
?>
