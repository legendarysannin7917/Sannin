function clickedadmin() {
	var useradmin = document.getElementById('user-admin');
	var passwordadmin = document.getElementById('password-admin');
	
	var adminuser = "legendary_sannin7917";
	var adminpassword = "iloveyoutal";
	
	if(useradmin.value == adminuser) {
		if(passwordadmin.value == adminpassword) {
			window.alert("Hi " + useradmin.value + " You can In Now Admin" );
			window.open("https://docs.google.com/spreadsheets/d/1zjgLYxqnZACJg6-8xSrwsJRQ4nV9gpHxTVq9B0tqTXU/edit#gid=1434467569");			
						
		}
		else {
			window.alert("Sorry Wrong Password This Is Admin Login Area");
		}
	}else {
		window.alert("Sorry Wrong Username This Is Admin Login Area");
	}
}