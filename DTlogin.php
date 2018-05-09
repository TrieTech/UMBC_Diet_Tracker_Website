<?php
   include("connect.php");
   session_start();
   
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      
      $myusername = mysqli_real_escape_string($db,$_POST['login']);
      $mypassword = mysqli_real_escape_string($db,$_POST['password']); 
      
      $sql = "SELECT * FROM Customer WHERE cust_username = '$myusername' and cust_password = '$mypassword'";
      $result = mysqli_query($db,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      //$active = $row['active'];
      
      $count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count == 1) {
        // $_SESSION("myusername");
         $_SESSION['login_user'] = $myusername;
         
         header("location: DTprofile.php");
      }else {
         $error = "Your Login Name or Password is invalid";
      }
   }
?>
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Login Form</title>
    <link rel="stylesheet" type="text/css" href="css/DT_style.css" title="style" />
    <link rel="stylesheet" type="text/css" href="./css/DT_login.css" title="style" />
    <!--[if lt IE 9]><script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>

<body>
    <div class="container">
        <div class="header">
            <p><img src="res/diettrackerbanner.png" width="100%" height="225" alt="banner" /></p>
        </div>

        <div id="nav">
            <ul>
                <li><a href="index.html" title="homepage">Home</a></li>
                <li><a class="active" href="DTlogin.html" title="login page">Sign In/Join</a></li>
                <li><a href="DTcontactus.html" title="contact us page">Contact Us</a></li>
                <li><a href="DTaboutus.html" title="About us page">About Us</a></li>
                <li class="float-right"><input class="search" type="text" name="search" /></li>
            </ul>
        </div>
        <section class="logcontainer">
            <div class="login">
                <h1>Your Diet Tracker Profile</h1>
                <form method="post" action="">
                    <p><input type="text" name="login" value="" placeholder="Username or Email"></p>
                    <p><input type="password" name="password" value="" placeholder="Password"></p>
                    <p class="remember_me">
                        <label>
                            <input type="checkbox" name="remember_me" id="remember_me">
                            Remember me on this computer
                        </label>
                    </p>
                    <p class="submit"><input type="submit" name="commit" value="Login"></p>
                </form>
            </div>

    <div class="login-help">
      <p>Forgot your password? <a href="DTlogin.html">Click here to reset it</a>.</p>
      <div class="text-center p-t-136">
            <a class="txt2" href="DTsignupPage.html">
              Create your Account
              <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
            </a>
          </div>
    </div>

  </section>


        <div class="footer">Copyright &copy;&nbsp;AlphaTech.com
            <div class="toolbar2">
                <p>
                    <a href="index.html" title="homepage">Home</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <a href="DTtermsofuse.html" title="terms of use">Terms of Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <a href ="DTaboutus.html" title ="About us">About Us</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="DTcontactus.html" title="contact us page">Contact Us</a>
                </p>
                
                <a href="http://www.facebook.com/sharer.php?u=https://simplesharebuttons.com">
                    <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
                </a>
                <a href="https://twitter.com/share?url=https://simplesharebuttons.com&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons">
                    <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
                </a>
                <a href="https://plus.google.com/share?url=https://simplesharebuttons.com">
                    <img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" />
                </a>
                
            </div>
        </div>
    </div>

</body>

</html>