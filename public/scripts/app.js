$(document).ready(function(){

	// grabs value of selected beer from dropdown
	$('#beerDropdown').bind('change', function() {
		var selectedBeer = $(this).find('option:selected').text();
		console.log(selectedBeer);
	});

	// button click loads pairing view
	$('button').click(function(){
		$('.views').load('/views/pairing.html');
	});

});