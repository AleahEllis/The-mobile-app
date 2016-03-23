angular.module('beerApp')
.factory('pairingService', function() {

	var breweries = [
		'Atwater Brewery', 
		'Batch Brewing Company', 
		'Detroit Beer Company', 
		'Motor City Brewing Works'
	];

	var atwater = [
		{ //0
			Name:"Decadent Dark Chocolate",
			Brewery:"Atwater Brewery",
			Logo: "images/atwater.png",
			Type:"Strong Brown Chocolate Ale",
			Description:"Nutty, round mouthfeel with an a blend of chocolate extract added for a rich, not-too-sweet mellow flavor profile.",
			Flavor: "stilton, barbecue, chocolate",
            Glass:"Nonic",
            glassImg:"/images/nonic-xdk.png",
            Temperature:"50-55°F"
		},
		{ //1
			Name:"Detroit Pale Ale",
			Brewery:"Atwater Brewery",
			Logo: "images/atwater.png",
			Type:"Altbier",
			Description:"A unique and diverse beer bringing in flavors from English and German malts.",
	        	Flavor:"gouda, pepper, smoked",
            		Glass:"Stange",
            		glassImg:"/images/stange-md.png",
	        	Temperature:"40-45°F"
		},
		{ //2
			Name:"Dirty Blonde",
			Brewery:"Atwater Brewery",
			Logo: "images/atwater.png",
	        	Type:"Wheat Spiced Ale",
			Description:"A beer with a pale golden hue, sweeter maltiness with light fruity notes. Crushed orange peel and coriander, clean heady aroma.",
            		Flavor:"orange, chorizo, coriander",
            		Glass:"Pint",
            		glassImg:"/images/pint-lt.png",
	        	Temperature:"48-50°F"
		},			
		{ //3
			Name:"D-light",
			Brewery:"Atwater Brewery",
			Logo: "images/atwater.png",
	        	Type:"Kölsch",
			Description:"Clean, crisp and lightly floral.",
	        	Flavor:"greens, pear, nuts",
            		Glass:"Stange",
            		glassImg:"/images/stange-lt.png",
	        	Temperature:"40-45°F"
		},
		{ //4
			Name:"Grand Circus IPA",
			Brewery:"Atwater Brewery",
			Logo: "images/atwater.png",
	        	Type:"American IPA",
			Description:"Crisp, clean and hoppy, lightly bready with notes of citrus and caramel.",
	        	Flavor:"grapefruit, pepper, rosemary",
		        Glass:"Pint",
            		glassImg:"/images/pint-md.png",
	        	Temperature:"45-50°F"
		},
		{ //5
			Name:"Hop-A-Peel",
			Brewery:"Atwater Brewery",
			Logo: "images/atwater.png",
	        	Type:"American IPA",
			Description:"A Super Cascade of American and Chinook hops makes gives you a full IPA experience.",
	        	Flavor:"orange peel, cilantro, oil",
        		Glass:"Snifter",
            		glassImg:"/images/snifter-md.png",
	        	Temperature:"45-50°F"
		},
		{ //6
			Name:"Michelada",
			Brewery:"Atwater Brewery",
			Logo: "images/atwater.png",
	        	Type:"Michelada",
			Description:"Atwater Lager + Bloody Mary mix = party time.",
	        	Flavor:"celery, tomato, salt",
            		Glass:"Pint",
            		glassImg:"/images/pint-md.png",
	        	Temperature:"40-45°F"
		},
		{ //7
			Name:"Purple Gang Pilsner",
			Brewery:"Atwater Brewery",
			Logo: "images/atwater.png",
	        	Type:"Czech Pilsener",
			Description:"Lightly malty and subtly sweet.",
	        	Flavor:"rice, lemon, basil",
            		Glass:"Pilsener",
            		glassImg:"/images/pilsner-lt.png",
	        	Temperature:"40-45°F"
		},
		{ //8
			Name:"Vanilla Java Porter",
			Brewery:"Atwater Brewery",
			Logo: "images/atwater.png",
	        	Type:"English Porter Spiced Ale",
			Description:"A copper cored porter with unmistakeable notes of vanilla and coffee. Brewed cold to eliminates burnt flavors.",
			Flavor:"mole, grilled, butter",
            		Glass:"Pint",
            		glassImg:"/images/pint-dk.png",
	        	Temperature:"50-55°F"
		},
		{ //9
			Name:"VooDoo Vator",
			Brewery:"Atwater Brewery",
			Logo: "images/atwater.png",
	        	Type:"Doppelbock",
			Description:"This exceptionally smooth caramel malt carries a crisp nutty flavor, along with a high dose of liquid courage.",
	        	Flavor:"camembert, roast, nut",
            		Glass:"Pilsener",
            		glassImg:"/images/pilsner-dk.png",
	        	Temperature:"45-50°F"
		}
	]; // end of Atwater array


	var batch = [
		{ //0
			Name:"1400 Porter",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch.png",
            Type:"English Porter",
			Description:"English style robust porter, roasted malt character, with caramel malt undertones.",
            Flavor:"grilled, gruyere, caramel",
            Glass:"Pint",
            glassImg:"/images/pint-dk.png",
            Temperature:"50-55°F"
		},
		{ //1
			Name:"Anton's Animal's II",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch.png",
            Type:"Berliner Weisse",
			Description:"Refreshing, tart, sour and acidic, with a lemony-citric fruit sharpness and almost no hop bitterness.",
            Flavor:"ham, gouda, mushroom",
            Glass:"Nonic",
            glassImg:"/images/nonic-md.png",
	       Temperature:"45-50°F"
		},
		{ //2
			Name:"Antwerp's Placebo II",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch.png",
            Type:"Belgian Dark Strong Ale",
			Description:"A big beautiful Belgian ale. Special bottle release on our 1 year anniversary!",
            Flavor:"blueberry, barbecue, anise",
            Glass:"Snifter",
            glassImg:"/images/snifter-dk.png",
            Temperature:"45-50°F"
		},	
		{ //3
			Name:"Empire Pale Ale",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch.png",
            Type:"American Pale Ale",
			Description:"Featuring Michigan grown Empire Hops. Light and crisp with a nice floral/fruity finish.",
            Flavor:"lavender, sage, roast",
            Glass:"Becker",
            glassImg:"/images/becker-lt.png",
            Temperature:"40-45°F"
		},
		{ //4
			Name:"High End Theory",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch.png",
            Type:"Black IPA",
			Description:"Low End Theory’s bigger brother.",
            Flavor:"sharp, curry, pepperoni",
            Glass:"Becker",
            glassImg:"/images/bekcer-dk.png",
            Temperature:"40-45°F"
		},
		{ //5
			Name:"Low End Theory",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch.png",
            Type:"Dark Black IPA",
			Description:"Copious amounts of Michigan grown Chinook and Cascade hops.",
            Flavor:"mushroom, figs, nut",
            Glass:"Becker",
            glassImg:"/images/becker-dk.png",
            Temperature:"40-45°F"
		},
		{ //6
			Name:"Milk Goblin II",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch.png",
            Type:"Milk Stout",
			Description:"Nice, creamy and roasty flavors.",
            Flavor:"mushroom, cream, nut",
            Glass:"Nonic",
            glassImg:"/images/nonic-md.png",
            Temperature:"50-55°F"
		},
		{ //7
			Name:"Ned the Wheat Wino",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch.png",
            Type:"Wheat Wine",
			Description:"Bready, oaky, alcohol heat characters. Good Times.",
            Flavor:"smoked, chilli, peach",
            Glass:"Snifter",
            glassImg:"/images/snifter-dk.png",
            Temperature:"45-50°F"
		},
		{ //8
			Name:"The Noive",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch.png",
            Type:"Kölsch",
			Description:"The Noive of some people! Delightful and refreshing. Nice and clean, easy drinking, and the right choice for anytime of the day!",
            Flavor:"filet,apricot,coriander",
            Glass:"Stange",
            glassImg:"/images/stange-md.png",
            Temperature:"40-45°F"
		},
		{ //9
			Name:"Old Witty Bastard II",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch.png",
            Type:"Belgian Witbier",
			Description:"A delicious witbier featuring coriander and orange peel. Yum!",
            Flavor:"cumin, orange, cilantro",
            Glass:"Pilsener",
            glassImg:"/images/pilsner-lt.png",
            Temperature:"45-50°F"
		},
		{ //10
			Name:"Son of a Batch II",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch.png",
            Type:"Double IPA",
			Description:"Nicely balanced, brewed with cascade and centennial hops.",
            Flavor:"salt, grilled, bacon",
            Glass:"Snifter",
            glassImg:"/images/snifter-dk.png",
            Temperature:"50-55°F"
		},	
		{ //11
			Name:"Unrequited",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch.png",
            Type:"Belgian Sparkling Ale",
			Description:"A dry/semi-dry sparkling ale featuring fruity and spicy fermentation character with low hop and low malt presence. It’s all about the Belgian yeast, baby!",
            Flavor:"cloves, seafood",
            Glass:"Pint",
            glassImg:"/images/pint-lt.png",
            Temperature:"45-50°F"
		},
		{ //12
			Name:"Wheated Kölsch",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch.png",
            Type:"Wheat Kölsch",
			Description:"Light Refreshing Wheat/Kölsch Hybrid",
            Flavor:"egg, gouda, crab",
            Glass:"Stange",
            glassImg:"/images/stange-lt.png",
            Temperature:"40-45°F"
		},
		{ //12
			Name:"Wheated Session IPA",
			Brewery:"Batch Brewing Company",
			Logo: "images/batch.png",
            Type:"Wheat IPA",
			Description:"Dry hopped with Cascade and Centennial hops for intense hop aromatics.",
            Flavor:"curry, barbecue, blue cheese",
            Glass:"Pint",
            glassImg:"/images/pint-md.png",
            Temperature:"45-50°F"
		}
	]; // end of Batch array

	var dbc = [
		{
			Name: "Broadway Light",
			Brewery: "Detroit Beer Company",
			Logo: "images/detroit-beer.png",
			Type: "Light Ale",
			Description: "A delicious light ale brewed to be refreshing and drinkable.",
			Flavor: "orange peel, nori, Ponzu",
			Glass: "Pint",
			glassImg:"images/pint-lt.png",
			Temperature: "45-50°F"
		},
		{
			Name: "Broke Down Brown",
			Brewery: "Detroit Beer Company",
			Logo: "images/detroit-beer.png",
			Type: "An ale with smooth delicious flavors of biscuit, caramel and toffee.",
			Description: "An ale with smooth delicious flavors of biscuit, caramel and toffee.",
			Flavor: "biscuit, butter, sugar",
			Glass: "Pint",
			glassImg:"images/pint-md.png",
			Temperature: "45-50°F"
		},
		{
			Name: "The Detroit Dwarf",
			Brewery: "Detroit Beer Company",
			Logo: "images/detroit-beer.png",
			Type: "Altbier ",
			Description: "Our classic Altbier style beer. Amber in color with a nice bite from German hops.",
			Flavor: "wheat four, nuts, brown sugar",
			Glass: "Stange",
			glassImg:"images/stange-md.png",
			Temperature: "45-50°F"
		},
		{
			Name: "Drop da Mike",
			Brewery: "Detroit Beer Company",
			Logo: "images/detroit-beer.png",
			Type: "Belgian",
			Description: "A Belgian Dark Strong Ale brewed with Belgian candi syrup and a fantastic blend of dark character malts. Fermented with Belgian Ardennes yeast.",
			Flavor: "raisen, walnut, citrus",
			Glass: "Pint",
			glassImg:"images/pint-dk.png",
			Temperature: "45-50°F"
		},

		{
			Name: "John Hammond's Cane",
			Brewery: "Detroit Beer Company",
			Logo: "images/detroit-beer.png",
			Type: "Amber Ale",
			Description: "An American Amber Ale made with West Coast American hops.",
			Flavor: "salt, green pepper, sausage",
			Glass: "Pint",
			glassImg:"images/pint-lt.png",
			Temperature: "45-50°F"
		},
		{
			Name: "Little Wings Belgian Session",
			Brewery: "Detroit Beer Company",
			Logo: "images/detroit-beer.png",
			Type: "Belgian Pale Ale",
			Description: "A light and delightful Belgian style pale ale. A copper colored ale with Flavors of Dill, Clove, and Lemon",
			Flavor: "Dill, Clove, Lemon",
			Glass: "Snifter",
			glassImg:"images/snifter-lt.png",
			Temperature: "45-50°F"
		},
		{
			Name: "Local 1529 IPA",
			Brewery: "Detroit Beer Company",
			Logo: "images/detroit-beer.png",
			Type: "American IPA",
			Description: "An American IPA brewed with Columbus, Falconer’s Flight and Centennial hops.",
			Flavor: "grapefruit, toast, rosewater",
			Glass: "Pint",
			glassImg:"images/pint-lt.png",
			Temperature: "45-50°F"
		},
		{
			Name: "Marzen Lager",
			Brewery: "Detroit Beer Company",
			Logo: "images/detroit-beer.png",
			Type: "Lager",
			Description: "Similar to our Oktoberfest, a pale copper German-style lager.",
			Flavor: "Ritz Crackers, honey, pepper",
			Glass: "Pint",
			glassImg:"images/pint-md.png",
			Temperature: "45-50°F"
		},
		{
			Name: "Riopelle Pale Ale",
			Brewery: "Detroit Beer Company",
			Logo: "images/detroit-beer.png",
			Type: "Rye Pale Ale",
			Description: "Named after Riopelle street in Detroit this dank American hop has a bite with a nice dry finish",
			Flavor: "pumpernickel, smoked salmon, butter",
			Glass: "Pint",
			glassImg:"images/pint-dk.png",
			Temperature: "40-45°F"
		}
	]; // end of DBC array

	var mcbw = [
		{
			Name: "Bohemian Lager",
			Brewery: "Motor City Brewing Works",
			Logo: "images/motor-city.png",
			Type: "American Pale Lager",
			Description: "The finest hops, pure Detroit water and barley malt combine to bring you that rich crisp flavor that made Detroit famous.",
			Flavor: "cracker, pepper, butter",
			Glass: "Pilsner",
			glassImg:"images/pilsner-dk.png",
			Temperature: "40-45°F"
		},
		{
			Name: "Ghettoblaster",
			Brewery: "Motor City Brewing Works",
			Logo: "images/motor-city.png",
			Type: "English Dark Mild Ale",
			Description: 'The so-called "Beer You Can Hear" is an on-going documentation of the Detroit music scene.',
			Flavor: "toast, toffee, caramel",
			Glass: "Stein",
			glassImg:"images/stein-dk.png",
			Temperature: "50-55°F"
		},
		{
			Name: "Honey Porter",
			Brewery: "Motor City Brewing Works",
			Logo: "images/motor-city.png",
			Type: "American Porter",
			Description: "A touch of pure Michigan clover honey adds a subtle sweetness to this smooth, well balanced ale.",
			Flavor: "cocoa, honey, grilled",
			Glass: "Pint",
			glassImg:"images/pint-dk.png",
			Temperature: "45-50°F"
		},
		{
			Name: "India Pale Ale",
			Brewery: "Motor City Brewing Works",
			Logo: "images/motor-city.png",
			Type: "American IPA",
			Description: "Brewed for 120 minutes to extract the fruity tartness from Warrior, Columbus and Simcoe hops",
			Flavor: "tart, coffee, lemon",
			Glass: "Pint",
			glassImg:"images/pint-md.png",
			Temperature: "45-50°F"
		},
		{
			Name: "Motor City Pale Ale",
			Brewery: "Motor City Brewing Works",
			Logo: "images/motor-city.png",
			Type: "American Pale Ale",
			Description: "Motor City Brewing Works' first beer; a classic example of a true American style Pale.",
			Flavor: "citrus, vanilla, soy",
			Glass: "Pint",
			glassImg:"images/pint-lt.png",
			Temperature: "45-50°F"
		},	
		{
			Name: "Nut Brown Ale",
			Brewery: "Motor City Brewing Works",
			Logo: "images/motor-city.png",
			Type: "English Brown Ale",
			Description: "Motor City Nut Brown Ale has a wonderful toasted nutty character and malty nose.",
			Flavor: "grape, nut, cheese",
			Glass: "Snifter",
			glassImg:"images/snifter-dk.png",
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
			return dbc;
		}
		if (breweryChoice === breweries[3]) {
			return mcbw;
		}						
	}

	return { // data gets returned to pairingController
		breweries: breweries,
		atwater: atwater,
		batch: batch,
		dbc: dbc,
		mcbw: mcbw,
		selectBrewery: selectBrewery
	};
	
});
