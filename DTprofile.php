<?php
   include('session.php');
?>
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>UMBC Diet Tracker</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="./css/DT_profile.css" />
    <link rel="stylesheet" type="text/css" href="./css/DT_progress.css" />
    <link rel="stylesheet" type="text/css" href="./css/DT_style.css" />
</head>

<body>
    <!--This page will describe who I am and Student role at UMBC -->
    <div class="container">
        <div class="header">
            <p><img src="res/diettrackerbanner.png" width="100%" height="225" alt="banner" /></p>
        </div>

        <div id="nav">
            <ul>
                <li><a href="DTprofile.php" title="Signed In"><?php echo $login_fname; ?></a></li>
                <li><a href="index.html" title="homepage">Home</a></li>
                <li><a href="DTcontactus.html" title="contact us page">Contact Us</a></li>
                <li><a href="DTaboutus.html" title="About us page">About Us</a></li>
                <li><a href ="logout.php">Sign Out</a></li>
                <li class="float-right"><input class="search" type="text" name="search"/></li>
            </ul>
        </div>

        <div class="prof-container">
            <h2>Welcome <?php echo $login_session; ?> !<h2>

            <img src="./res/blank-profile-picture-973460_960_720.png" alt="personal image" style="width: 300px; height: 335px;" />
            <p>"Living Life"</p>
            <p><img class="headericon" src="./res/open-letter.png" alt="email image" />&nbsp;&nbsp;<?php echo $login_email; ?></p>

            <p><img class="headericon" src="./res/briefcase.png" alt="work img" />&nbsp;&nbsp;Student</p>

            <p><img class="headericon" src="./res/map.png" alt="map image" />&nbsp;&nbsp;Bethesda, MD</p>

            <h2>Diet Tracking Progress</h2>
            <p><label>Daily Progress</label></p>
            <div id="circ-cont" data-pct="100">
                <svg id="svg" width="300" height="300" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle r="120" cx="150" cy="150" fill="transparent" stroke-dashoffset="0"></circle>
                    <circle id="bar" r="120" cx="150" cy="150" fill="transparent" stroke-dasharray="753.98"  stroke-dashoffset="0" style="stroke:#E85151"></circle>
                </svg>
            <p><label>Weekly Progress</label></p>
            <div class="loader"></div>
            <p><label>Overall Progress</label></p>
            <div class="loader"></div>
        </div>


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
    <script>
        var val = 70;
    var $circle = $('#svg #bar');


var radius = $circle.attr('r');
var circumference = Math.PI*(radius*2);

$circle.css({ strokeDashoffset: circumference});

var pct = (val/100)*circumference;

var obj = {
  pct: 0
};

TweenLite.to(obj, .7, {
  pct: -pct,
  delay: 1,
  onUpdate: function () {
    $circle.css({ strokeDashoffset: obj.pct-circumference});
  }
});
        

    </script>
</body>
</html>