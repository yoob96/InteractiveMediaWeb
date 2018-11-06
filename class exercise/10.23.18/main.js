


$(document).scroll(function() {


	fromTop = $(document).scrollTop();

	$(".blacksquare").text(fromTop) //changing numbers in blacksquare using (fromTop = variable)

	if (fromTop > 2000){
		$(".blacksquare").addClass("anotherClassName"); //doesn't have to add another div in html
	}


	if (fromTop > 4000) {
		$(".blacksquare").addClass("anotherClassGreen");
	}


