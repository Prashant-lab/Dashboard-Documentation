function cal_age(dob) {
	var d = new Date(dob);
	var td = d.getFullYear();
	
	var a = new Date();
	var ta = a.getFullYear();
    
    var yr = ta-td;
	
    
    if(d.getMonth() > a.getMonth()) {
    	yr-=1;
    }
    if(d.getMonth() == a.getMonth() && d.getDate() > a.getDate()) {
    	yr-=1;
    }
    return yr;	
}	

function el(id){return document.getElementById(id);} // Get elem by ID

var canvas  = el("myCanvas");
var context = canvas.getContext("2d");

function readImage() {
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

el("ig").addEventListener("change", readImage, false);
