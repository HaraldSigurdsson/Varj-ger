$(document).ready(function(){

	for (var i = 0; i < 25; i++) {

		setTimeout(function(){ 

		$('#header-rune-up-one').fadeIn(3000);
		$('#header-rune-up-two').fadeIn(4000);
		$('#header-rune-up-three').fadeIn(5000);
		$('#header-rune-up-four').fadeIn(6000);
		$('#header-rune-up-five').fadeIn(7000);
		$('#header-rune-up-six').fadeIn(8000);
		$('#header-rune-up-seven').fadeIn(9000);
		$('#header-rune-up-eight').fadeIn(10000);
		$('#header-rune-up-nine').fadeIn(11000);
		$('#header-rune-up-ten').fadeIn(12000);
		$('#header-rune-up-eleven').fadeIn(13000);
		$('#header-rune-up-twelve').fadeIn(14000); 

	}, 0);

	setTimeout(function(){ 

		$('#header-rune-down-one').fadeIn(3000);
		$('#header-rune-down-two').fadeIn(4000);
		$('#header-rune-down-three').fadeIn(5000);
		$('#header-rune-down-four').fadeIn(6000);
		$('#header-rune-down-five').fadeIn(7000);
		$('#header-rune-down-six').fadeIn(8000);
		$('#header-rune-down-seven').fadeIn(9000);
		$('#header-rune-down-eight').fadeIn(10000);
		$('#header-rune-down-nine').fadeIn(11000);
		$('#header-rune-down-ten').fadeIn(12000);
		$('#header-rune-down-eleven').fadeIn(13000);
		$('#header-rune-down-twelve').fadeIn(14000);

	}, 0);


	setTimeout(function(){ $('.animation-one').fadeOut(12000); }, 2500);

	setTimeout(function(){ $('.animation-two').fadeOut(12000); }, 2500);

	setTimeout(function(){ $('.animation-one').fadeIn(12000); }, 2500);

	setTimeout(function(){ $('.animation-two').fadeIn(12000); }, 2500);
	
	}

	console.log("Helloo");
	console.log("Helloo Once");
	console.log("Helloo Twice");
	console.log("Helloo Third");

});