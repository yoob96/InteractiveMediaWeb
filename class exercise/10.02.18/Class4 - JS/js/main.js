//console.log ("hello world.")


//var mces = document.querySelector(".event") //selecting the first element in the DOM that has the class "event"
	/*anytime the event element shows up, just dump it this variable*/
//mces.addEventListener ('click', function(){ //listening for a click on the element selected in the line above //
//	alert ("my first function: you clicked on a lecture event has been clicked") // 
//	document.querySelector ("body").style.cssText = "background:red;"
//}) //closing the function  }. and closing the event listener. //

/* mces.addEventListener (one, two)

/* adding a listener.. looking for two parameters, 
what it wants to listen for, and what wants to happen */

//$(".event") = document.querySelector(".event")

//$(".event").click( function(){
	//alert("you clicked the first event")
	//$("body").css("background","red")
//} )

//much simplified version of wriitng javasript//

//REM
//SELECTOR

var bg = "rgb (255, 0, 0)";
// 	var currentBG = $("body").css("background-color");

// 	if(currentBG == "rgb(255, 255, 255)") {
// 		bg = "rgb(255, 0, 0)"
// 		} else {
// 			bg = "rgb(255, 255, 255)"
// 		}

// 	$("body").css("background", bg)
// } )

$(".event").on('click', function(){

	$("#event2").fadeOut(200)
	


}	)

















