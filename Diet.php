<?php
	#connect to mysql database
	$db = mysqli_connect("studentdb-maria.gl.umbc.edu","adsouza1","adsouza1","adsouza1");

	if (mysqli_connect_errno())
		exit("Error - could not connect to MySQL");

	#get the parameter from the HTML form that this PHP program is connected to
	#since data from the form is sent by the HTTP POST action, use the $_POST array here
	$cust_DOB = $_POST ['DOB'];
	$cust_weight = $_POST['Weight'];
	$cust_height = $_POST['Height'];
	$cust_calories = $_POST ['Calories'];

	




	#construct a query
	#query should look like this: 
	
	#"select * from cars where car_name='accord';"
	

	$constructed_query = "Insert INTO Diet (cust_DOB, cust_weight, cust_height ,cust_calories) VALUES ('$cust_DOB', '$cust_weight','$cust_height','$cust_calories')";
						  
	
	$result = mysqli_query($db, $constructed_query);
	


	#if result object is not returned, then print an error and exit the PHP program
	if(! $result){
		print("Error - query could not be executed");
		$error = mysqli_error();
		print "<p> . $error . </p>";
		exit;
	}
header('Location: index.html');
exit;

	?>