function performContactValidation(){


	/*First Name*/

	var contactFirstname = document.getElementById("fname").value;

	var index = contactFirstname.search(/\d/);

	if((contactFirstname == '') || (index >= 0)){		
		alert("First name cannot be empty or contain numbers. \n");
		fname.focus();
		fname.select();
		return false;
		
	}
	
	/*Last Name*/
	
	
	var contactLastname = document.getElementById("lname").value;

	var index = contactLastname.search(/\d/);

	if((contactLastname == '') || (index >= 0)){		
		alert("Last name cannot be empty or contain numbers. \n");
		lname.focus();
		lname.select();
		return false;
		
	}
	
			/*UserName 
		*/
		
		
		var contactUsername = document.getElementById("uname").value;
		
		var index = /^(?=.*\d)(?=.*[a-z])\w{8,}$/;
				
		if (index.test(contactUsername) == false) 
		{
	     alert("Username cannot be empty, must have at least 8 characters, or at least one number");
		uname.focus();
		uname.select();			
            return false;
        }	
	
		
	
		/*Email */

	
		var contactEmail = document.getElementById("mail").value;

        var index = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (index.test(contactEmail) == false) 
        {

        alert('Email cannot be empty, or must have an "@" or "." after the address.');
		mail.focus();
		mail.select();			
            return false;
        }

	
	
	
		/*Phone number*/
		
		
		
	var contactPhone = document.getElementById("num").value;
	
	var index = contactPhone.search(/^(\d{3})-\d{3}-\d{4}$/);

	if ((contactPhone == '') ||(index != 0)) 
	{
	alert("Phone cannot be empty or must be in format xxx-xxx-xxxx");
	num.focus();
	num.select();	
	return false;
	
	}

		
		
	/*Subject*/

	
	var contactSubject = document.getElementById("sub").value;

	var index = contactSubject.search(/\d/);

	if((contactSubject == '')){		
		alert("Subject cannot be empty. \n");
		sub.focus();
		sub.select();
		return false;
	}
	

	var contactSub = contactSubject;
	var contactFn = contactFirstname;
	alert("Thank you, " + contactFn + ", your message: -" + contactSub + "- has been sent. We will contact you shortly!");

	return false;
	
	
}








function performLoginValidation(){

	/*Date of birth*/

	
	var contactDOB = document.getElementById("DOB").value;
	
	var index = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
	
	 if (index.test(contactDOB) == false) 
		{
	     alert('Date of birth cannot be empty, or must be in the format MM/DD/YYYY.');
		DOB.focus();
		DOB.select();			
            return false;
        }


		/*Weight*/

		var contactweight = document.getElementById("Weight").value;
		
		var index = /^\d{2,3}/;
		
		if (index.test(contactweight) == false) 
		{
	     alert("Weight cannot be empty, or cannot contain letters");
		Weight.focus();
		Weight.select();			
            return false;
        }
		
		
		
		/*Height */

		var contactheight = document.getElementById("Height").value;
		
		var index = /^\d' ?(?:\d|1[0-1])"?$/;
		
		if (index.test(contactheight) == false) 
		{
	     alert("Height cannot be empty, cannot contain letters, or must be in the format: X'XX");
		Height.focus();
		Height.select();			
            return false;
        }
		
		
		/*Calorie Intake*/

		var contactcalorie = document.getElementById("Calories").value;
		
		var index =  /^([0-9]{4})$/;
		
		if (index.test(contactcalorie) == false) 
		{
	     alert("Calorie cannot be empty, cannot contain letters, or in the format: XXXX");
		Calories.focus();
		Calories.select();			
            return false;
        }
				


}



