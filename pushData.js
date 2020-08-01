
function pushData(){
					
			var user= {
						    firstname: document.getElementById("fn").value,
						    lastname: document.getElementById("ln").value,
						    email: document.getElementById("email").value,
							number :  document.getElementById("num").value,
							address :  document.getElementById("add").value,
							dob :  document.getElementById("dob").value,
							gender : document.getElementById("gen").value,
							image: fileName(),
					   };
											
			users.push(user);
			window.location.href = "doc.html";
			
	function fileName(){
		var t,v;
		t = document.getElementById("ig").value;
		v = t.split("\\").pop();
		return v;
	}
}
	
}			