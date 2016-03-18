var app = angular.module('beerApp')
app.factory('pairingService', function() {

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
			Brewery:"Atwater",
			Type:"Strong Brown Chocolate Ale",
			Description:"Nutty, round mouthfeel with an a blend of chocolate extract added for a rich, not-too-sweet mellow flavor profile.",
            Flavor: "vanilla, cinnamon, chocolate",
	        Glass:"Nonic",
	        Temperature:"50-55°F"
		},
		{ //1
			Name:"Detroit Pale Ale",
			Brewery:"Atwater",
	        Type:"Pale Ale",
			Description:"A unique and diverse beer bringing in flavors from English and German malts.",
	        Flavor:"lemon, honey, smoked",
            Glass:"Becker",
	        Temperature:"40-45°F"
		},
		{ //2
			Name:"Dirty Blonde",
			Brewery:"Atwater",
	        Type:"Wheat Spiced Ale",
			Description:"A beer with a pale golden hue, sweeter maltiness with light fruity notes. Crushed orange peel and coriander, clean heady aroma.",
            Flavor:"orange, coriander, lemon",
            Glass:"Stein",
	        Temperature:"48-50°F"
		},			
		{ //3
			Name:"D-light",
			Brewery:"Atwater",
	        Type:"Kölsch",
			Description:"Clean, crisp and lightly floral.",
	        Flavor:"greens, pear, nuts",
            Glass:"Stange",
	        Temperature:"40-45°F"
		},
		{ //4
			Name:"Grand Circus IPA",
			Brewery:"Atwater",
	        Type:"IPA",
			Description:"Crisp, clean and hoppy, lightly bready with notes of citrus and caramel.",
	        Flavor:"grapefruit, pepper, rosemary",
            Glass:"Seidel",
	        Temperature:"45-50°F"
		},
		{ //5
			Name:"Hop-A-Peel",
			Brewery:"Atwater",
	        Type:"American IPA",
			Description:"A Super Cascade of American and Chinook hops makes gives you a full IPA experience.",
	        Flavor:"orange peel, cilantro, oil",
            Glass:"Seidel",
	        Temperature:"45-50°F"
		},
		{ //6
			Name:"Michelada",
			Brewery:"Atwater",
	        Type:"Michelada",
			Description:"Atwater Lager + Bloody Mary mix = party time.",
	        Flavor:"celery, tomato, salt",
            Glass:"Becker",
	        Temperature:"40-45°F"
		},
		{ //7
			Name:"Purple Gang Pilsner",
			Brewery:"Atwater",
	        Type:"Czech Pilsener",
			Description:"Lightly malty and subtly sweet.",
	        Flavor:"rice, lemon, basil",
            Glass:"Flute",
	        Temperature:"40-45°F"
		},
		{ //8
			Name:"Vanilla Java Porter",
			Brewery:"Atwater",
	        Type:"English Porter Spiced Ale",
			Description:"A copper cored porter with unmistakeable notes of vanilla and coffee. Brewed cold to eliminates burnt flavors.",
	        Flavor:"vanilla, coffee, butter",
            Glass:"Pint",
	        Temperature:"50-55°F"
		},
		{ //9
			Name:"VooDoo Vator",
			Brewery:"Atwater",
	        Type:"Doppelbock",
			Description:"This exceptionally smooth caramel malt carries a crisp nutty flavor, along with a high dose of liquid courage.",
	        Flavor:"camembert, raisin, nut",
            Glass:"Pilsener",
	        Temperature:"45-50°F"
		}
	]; // end of Atwater array


	var batch = [
		{ //0
			Name:"1400 Porter",
			Brewery:"Batch",
	        Type:"English Porter",
			Description:"English style robust porter, roasted malt character, with caramel malt undertones.",
	        Flavor:"grilled, gruyere, caramel",
            Glass:"Pint",
	        Temperature:"50-55°F"
		},
		{ //1
			Name:"Anton's Animal's II",
			Brewery:"Batch",
	        Type:"Berliner Weisse",
			Description:"Refreshing, tart, sour and acidic, with a lemony-citric fruit sharpness and almost no hop bitterness.",
	        Flavor:"ham, gouda, mushroom",
            Glass:"Nonic",
	        Temperature:"45-50°F"
		},
		{ //2
			Name:"Antwerp's Placebo II",
			Brewery:"Batch",
	        Type:"Belgian Dark Strong Ale",
			Description:"A big beautiful Belgian ale. Special bottle release on our 1 year anniversary!",
	        Flavor:"blueberry, barbecue, anise",
            Glass:"Snifter",
	        Temperature:"45-50°F"
		},	
		{ //3
			Name:"Empire Pale Ale",
			Brewery:"Batch",
	        Type:"American Pale Ale",
			Description:"Featuring Michigan grown Empire Hops. Light and crisp with a nice floral/fruity finish.",
	        Flavor:"lavender, sage, roast",
            Glass:"Becker",
	        Temperature:"40-45°F"
		},
		{ //4
			Name:"High End Theory",
			Brewery:"Batch",
	        Type:"Black IPA",
			Description:"Low End Theory’s bigger brother.",
	        Flavor:"sharp, pepper, pepperoni",
            Glass:"Becker",
	        Temperature:"40-45°F"
		},
		{ //5
			Name:"Low End Theory",
			Brewery:"Batch",
	        Type:"Dark Black IPA",
			Description:"Copious amounts of Michigan grown Chinook and Cascade hops.",
	        Flavor:"mushroom, figs, nut",
            Glass:"Becker",
	        Temperature:"40-45°F"
		},
		{ //6
			Name:"Milk Goblin II",
			Brewery:"Batch",
	        Type:"Milk Stout",
			Description:"Nice, creamy and roasty flavors.",
	        Flavor:"chocolate, cream, nut",
            Glass:"Nonic",
	        Temperature:"50-55°F"
		},
		{ //7
			Name:"Ned the Wheat Wino",
			Brewery:"Batch",
	        Type:"Wheat Wine",
			Description:"Bready, oaky, alcohol heat characters. Good Times.",
	        Flavor:"smoked, chilli, peach",
            Glass:"Snifter",
	        Temperature:"45-50°F"
		},
		{ //8
			Name:"The Noive",
			Maker:"Batch",
	        Type:"Kölsch",
			Description:"The Noive of some people! Delightful and refreshing. Nice and clean, easy drinking, and the right choice for anytime of the day!",
	        Flavor:"bratwurst, apricot, coriander",
            Glass:"Stange",
	        Temperature:"40-45°F"
		},
		{ //9
			Name:"Old Witty Bastard II",
			Brewery:"Batch",
	        Type:"Belgian Witbier",
			Description:"A delicious witbier featuring coriander and orange peel. Yum!",
	        Flavor:"coriander, orange, mascarpone",
            Glass:"Pilsener",
	        Temperature:"45-50°F"
		},
		{ //10
			Name:"Son of a Batch II",
			Maker:"Batch",
	        Type:"Double IPA",
			Description:"Nicely balanced, brewed with cascade and centennial hops.",
	        Flavor:"salt, grilled, bacon",
            Glass:"Snifter",
	        Temperature:"50-55°F"
		},	
		{ //11
			Name:"Unrequited",
			Maker:"Batch",
	        Type:"Belgian Sparkling Ale",
			Description:"A dry/semi-dry sparkling ale featuring fruity and spicy fermentation character with low hop and low malt presence. It’s all about the Belgian yeast, baby!",
	        Flavor:"batter, sausage, orange",
            Glass:"Pint",
	        Temperature:"45-50°F"
		},
		{ //12
			Name:"Wheated Kölsch",
			Maker:"Batch",
	        Type:"Wheat Kölsch",
			Description:"Light Refreshing Wheat/Kölsch Hybrid",
	        Flavor:"egg, gouda, crab",
            Glass:"Stange",
	        Temperature:"40-45°F"
		},
		{ //12
			Name:"Wheated Session IPA",
			Maker:"Batch",
	        Type:"Wheat IPA",
			Description:"Dry hopped with Cascade and Centennial hops for intense hop aromatics.",
	        Flavor:"curry, barbecue, blue cheese",
            Glass:"Pint",
	        Temperature:"45-50°F"
		}
	]; // end of Batch array

	var selectBeer = function(choice1){
		if (choice1 === breweries[0]) {
			return atwater;
		}
		if (choice1 === breweries[1]) {
			return batch;
		}		
	}

	return { // data gets returned to pairingController
		breweries: breweries,
		atwater: atwater,
		batch: batch,
		selectBeer: selectBeer
	};
	
});