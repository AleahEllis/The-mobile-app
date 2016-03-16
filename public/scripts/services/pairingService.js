angular.module('beerApp')
.factory('pairingService', function() {
	return {
		
		breweries: [
			'Atwater Brewery', 
			'Batch Brewing Company', 
			'Brew Detroit', 
			'Detroit Beer Company', 
			'Motor City Brewing Works'],

		atwater: [
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
			},
		], // end of Atwater array

		batch: [
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
			}
		] // end of Batch array

	};
});