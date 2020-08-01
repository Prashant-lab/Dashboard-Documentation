window.onload = function(){
	populateUsers();

}

function populateUsers(){
	// todo : make a call to get users. : Web API
	var contentHtml = '';

	var userTemplate = document.getElementById('user-template').innerHTML;
	for(var index = 0; index < users.length;index++)
	{
		contentHtml = contentHtml + userTemplate
									.replace(/{{FULLNAME}}/g , getFullName(users[index]))
									.replace(/{{EMAIL}}/g , users[index].email)
									.replace(/{{NUMBER}}/g , users[index].number)
									.replace(/{{ADDRESS}}/g , users[index].address)
									.replace(/{{DOB}}/g , users[index].dob)
									.replace(/{{GENDER}}/g , users[index].gender)
									.replace(/{{AGE}}/g , cal_age(users[index].dob))
									.replace(/{{IMAGE}}/g , getImage(users[index].image, users[index].gender))
									.replace(/{{index}}/g, index);
	}
	document.getElementById('container').innerHTML = contentHtml;
}
	
function getImage(x, gender) {
	
	if(x){
		return x;
	}
	else{
		var z;
		
		if(gender=='M')
			z = 'images/download2.png';
		if(gender=='F')
			z = 'images/download.png';
	}	
	return z;
}

function getFullName(user){
	return user.firstname + " " + user.lastname;
}

function popup(){
	var modal = document.getElementById("myModal");
	modal.style.display = "block";

	var choose = document.getElementById("choose");
	var file = document.getElementById("ig");

	choose.onclick = function(){
		file.click();
	}

	var cross = document.getElementById("close");

	cross.onclick = function(){
		modal.style.display = "none";
	}
}

var saveUser = function(){
	var file = document.getElementById("ig");
	if(!file.files[0]){
		 getAlert();
	}
	else{
	var image = getBase64();

	var user= {
						    firstname: document.getElementById("fn").value,
						    lastname: document.getElementById("ln").value,
						    email: document.getElementById("email").value,
							number :  document.getElementById("num").value,
							address :  document.getElementById("add").value,
							dob :  document.getElementById("dob").value,
							gender : document.getElementById("gen").value,
							image: image,
					   };
											
	users.push(user);
	populateUsers();
		
	/*var userTemplate = document.getElementById('user-template').innerHTML;

	var contentHtml = userTemplate.replace(/{{FULLNAME}}/g , getFullName(user))
									.replace(/{{EMAIL}}/g , user.email)
									.replace(/{{NUMBER}}/g , user.number)
									.replace(/{{ADDRESS}}/g , user.address)
									.replace(/{{DOB}}/g , user.dob)
									.replace(/{{GENDER}}/g ,user.gender)
									.replace(/{{AGE}}/g , cal_age(user.dob))
									.replace(/{{IMAGE}}/g , user.image);

	document.getElementById('container').insertAdjacentHTML('beforeend', contentHtml);
	*/
	closePopup();
				
	}
	return false;	
}

function closePopup(){

	document.getElementById("fn").value="";
	document.getElementById("ln").value="";
	document.getElementById("email").value="";
	document.getElementById("num").value="";
	document.getElementById("add").value="";
	document.getElementById("dob").value="";
	document.getElementById("gen").value="";
	document.getElementById("ig").value='';
	
	var canvas = document.getElementById("myCanvas");

	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	var modal = document.getElementById("myModal");

	modal.style.display = "none";

}

function getAlert(){
	document.getElementById("alert").innerHTML = "'Please choose an image'";
	var x = document.getElementById("alert");
	x.style.display = "block";
}

window.onscroll = function(){
	var x = document.getElementById("btn");
	x.style.position = "sticky";
	x.style.top = "0px";
}

window.onkeydown = function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        var modal = document.getElementById("myModal");
		modal.style.display = "none";
    }
}

//function deleteUser(event){
	//event.remove();
	//users.pop();
	//var y  = document.getElementById('container');
	//y.removeChild(y.childNodes[0]);
	//populateUsers();
	//window.location.reload();
//}

function clickCross(index){
	//event.parentNode.parentNode.parentNode.removeChild(event.parentNode.parentNode);
				users.splice(index,1) ;
				populateUsers();

			
}


