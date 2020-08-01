function print(data){
	console.log(data);
}

window.onload = function(){
	
	var contentHtml = '';

	// todo : make a call to get users. : Web API

	var userTemplate = document.getElementById('user-template').innerHTML;

	for(var index = 0; index < users.length;index++)
	{
		contentHtml = contentHtml + userTemplate
									.replace(/{{FULLNAME}}/g , fullName())
									.replace(/{{EMAIL}}/g , users[index].email)
									.replace(/{{NUMBER}}/g , users[index].number)
									.replace(/{{ADDRESS}}/g , users[index].address)
									.replace(/{{DOB}}/g , users[index].dob)
									.replace(/{{GENDER}}/g , users[index].gender)
									.replace(/{{AGE}}/g , cal_age(users[index].dob))
									.replace(/{{IMAGE}}/g , sex(users[index].image));
	}
	
	document.getElementById('container').innerHTML = contentHtml;
	print(contentHtml);
	
function sex(x) {
	
	if(x){
		return x;
	}
	else{
		var z;
		
		if(users[index].gender=='M')
			z = 'download2.png';
		if(users[index].gender=='F')
			z = 'download.png';
	}	
	return z;
}

function fullName(){
	return users[index].firstname + " " + users[index].lastname;
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var sub = document.getElementById("submit");
 
btn.onclick = function() {
  modal.style.display = "block";
}

var choose = document.getElementById("choose");
var realFile = document.getElementById("ig");

choose.addEventListener("click", function(){
	realFile.click();
});

var cross = document.getElementById("close");
cross.onclick = function(){
	modal.style.display = "none";
}

function el(id){return document.getElementById(id);} // Get elem by ID

var canvas  = el("myCanvas");
var context = canvas.getContext("2d");

function readImage() {
	debugger
    if ( this.files && this.files[0] ) {
        var FR= new FileReader();
        FR.onload = function(e) {
           var img = new Image();
           img.addEventListener("load", function() {
             context.drawImage(img, 0, 0 ,canvas.width, canvas.height);
           });
           img.src = e.target.result;
        };       
        FR.readAsDataURL( this.files[0] );
    }
}

el("ig").addEventListener("change", readImage, true);

sub.onclick = function() {
	
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
	
	modal.style.display = "none";
}

}