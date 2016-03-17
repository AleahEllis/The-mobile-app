$(document).ready(function(){

	// var selectedBeer;

	// // grabs value of selected beer from dropdown
	// $('#beerDropdown').bind('change', function() {
	// 	selectedBeer = $(this).find('option:selected').text();
	// 	console.log(atwater.indexOf(selectedBeer));
	// 	return selectedBeer;
	// });

	// button click loads pairing view
	$('button').click(function(){
		$('.views').load('/views/pairing.html');
	});

});