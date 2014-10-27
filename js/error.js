/*­­­­­­­­­---------------------­­­­­­­­­­­­­­­­­­­­­­­­
Version: 1.0
Author: Oleksandr Rozhok
E­mail: nemo15.alex@gmail.com
Comment: Return to main page after click anywhere on page
­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­*/
$(document).ready(function(){ 
	$(document).on('click', function(){ 
		window.location.replace("index.html");
	});	
});