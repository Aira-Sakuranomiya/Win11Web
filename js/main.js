// $( ".desktop" ).click(function() {
// 	$( ".menu-container" ).removeClass( "dropdown-active" );
// });
// 
// $(".desktop").on("contextmenu", function() {
// 	$( ".menu-container" ).addClass( "dropdown-active" );
// });

$(".desktop").bind('contextmenu', function (e) {

	var top = e.pageY+5;
	var left = e.pageX;

	// Show contextmenu
	$(".menu-container").removeClass("dropdown-active").css({
		top: top + "px",
		left: left + "px"
	}).delay(11).queue(function(){
		$(".menu-container").addClass("dropdown-active").dequeue();
	});

	// disable default context menu
	return false;
});

$(".menu-container, .taskbar").bind('contextmenu', function (e) {
	// disable default context menu
	return false;
});

//$(".desktop").bind('contextmenu click',function(){
//	$(".menu-container").removeClass("dropdown-active");
//	$("#txt_id").val("");
//});

$( ".desktop" ).click(function() {
	$( ".menu-container" ).removeClass( "dropdown-active" );
});