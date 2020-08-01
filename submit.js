var sub = document.getElementById("submit");

function  submit(){
	
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
			
	function fileName(){
		var t,v;
		t = document.getElementById("ig").value;
		v = t.split("\\").pop();
		return v;
	}
	
	contentHtml = contentHtml + userTemplate
									.replace(/{{FULLNAME}}/g , fullName())
									.replace(/{{EMAIL}}/g , users[index].email)
									.replace(/{{NUMBER}}/g , users[index].number)
									.replace(/{{ADDRESS}}/g , users[index].address)
									.replace(/{{DOB}}/g , users[index].dob)
									.replace(/{{GENDER}}/g , users[index].gender)
									.replace(/{{AGE}}/g , cal_age(users[index].dob))
									.replace(/{{IMAGE}}/g , sex(users[index].image));
	
	index++;
	
	document.getElementById('container').innerHTML = contentHtml;
	
	document.getElementById("fn").value="";
	document.getElementById("ln").value="";
	document.getElementById("email").value="";
	document.getElementById("num").value="";
	document.getElementById("add").value="";
	document.getElementById("dob").value="";
	document.getElementById("gen").value="";
	document.getElementById("ig").value='';
	
	file.files= null;
	modal.style.display = "none";
}