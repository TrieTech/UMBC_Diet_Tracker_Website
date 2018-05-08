<?php
$mysql_hostname = "studentdb-maria.gl.umbc.edu";
$mysql_user = "adsouza1";
$mysql_password = "adsouza1";
$mysql_database = "adsouza1";
$prefix = "";
$bd = mysqli_connect($mysql_hostname, $mysql_user, $mysql_password) or die("Could not connect database");
mysqli_select_db($bd, $mysql_database) or die("Could not select database");
?>