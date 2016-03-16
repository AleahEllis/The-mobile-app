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
			Brewery:"Atwater",
			Type:"Strong Brown Chocolate Ale",
			Description:"Nutty, round mouthfeel with an a blend of chocolate extract added for a rich, not-too-sweet mellow flavor profile.",
	        Glass:"Nonic",
	        Temperature:"50-55°F"
		},
		{ //1
			Name:"Detroit Pale Ale",
			Brewery:"Atwater",
	        Type:"Pale Ale",
			Description:"A unique and diverse beer bringing in flavors from English and German malts.",
	        Glass:"Becker",
	        Temperature:"40-45°F"
		},
		{ //2
			Name:"Dirty Blonde",
			Brewery:"Atwater",
	        Type:"Wheat Spiced Ale",
			Description:"A beer with a pale golden hue, sweeter maltiness with light fruity notes. Crushed orange peel and coriander, clean heady aroma.",
	        Glass:"Stein",
	        Temperature:"48-50°F"
		},			
		{ //3
			Name:"D-light",
			Brewery:"Atwater",
	        Type:"Kolsch",
			Description:"Clean, crisp and lightly floral.",
	        Glass:"Stange",
	        Temperature:"40-45°F"
		},
		{ //4
			Name:"Grand Circus IPA",
			Brewery:"Atwater",
	        Type:"IPA",
			Description:"Crisp, clean and hoppy, lightly bready with notes of citrus and caramel.",
	        Glass:"Seidel",
	        Temperature:"45-50°F"
		},
		{ //5
			Name:"Hop-A-Peel",
			Brewery:"Atwater",
	        Type:"American IPA",
			Description:"A Super Cascade of American and Chinook hops makes gives you a full IPA experience.",
	        Glass:"Seidel",
	        Temperature:"45-50°F"
		},
		{ //6
			Name:"Michelada",
			Brewery:"Atwater",
	        Type:"Michelada",
			Description:"Atwater Lager + Bloody Mary mix = party time.",
	        Glass:"Becker",
	        Temperature:"40-45°F"
		},
		{ //7
			Name:"Purple Gang Pilsner",
			Brewery:"Atwater",
	        Type:"German Pilsner",
			Description:"Lightly malty and subtly sweet.",
	        Glass:"Flute",
	        Temperature:"40-45°F"
		},
		{ //8
			Name:"Vanilla Java Porter",
			Brewery:"Atwater",
	        Type:"English Porter Spiced Ale",
			Description:"A copper cored porter with unmistakeable notes of vanilla and coffee. Brewed cold to eliminates burnt flavors.",
	        Glass:"Pint",
	        Temperature:"50-55°F"
		},
		{ //9
			Name:"VooDoo Vator",
			Brewery:"Atwater",
	        Type:"Doppelbock",
			Description:"This exceptionally smooth caramel malt carries a crisp nutty flavor, along with a high dose of liquid courage.",
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
	        Glass:"Pint",
	        Temperature:"50-55°F"
		},
		{ //1
			Name:"Anton's Animal's II",
			Brewery:"Batch",
	        Type:"Berliner Weisse",
			Description:"Refreshing, tart, sour and acidic, with a lemony-citric fruit sharpness and almost no hop bitterness.",
	        Glass:"Nonic",
	        Temperature:"45-50°F"
		},
		{ //2
			Name:"Antwerp's Placebo II",
			Brewery:"Batch",
	        Type:"Belgian Dark Strong Ale",
			Description:"Big Beautiful Belgian Ale. Special bottle release on our 1 year anniversary!",
	        Glass:"Snifter",
	        Temperature:"45-50°F"
		},	
		{ //3
			Name:"Empire Pale Ale",
			Brewery:"Batch",
	        Type:"American Pale Ale",
			Description:"Featuring Michigan grown Empire Hops. Light and crisp with a nice floral/fruity finish.",
	        Glass:"Becker",
	        Temperature:"40-45°F"
		},
		{ //4
			Name:"High End Theory",
			Brewery:"Batch",
	        Type:"Black IPA",
			Description:"Low End Theory’s bigger brother.",
	        Glass:"Becker",
	        Temperature:"40-45°F"
		},
		{ //5
			Name:"Low End Theory",
			Brewery:"Batch",
	        Type:"Dark Black IPA",
			Description:"Copious amounts of Michigan grown Chinook and Cascade hops.",
	        Glass:"Becker",
	        Temperature:"40-45°F"
		},
		{ //6
			Name:"Milk Goblin II",
			Brewery:"Batch",
	        Type:"Milk Stout",
			Description:"Nice, creamy and roasty flavors.",
	        Glass:"Nonic",
	        Temperature:"50-55°F"
		},
		{ //7
			Name:"Ned the Wheat Wino",
			Brewery:"Batch",
	        Type:"Wheat Wine",
			Description:"Bready, oaky, alcohol heat characters. Good Times.",
	        Glass:"Snifter",
	        Temperature:"45-50°F"
		},
		{ //8
			Name:"The Noive",
			Maker:"Batch",
	        Type:"Kölsch",
			Description:"The Noive of some people. Delightful and refreshing. Nice and clean, easy drinking, and the right choice for anytime of the day!",
	        Glass:"Stange",
	        Temperature:"40-45°F"
		},
		{ //9
			Name:"Old Witty Bastard II",
			Brewery:"Batch",
	        Type:"Belgian Witbier",
			Description:"A delicious witbier featuring coriander and orange peel. Yum!",
	        Glass:"Pilsener",
	        Temperature:"45-50°F"
		},
		{ //10
			Name:"Son of a Batch II",
			Maker:"Batch",
	        Type:"Double IPA",
			Description:"Nicely balanced, brewed with cascade and centennial hops.",
	        Glass:"Snifter",
	        Temperature:"50-55°F"
		},	
		{ //11
			Name:"Unrequited",
			Maker:"Batch",
	        Type:"Belgian Sparkling Ale",
			Description:"A dry/semi-dry sparkling ale featuring fruity and spicy fermentation character with low hop and low malt presence. It’s all about the Belgian yeast, baby!",
	        Glass:"Pint",
	        Temperature:"45-50°F"
		},
		{ //12
			Name:"Wheated Kölsch",
			Maker:"Batch",
	        Type:"Wheat Kölsch",
			Description:"Light Refreshing Wheat/Kölsch Hybrid",
	        Glass:"Stange",
	        Temperature:"40-45°F"
		},
		{ //12
			Name:"Wheated Session IPA",
			Maker:"Batch",
	        Type:"Wheat IPA",
			Description:"Dry hopped with Cascade and Centennial hops for intense hop aromatics.",
	        Glass:"Pint",
	        Temperature:"45-50°F"
		}
	]; // end of Batch array

	var choice2 = [];

	var selectBeer = function(choice1){
		if (choice1 === breweries[0]) {
			for (var i = 0; i < atwater.length; i++) {
				choice2.push(atwater[i].Name);
			}
		}
		if (choice1 === breweries[1]) {
			for (var i = 0; i < batch.length; i++) {
				choice2.push(batch[i].Name);
			}
		}		
	}

	return { // data gets returned to pairingController
		breweries: breweries,
		atwater: atwater,
		batch: batch,
		choice2: choice2,		
		selectBeer: selectBeer,
		pair: pair
	};
});