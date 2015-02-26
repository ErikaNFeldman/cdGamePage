//step 1- create object constructor for a child - I had this as a function but changed it to Object
$(document).ready(function() { //when the page loads, the h2 - Make Your Own Child - should move down to get user attention
	$('h2').slideDown('slow'); 
});

function Child (name,age,sibs,media,qual,socemo,cog,motor,lang,appr) {
	this.name = name;
	this.age = parseInt(age); //age range = 1-7
	this.sibs = parseInt(sibs); //1-3
	this.media = parseInt(media); //2,4,8,10 median hours per day
	this.qual = parseInt(qual); //1-5 scale
	this.socemo = parseInt(socemo); //1-10 scale
	this.cog = parseInt(cog); //1-10 scale
	this.motor = parseInt(motor); //1-10 scale
	this.lang = parseInt(lang);//1-10 scale
	this.appr = parseInt(appr);//1-10 scale 
	}
// step 2- create other children in 'race'
var apple = new Child("Apple",2,3,2,3,9,7,7,7,3);
var ben = new Child("Ben",4,1,10,3,5,5,9,2,9);
var cass = new Child("Cass",4,2,4,3,5,7,8,2,9);
var duke = new Child("Duke",2,1,2,5,5,5,2,3,10);

Child.prototype.devLevel = function() { 
	this.devNum = (this.qual * this.age + (this.cog + this.motor + (this.socemo * this.sibs) + this.lang * this.appr - this.media));  
	console.log(this.name + " is at " + this.devNum + " developmentally."); 
} 

apple.devLevel();  //since the function was created after the Child objects  - it needs to be called out for each one. 
ben.devLevel();
cass.devLevel(); 
duke.devLevel(); 

/*$('#target').dblclick(function(){
	(<img src="trajectory.jpg"/ width="655" height="455" align="left"/>).show();
});*/ //played around here with trying to have an image appear if the user double clicked on the text

$("form").submit(function(event){ //create a function that will create a Child with all the information from the form
	event.preventDefault();
  
		var name = $("input:text").val();
		var age = $("input:radio[name=age]:checked").val(); 
		var sibs = $("input:radio[name=sibs]:checked").val(); 
		var media = $("input:radio[name=media]:checked").val(); 
		var qual = $("input:radio[name=qual]:checked").val(); 
		var socemo= $("input:radio[name=socemo]:checked").val();
		var cog = $("input:radio[name=cog]:checked").val();
		var motor = $("input:radio[name=motor]:checked").val();
		var lang = $("input:radio[name=lang]:checked").val();
		var appr = $("input:radio[name=appr]:checked").val();
		
		var user = new Child(name,age,sibs,media,qual,socemo,cog,motor,lang,appr);
		user.devLevel();
	$('form').append('<h1><p>' + user.name + ' may be at the following developmental level in a few years: ' + user.devNum + '</p></h1>');
});
