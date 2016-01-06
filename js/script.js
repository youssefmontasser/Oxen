$(document).ready(function() {




		$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 2000);
	    return false;
		});


	$(window).scroll(function(event){

		var y = $(this).scrollTop();

		if (y >=50) {
			$('#made-in-usa').animate({'opacity':'1'}, 3000);
			$('#crafting-with-purpose').animate({'opacity':'1'}, 3000);
			$('#strong-together').animate({'opacity':'1'}, 3000);
			$('#description').animate({'opacity':'1'}, 3000);
		}

		if (y >=1500) {
			$('#drone').animate({'opacity':'1'}, 1500);
			$('#camera').animate({'opacity':'1'}, 1500);
		}

		if (y >= 1850) {
			$('#offscreen').animate({'opacity':'1'}, 1500);
		};

		if (y >=2200) {
			$('#camera-zoom').animate({'opacity':'1'}, 1500);
			$('#keith').animate({'opacity':'1'}, 1500);
		}

		if (y >= 2700){
			$('#creative').animate({'opacity':'1'}, 2500);
			$('#production').animate({'opacity':'1'}, 2500);
		}

		if (y >= 3200){
			$('#post-production').animate({'opacity':'1'}, 2500);
			$('#finishing').animate({'opacity':'1'}, 2500);
		}

		if ( y >=3600) {
			$('#cap-guy').animate({'opacity':'1'}, 1500);
			$('#kindrid').animate({'opacity':'1'}, 1500);
		}

		if ( y >= 3900) {
			$('#harbr').animate({'opacity':'1'}, 1500);
		}

		if ( y >= 4400) {
			$('#c1-bank').animate({'opacity':'1'}, 1500);
			$('#focus').animate({'opacity':'1'}, 1500);
		}

		if ( y >= 4700) {
			$('#yellow').animate({'opacity':'1'}, 1500);
		}

		if ( y >= 5100) {
			$('#island-shooting').animate({'opacity':'1'}, 1500);
			$('#choosing-lenses').animate({'opacity':'1'}, 1500);
		}

		if ( y >= 5600) {
			$('#first-month').animate({'opacity':'1'}, 1500);
			$('#nab-2015').animate({'opacity':'1'}, 1500);
		}


	});
		

});