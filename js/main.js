$(document).ready(function() {

	
	$(".small_mnu").click(function () {
      $(".navigation").toggle();
    });
	$("ul.sort_price").hide();
	$("h3 span.expand").click(function(){
		$(this).parent().next().slideToggle();
	});
	$("ul.choice1").hide();
	
	});
