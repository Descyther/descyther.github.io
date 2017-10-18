$(document).ready(function() 
{
	//Main Menu script
    $('.c-hamburger').click(function() 
		{
			$('.navBar').animate(
			{
				"margin": "20 0 0 56",
			},400);
		if($('.navBar').hasClass('isActive'))
			{
				$('.navBar').animate(
				{
					"margin": "20 0 0 -1300",
				
				},200);
				$('.navBar').removeClass('isActive');
			}
		else 
			{
				$('.navBar').addClass("isActive");
			}
		}); 
	
	
	
	//Animated Binary
	            $(function () {
                var $header = $("#headLine");
                var header = ['WORKING..', 'LOADING..']; // CHANGE TEXT HERE TO YOUR TEXT , YOU CAN USE MANY WORDS SEPRATED BY , 

                var position = -1;

                !function loop() {
                    position = (position + 1) % header.length;
                    $header
                        .html(header[position])
                        .fadeIn(1000)
                        .delay(1000)
                        .fadeOut(1000, loop);
                }();
            });
	
	
	
	
	
	
});

