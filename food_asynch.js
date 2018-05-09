function showResult(str) {
  if (str.length==0) { 
    document.getElementById("typearea").innerHTML="";
    document.getElementById("typearea").style.border="0px";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("typearea").innerHTML=this.responseText;
      document.getElementById("typearea").style.border="1px solid #A5ACB2";
    }
  }
  xmlhttp.open("GET","getQuote.php?q="+str,true);
  xmlhttp.send();
}