function performSignupValidation(){


	/*First Name*/

	var contactFirstname = document.getElementById("fname").value;

	var index = contactFirstname.search(/\d/);

	if((contactFirstname == '') || (index >= 0)){		
		alert("First name cannot be empty or contain numbers. \n");
		fname.focus();
		fname.select();
		return false;
		
	}
	
	/*Last Name*/
	
	
	var contactLastname = document.getElementById("lname").value;

	var index = contactLastname.search(/\d/);

	if((contactLastname == '') || (index >= 0)){		
		alert("Last name cannot be empty or contain numbers. \n");
		lname.focus();
		lname.select();
		return false;
		
	}
	
		/*Phone number*/
		
		
		
	var contactPhone = document.getElementById("cellphone").value;
	
	var index = contactPhone.search(/^(\d{3})-\d{3}-\d{4}$/);

	if ((contactPhone == '') ||(index != 0)) 
	{
	alert("Phone cannot be empty or must be in format xxx-xxx-xxxx");
	cellphone.focus();
	cellphone.select();	
	return false;
	
	}
	
	
		/*Email */

	
		var contactEmail = document.getElementById("mail").value;

        var index = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (index.test(contactEmail) == false) 
        {

        alert('Email cannot be empty, or must have an "@" or "." after the address.');
		mail.focus();
		mail.select();			
            return false;
        }

		
			/*Re-enter Email */

	
		var contactReEmail = document.getElementById("Email").value;
		var contactFirstEmail = document.getElementById("mail").value;
		
       
        if (contactReEmail != contactFirstEmail)
        {

        alert('The Re-entered email cannot be empty, or must match the first entered email address.');
		Email.focus();
		Email.select();			
            return false;
        }

	
		/*UserName 
		*/
		
		
		var contactUsername = document.getElementById("uname").value;
		
		var index = /^(?=.*\d)(?=.*[a-z])\w{8,}$/;
				
		if (index.test(contactUsername) == false) 
		{
	     alert("Username cannot be empty, must have at least 8 characters, or at least one number");
		uname.focus();
		uname.select();			
            return false;
        }		
		

			
			/*Re-enter Username */

	
		var contactUname = document.getElementById("uname").value;
		var contactUnameTwo = document.getElementById("re-Uname").value;
		
       
        if (contactUname != contactUnameTwo)
        {

        alert('The Re-entered Username cannot be empty, or must match the first entered username.');
		uname.focus();
		uname.select();			
            return false;
        }

		
		/*Password */
		
		var contactPassword = document.getElementById("password").value;
		
		var index = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
		
		if (index.test(contactPassword) == false) 
		{
	     alert("Password cannot be empty, must have at least 8 characters, one lowercase and one uppercase letter, or at least one number");
		password.focus();
		password.select();			
            return false;
        }	
	
			
		/*Re-enter Password */

	
		var contactpw = document.getElementById("password").value;
		var contactpwTwo = document.getElementById("Re-enterPassword").value;
		
       
        if (contactpw != contactpwTwo)
        {

        alert('The Re-entered password cannot be empty, or must match the first entered password.');
		password.focus();
		password.select();			
            return false;
        }

	
	
	/*Street Address*/
	

	var contactStreet = document.getElementById("address1").value;
	
	var index = contactStreet.search(/\d/);
	
	if((contactStreet == '') ||(index !=0 ))
	{
		alert("The street address cannot be empty, or must begin with a number followed by the name of the street.");
		address1.focus();
		address1.select();
	return false;
	}	

	/*City*/

	
	var contactCity = document.getElementById("City").value;

	var index = contactCity.search(/\d/);

	if((contactCity == '') || (index >= 0)){		
		alert("City cannot be empty or contain numbers. \n");
		City.focus();
		City.select();
		return false;
	}
	


	/*Zip Code*/
	
		
	var contactZip = document.getElementById("zip").value;

	var index = /^([0-9]{5})$/;

	if((contactZip == '') || (index >= 0)){		
		alert("Zip cannot be empty or must be in the format XXXXX. \n");
	zip.focus();
	zip.select();
		return false;
	}	
		
		
	/*Occupation*/

	
	var contactOccupation = document.getElementById("occupation").value;

	var index = contactOccupation.search(/\d/);

	if((contactOccupation == '') || (index >= 0)){		
		alert("Occupation cannot be empty or contain numbers. \n");
		occupation.focus();
		occupation.select();
		return false;
	}
	

}

	
	





	



	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	