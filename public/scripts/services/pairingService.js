angular.module('beerApp')
.factory('pairingService', function() {

	var breweries = [
		'Atwater Brewery', 
		'Batch Brewing Company', 
		'Brew Detroit', 
		'Detroit Beer Company', 
		'Motor City Brewing Works'
	];

	var atwater = [
		{ //0
			Name:"Decadent Dark Chocolate",
			Brewery:"Atwater Brewery",
			Logo: "images/g_logo_atwater.png",
			Type:"Strong Brown Chocolate Ale",
			Description:"Nutty, round mouthfeel with an a blend of chocolate extract added for a rich, not-too-sweet mellow flavor profile.",
            Flavor: "stilton, barbecue, chocolate",
	        Glass:"Nonic",
	        Temperature:"50-55°F"
		},
		{ //1
			Name:"Detroit Pale Ale",
			Brewery:"Atwater Brewery",
			Logo: "images/g_logo_atwater.png",
	        Type:"Altbier",
			Description:"A unique and diverse beer bringing in flavors from English and German malts.",
	        Flavor:"gouda, pepper, smoked",
            Glass:"Becker",
	        Temperature:"40-45°F"
		},
		{ //2
			Name:"Dirty Blonde",
			Brewery:"Atwater Brewery",
			Logo: "images/g_logo_atwater.png",
	        Type:"Wheat Spiced Ale",
			Description:"A beer with a pale golden hue, sweeter maltiness with light fruity notes. Crushed orange peel and coriander, clean heady aroma.",
            Flavor:"orange, chorizo, coriander",
            Glass:"Stein",
	        Temperature:"48-50°F"
		},			
		{ //3
			Name:"D-light",
			Brewery:"Atwater Brewery",
			Logo: "images/g_logo_atwater.png",
	        Type:"Kölsch",
			Description:"Clean, crisp and lightly floral.",
	        Flavor:"greens, pear, nuts",
            Glass:"Stange",
	        Temperature:"40-45°F"
		},
		{ //4
			Name:"Grand Circus IPA",
			Brewery:"Atwater Brewery",
			Logo: "images/g_logo_atwater.png",
	        Type:"IPA",
			Description:"Crisp, clean and hoppy, lightly bready with notes of citrus and caramel.",
	        Flavor:"grapefruit, pepper, rosemary",
            Glass:"Seidel",
	        Temperature:"45-50°F"
		},
		{ //5
			Name:"Hop-A-Peel",
			Brewery:"Atwater Brewery",
			Logo: "images/g_logo_atwater.png",
	        Type:"American IPA",
			Description:"A Super Cascade of American and Chinook hops makes gives you a full IPA experience.",
	        Flavor:"orange peel, cilantro, oil",
            Glass:"Seidel",
	        Temperature:"45-50°F"
		},
		{ //6
			Name:"Michelada",
			Brewery:"Atwater Brewery",
			Logo: "images/g_logo_atwater.png",
	        Type:"Michelada",
			Description:"Atwater Lager + Bloody Mary mix = party time.",
	        Flavor:"celery, tomato, salt",
            Glass:"Becker",
	        Temperature:"40-45°F"
		},
		{ //7
			Name:"Purple Gang Pilsner",
			Brewery:"Atwater Brewery",
			Logo: "images/g_logo_atwater.png",
	        Type:"Czech Pilsener",
			Description:"Lightly malty and subtly sweet.",
	        Flavor:"rice, lemon, basil",
            Glass:"Flute",
	        Temperature:"40-45°F"
		},
		{ //8
			Name:"Vanilla Java Porter",
			Brewery:"Atwater Brewery",
			Logo: "images/g_logo_atwater.png",
	        Type:"English Porter Spiced Ale",
			Description:"A copper cored porter with unmistakeable notes of vanilla and coffee. Brewed cold to eliminates burnt flavors.",
	        Flavor:"mole, grilled, butter",
            Glass:"Pint",
	        Temperature:"50-55°F"
		},
		{ //9
			Name:"VooDoo Vator",
			Brewery:"Atwater Brewery",
			Logo: "images/g_logo_atwater.png",
	        Type:"Doppelbock",
			Description:"This exceptionally smooth caramel malt carries a crisp nutty flavor, along with a high dose of liquid courage.",
	        Flavor:"camembert, roast, nut",
            Glass:"Pilsener",
	        Temperature:"45-50°F"
		}
	]; // end of Atwater array


	var batch = [
		{ //0
			Name:"1400 Porter",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch-brewing-logo-web.png",
	        Type:"English Porter",
			Description:"English style robust porter, roasted malt character, with caramel malt undertones.",
	        Flavor:"grilled, gruyere, caramel",
            Glass:"Pint",
	        Temperature:"50-55°F"
		},
		{ //1
			Name:"Anton's Animal's II",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch-brewing-logo-web.png",
	        Type:"Berliner Weisse",
			Description:"Refreshing, tart, sour and acidic, with a lemony-citric fruit sharpness and almost no hop bitterness.",
	        Flavor:"ham, gouda, mushroom",
            Glass:"Nonic",
	        Temperature:"45-50°F"
		},
		{ //2
			Name:"Antwerp's Placebo II",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch-brewing-logo-web.png",
	        Type:"Belgian Dark Strong Ale",
			Description:"A big beautiful Belgian ale. Special bottle release on our 1 year anniversary!",
	        Flavor:"blueberry, barbecue, anise",
            Glass:"Snifter",
	        Temperature:"45-50°F"
		},	
		{ //3
			Name:"Empire Pale Ale",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch-brewing-logo-web.png",
	        Type:"American Pale Ale",
			Description:"Featuring Michigan grown Empire Hops. Light and crisp with a nice floral/fruity finish.",
	        Flavor:"lavender, sage, roast",
            Glass:"Becker",
	        Temperature:"40-45°F"
		},
		{ //4
			Name:"High End Theory",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch-brewing-logo-web.png",
	        Type:"Black IPA",
			Description:"Low End Theory’s bigger brother.",
	        Flavor:"sharp, curry, pepperoni",
            Glass:"Becker",
	        Temperature:"40-45°F"
		},
		{ //5
			Name:"Low End Theory",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch-brewing-logo-web.png",
	        Type:"Dark Black IPA",
			Description:"Copious amounts of Michigan grown Chinook and Cascade hops.",
	        Flavor:"mushroom, figs, nut",
            Glass:"Becker",
	        Temperature:"40-45°F"
		},
		{ //6
			Name:"Milk Goblin II",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch-brewing-logo-web.png",
	        Type:"Milk Stout",
			Description:"Nice, creamy and roasty flavors.",
	        Flavor:"mushroom, cream, nut",
            Glass:"Nonic",
	        Temperature:"50-55°F"
		},
		{ //7
			Name:"Ned the Wheat Wino",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch-brewing-logo-web.png",
	        Type:"Wheat Wine",
			Description:"Bready, oaky, alcohol heat characters. Good Times.",
	        Flavor:"smoked, chilli, peach",
            Glass:"Snifter",
	        Temperature:"45-50°F"
		},
		{ //8
			Name:"The Noive",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch-brewing-logo-web.png",
	        Type:"Kölsch",
			Description:"The Noive of some people! Delightful and refreshing. Nice and clean, easy drinking, and the right choice for anytime of the day!",
	        Flavor:"filet,apricot,coriander",
            Glass:"Stange",
	        Temperature:"40-45°F"
		},
		{ //9
			Name:"Old Witty Bastard II",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch-brewing-logo-web.png",
	        Type:"Belgian Witbier",
			Description:"A delicious witbier featuring coriander and orange peel. Yum!",
	        Flavor:"cumin, orange, cilantro",
            Glass:"Pilsener",
	        Temperature:"45-50°F"
		},
		{ //10
			Name:"Son of a Batch II",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch-brewing-logo-web.png",
	        Type:"Double IPA",
			Description:"Nicely balanced, brewed with cascade and centennial hops.",
	        Flavor:"salt, grilled, bacon",
            Glass:"Snifter",
	        Temperature:"50-55°F"
		},	
		{ //11
			Name:"Unrequited",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch-brewing-logo-web.png",
	        Type:"Belgian Sparkling Ale",
			Description:"A dry/semi-dry sparkling ale featuring fruity and spicy fermentation character with low hop and low malt presence. It’s all about the Belgian yeast, baby!",
	        Flavor:"cloves, seafood",
            Glass:"Pint",
	        Temperature:"45-50°F"
		},
		{ //12
			Name:"Wheated Kölsch",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch-brewing-logo-web.png",
	        Type:"Wheat Kölsch",
			Description:"Light Refreshing Wheat/Kölsch Hybrid",
	        Flavor:"egg, gouda, crab",
            Glass:"Stange",
	        Temperature:"40-45°F"
		},
		{ //12
			Name:"Wheated Session IPA",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch-brewing-logo-web.png",
	        Type:"Wheat IPA",
			Description:"Dry hopped with Cascade and Centennial hops for intense hop aromatics.",
	        Flavor:"curry, barbecue, blue cheese",
            Glass:"Pint",
	        Temperature:"45-50°F"
		}
	]; // end of Batch array

	var brew = [
		{
			Name: "",
			Brewery: "Brew Detroit",
			Logo: "images/brewDetroitLogo.png",
			Type: "",
			Description: "",
			Flavor: "",
			Glass: "",
			Temperature: ""
		},
		{
			Name: "",
			Brewery: "Brew Detroit",
			Logo: "images/brewDetroitLogo.png",
			Type: "",
			Description: "",
			Flavor: "",
			Glass: "",
			Temperature: ""
		},	
		{
			Name: "",
			Brewery: "Brew Detroit",
			Logo: "images/brewDetroitLogo.png",
			Type: "",
			Description: "",
			Flavor: "",
			Glass: "",
			Temperature: ""
		},
		{
			Name: "",
			Brewery: "Brew Detroit",
			Logo: "images/brewDetroitLogo.png",
			Type: "",
			Description: "",
			Flavor: "",
			Glass: "",
			Temperature: ""
		},
		{
			Name: "",
			Brewery: "Brew Detroit",
			Logo: "images/brewDetroitLogo.png",
			Type: "",
			Description: "",
			Flavor: "",
			Glass: "",
			Temperature: ""
		}
	]; // end of Brew array

	var dbc = [
		{
			Name: "",
			Brewery: "Detroit Beer Company",
			Logo: "images/detroitbeerco.png",
			Type: "",
			Description: "",
			Flavor: "",
			Glass: "",
			Temperature: ""
		},
		{
			Name: "",
			Brewery: "Detroit Beer Company",
			Logo: "images/detroitbeerco.png",
			Type: "",
			Description: "",
			Flavor: "",
			Glass: "",
			Temperature: ""
		},
		{
			Name: "",
			Brewery: "Detroit Beer Company",
			Logo: "images/detroitbeerco.png",
			Type: "",
			Description: "",
			Flavor: "",
			Glass: "",
			Temperature: ""
		},
		{
			Name: "",
			Brewery: "Detroit Beer Company",
			Logo: "images/detroitbeerco.png",
			Type: "",
			Description: "",
			Flavor: "",
			Glass: "",
			Temperature: ""
		},
		{
			Name: "",
			Brewery: "Detroit Beer Company",
			Logo: "images/detroitbeerco.png",
			Type: "",
			Description: "",
			Flavor: "",
			Glass: "",
			Temperature: ""
		}
	]; // end of DBC array

	var mcbw = [
		{
			Name: "Bohemian Lager",
			Brewery: "Motor City Brewing Works",
			Logo: "images/motorcitylogo.png",
			Type: "American Pale Lager",
			Description: "The finest hops, pure Detroit water and barley malt combine to bring you that rich crisp flavor that made Detroit famous.",
			Flavor: "cracker, pepper, butter",
			Glass: "Pilsner",
			Temperature: "40-45°F"
		},
		{
			Name: "Ghettoblaster",
			Brewery: "Motor City Brewing Works",
			Logo: "images/motorcitylogo.png",
			Type: "English Dark Mild Ale",
			Description: "The so-called \"Beer You Can Hear\" is an on-going documentation of the Detroit music scene.",
			Flavor: "toast, toffee, caramel",
			Glass: "Seidel",
			Temperature: "50-55°F"
		},
		{
			Name: "Honey Porter",
			Brewery: "Motor City Brewing Works",
			Logo: "images/motorcitylogo.png",
			Type: "American Porter",
			Description: "A touch of pure Michigan clover honey adds a subtle sweetness to this smooth, well balanced ale.",
			Flavor: "cocoa, honey, grilled",
			Glass: "Pint",
			Temperature: "45-50°F"
		},
		{
			Name: "India Pale Ale",
			Brewery: "Motor City Brewing Works",
			Logo: "images/motorcitylogo.png",
			Type: "American IPA",
			Description: "Brewed for 120 minutes to extract the fruity tartness from Warrior, Columbus and Simcoe hops",
			Flavor: "tart, coffee, lemon",
			Glass: "Pint",
			Temperature: "45-50°F"
		},
		{
			Name: "Motor City Pale Ale",
			Brewery: "Motor City Brewing Works",
			Logo: "images/motorcitylogo.png",
			Type: "American Pale Ale",
			Description: "Motor City Brewing Works' first beer; a classic example of a true American style Pale.",
			Flavor: "citrus, vanilla, soy",
			Glass: "Pint",
			Temperature: "45-50°F"
		},	
		{
			Name: "Nut Brown Ale",
			Brewery: "Motor City Brewing Works",
			Logo: "images/motorcitylogo.png",
			Type: "English Brown Ale",
			Description: "Motor City Nut Brown Ale has a wonderful toasted nutty character and malty nose.",
			Flavor: "grape, nut, cheese",
			Glass: "Seidel",
			Temperature: "45-50°F"
		}	
	]; // end of MCBW array

	// returns brewery array based on selected brewery
	var selectBrewery = function(breweryChoice){
		if (breweryChoice === breweries[0]) {
			return atwater;
		}
		if (breweryChoice === breweries[1]) {
			return batch;
		}
		if (breweryChoice === breweries[2]) {
			return brew;
		}	
		if (breweryChoice === breweries[3]) {
			return dbc;
		}
		if (breweryChoice === breweries[4]) {
			return mcbw;
		}						
	}

	return { // data gets returned to pairingController
		breweries: breweries,
		atwater: atwater,
		batch: batch,
		brew: brew,
		dbc: dbc,
		mcbw: mcbw,
		selectBrewery: selectBrewery
	};
	
});