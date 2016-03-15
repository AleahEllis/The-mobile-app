angular.module('beerApp', [])
.controller('dropdownController', function() {
	
	var menu = this;
	
	menu.beersByBrewery = [
		{
			Brewery: 'Atwater Brewery',
			Beers: ['Decadent Dark Chocolate', 'Detroit Pale Ale', 'Dirty Blonde', 'D-light', 'Grand Circus IPA', 'Hop-A-Peel', 'Michelada', 'Purple Gang Pilsner', 'Vanilla Java Porter', 'VooDoo Vator']
		},
		{
			Brewery: 'Batch Brewing Company',
			Beers: ['1400 Porter', 'Anton\'s Animal\'s II', 'Antwerp\'s Placebo II', 'Batch Empire Pale Ale', 'High End Theory', 'Low End Theory', 'Milk Goblin II', 'Ned the Wheat Wino',  'The Noive', 'Old Witty Bastard II', 'Son of a Batch II', 'Unrequited', 'Wheated Kolsh', 'Wheated Session IPA']		
		},
		{
			Brewery: 'Brew Detroit',
			Beers: ['Citra & Friends', 'Claymore Jr.', 'Roggenbier', 'Tangerine Dream', 'Weizenbock']		
		},
		{
			Brewery: 'Detroit Beer Company',
			Beers: ['Broadway Light', 'C.R.E.A.M.', 'The Detroit Dwarf', 'Hop Grenade', 'Krampus Imperial Stout', 'Little Wings Belgian Session', 'Local 1529 IPA', 'Riopelle Pale Ale', 'Solstice Dunkel']		
		},
		{
			Brewery: 'Motor City Brewing Works',
			Beers: ['Bohemian Lager', 'Ghettoblaster', 'Honey Porter', 'India Pale Ale', 'Motor City Pale Ale', 'Nut Brown Ale']		
		}
	];

});