function cal_age(dob) {

	if(!dob){
		return 'NA';
	}

	var d = new Date(dob);
	var td = d.getTime();
	
	var a = new Date();
	var ta = a.getTime();
    
    var ms = ta-td;
	
	var yr1=(((((ms/1000)/60)/60)/24)/365);
	var yr = Math.trunc(yr1)

    return yr;
	
}

 var renderCanvas = function(){
		var x = document.getElementById("alert");
		x.style.display = "none";
		
		
		var image = new Image();
		
		image.onload = function(){
			
			var canvas = document.getElementById("myCanvas");
			var ctx = canvas.getContext("2d");
		
			canvas.width = this.naturalWidth;
			canvas.height = this.naturalHeight;
		
			ctx.drawImage(this, 0, 0, canvas.width, canvas.height);

		}
		var file = document.getElementById("ig");
		image.src = URL.createObjectURL(file.files[0]);
}

var getBase64 = function(){
	var canvas = document.getElementById("myCanvas");
 	return  canvas.toDataURL();
}