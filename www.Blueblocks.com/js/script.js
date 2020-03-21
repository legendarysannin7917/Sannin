function clickedlogin() {
	
	var user = document.getElementById('usernameclient');
	var pass = document.getElementById('passwordclient');
	
	var coruser = "test";
	var corpass = "123";
	var freeuser = "new";
	var freepass = "new";	
		
	if(user.value == coruser || freeuser) {
		if(pass.value == corpass || freepass){
			window.alert("You are logged in as " + user.value);
			window.open("clientform.html");
			window.close("clientlogin.html");
		}
		else {
			window.alert("Incorrect password!");
		}
	}
	else {
		window.alert("Incorrect username");
	}
}






