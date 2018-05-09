<?php
header("Cache-Control: no-cache, must-revalidate");

// Fill up array with names
$a[]="What doesn't Kill you makes you stronger";
$a[]="Happy and proud";
$a[]="Feeling the Burn";
$a[]="Ain't nobody gonna stop me!";
$a[]="I am person, hear me roar!"; 
$a[]="Only I can change my life. No one can do it for me.";


//get the q parameter from URL
$q=$_GET["q"];

//lookup all hints from array if length of q>0
if (strlen($q) > 0)
{
  $hint="";
  for($i=0; $i<count($a); $i++)
  {
  if (strtolower($q)==strtolower(substr($a[$i],0,strlen($q))))
    {
    if ($hint=="")
      {
         $hint=$a[$i];
      }
    else
      {
         $hint=$hint." <br /> ".$a[$i];
      }
    }
  }
}

// Set output to "no suggestion" if no hint were found
// or to the correct values
if ($hint == "")
{
   $response="no suggestion";
}
else
{
   $response=$hint;
}

//output the response
echo $response;
?>