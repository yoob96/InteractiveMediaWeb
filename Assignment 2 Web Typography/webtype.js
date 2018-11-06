
$("#third").click(function() {
    $("html").css("background-color", "#00695c");
    $("h1").css ("color", "white"); 

});

$("#box1").hover(function(){
	console.log("Mouse in");
	$("#date").css("opacity", 0);
	$("#insideleft").css("opacity",1);
}, function() {
	console.log("Mouse out");
	$("#date").css("opacity", 1);
	$("#insideleft").css("opacity", 0);
});

$("#box2").hover(function(){
	console.log("Mouse in");
	$("#location").css("opacity", 0);
	$("#insideright").css("opacity", 1);
}, function() {
	console.log("Mouse out");
	$("#location").css("opacity",1);
	$("#insideright").css("opacity",0)
})