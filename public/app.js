function contact_open(){window.scrollTo(0,0),document.getElementById("contact").style.display="block",document.getElementById("contactFade").style.display="block"}function about_open(){window.scrollTo(0,0),document.getElementById("about").style.display="block",document.getElementById("aboutFade").style.display="block"}function contact_close(){document.getElementById("contact").style.display="none",document.getElementById("contactFade").style.display="none"}function about_close(){document.getElementById("about").style.display="none",document.getElementById("aboutFade").style.display="none"}angular.module("beerApp",[]),window.document.onkeydown=function(e){e||(e=event),27===e.keyCode&&(contact_close(),about_close())},angular.module("beerApp").controller("mainController",["$scope","pairingService","recipeService",function(e,r,a){e.breweries=r.breweries,e.atwater=r.atwater,e.batch=r.batch,e.beerChoice=r.beerChoice,e.sbIndex=r.sbIndex,e.recipeArray,e.selectBrewery=function(a){e.beers=r.selectBrewery(a)},e.selectBeer=function(r){e.beer=r,a.setFlavor(e.beer.Flavor)},e.showBeerInfo=function(){var r=document.getElementById("beerInfo");r.style.display="block";var t=a.getFlavor();a.getRecipes(t).then(function(r){e.recipeArray=new Array;for(var t=0;t<r.data.length;t++)e.recipeArray.push({title:r.data[t].title,ID:r.data[t].id,url:""});e.recipeArray.forEach(function(e){a.getLink(e.ID).then(function(r){e.url=r.data.sourceUrl})})})},e.hideBeerInfo=function(){document.getElementById("beerInfo").style.display="none"}}]),angular.module("beerApp").controller("pairingController",["$scope","recipeService","pairingService",function(e,r,a){}]),angular.module("beerApp").factory("pairingService",function(){var e=["Atwater Brewery","Batch Brewing Company","Brew Detroit","Detroit Beer Company","Motor City Brewing Works"],r=[{Name:"Decadent Dark Chocolate",Brewery:"Atwater",Type:"Strong Brown Chocolate Ale",Description:"Nutty, round mouthfeel with an a blend of chocolate extract added for a rich, not-too-sweet mellow flavor profile.",Flavor:"stilton, barbecue, chocolate",Glass:"Nonic",Temperature:"50-55°F"},{Name:"Detroit Pale Ale",Brewery:"Atwater",Type:"Altbier",Description:"A unique and diverse beer bringing in flavors from English and German malts.",Flavor:"gouda, pepper, smoked",Glass:"Becker",Temperature:"40-45°F"},{Name:"Dirty Blonde",Brewery:"Atwater",Type:"Wheat Spiced Ale",Description:"A beer with a pale golden hue, sweeter maltiness with light fruity notes. Crushed orange peel and coriander, clean heady aroma.",Flavor:"orange, chorizo, coriander",Glass:"Stein",Temperature:"48-50°F"},{Name:"D-light",Brewery:"Atwater",Type:"Kölsch",Description:"Clean, crisp and lightly floral.",Flavor:"greens, pear, nuts",Glass:"Stange",Temperature:"40-45°F"},{Name:"Grand Circus IPA",Brewery:"Atwater",Type:"IPA",Description:"Crisp, clean and hoppy, lightly bready with notes of citrus and caramel.",Flavor:"grapefruit, pepper, rosemary",Glass:"Seidel",Temperature:"45-50°F"},{Name:"Hop-A-Peel",Brewery:"Atwater",Type:"American IPA",Description:"A Super Cascade of American and Chinook hops makes gives you a full IPA experience.",Flavor:"orange peel, cilantro, oil",Glass:"Seidel",Temperature:"45-50°F"},{Name:"Michelada",Brewery:"Atwater",Type:"Michelada",Description:"Atwater Lager + Bloody Mary mix = party time.",Flavor:"celery, tomato, salt",Glass:"Becker",Temperature:"40-45°F"},{Name:"Purple Gang Pilsner",Brewery:"Atwater",Type:"Czech Pilsener",Description:"Lightly malty and subtly sweet.",Flavor:"rice, lemon, basil",Glass:"Flute",Temperature:"40-45°F"},{Name:"Vanilla Java Porter",Brewery:"Atwater",Type:"English Porter Spiced Ale",Description:"A copper cored porter with unmistakeable notes of vanilla and coffee. Brewed cold to eliminates burnt flavors.",Flavor:"mole, grilled, butter",Glass:"Pint",Temperature:"50-55°F"},{Name:"VooDoo Vator",Brewery:"Atwater",Type:"Doppelbock",Description:"This exceptionally smooth caramel malt carries a crisp nutty flavor, along with a high dose of liquid courage.",Flavor:"camembert, roast, nut",Glass:"Pilsener",Temperature:"45-50°F"}],a=[{Name:"1400 Porter",Brewery:"Batch",Type:"English Porter",Description:"English style robust porter, roasted malt character, with caramel malt undertones.",Flavor:"grilled, gruyere, caramel",Glass:"Pint",Temperature:"50-55°F"},{Name:"Anton's Animal's II",Brewery:"Batch",Type:"Berliner Weisse",Description:"Refreshing, tart, sour and acidic, with a lemony-citric fruit sharpness and almost no hop bitterness.",Flavor:"ham, gouda, mushroom",Glass:"Nonic",Temperature:"45-50°F"},{Name:"Antwerp's Placebo II",Brewery:"Batch",Type:"Belgian Dark Strong Ale",Description:"A big beautiful Belgian ale. Special bottle release on our 1 year anniversary!",Flavor:"blueberry, barbecue, anise",Glass:"Snifter",Temperature:"45-50°F"},{Name:"Empire Pale Ale",Brewery:"Batch",Type:"American Pale Ale",Description:"Featuring Michigan grown Empire Hops. Light and crisp with a nice floral/fruity finish.",Flavor:"lavender, sage, roast",Glass:"Becker",Temperature:"40-45°F"},{Name:"High End Theory",Brewery:"Batch",Type:"Black IPA",Description:"Low End Theory’s bigger brother.",Flavor:"sharp, curry, pepperoni",Glass:"Becker",Temperature:"40-45°F"},{Name:"Low End Theory",Brewery:"Batch",Type:"Dark Black IPA",Description:"Copious amounts of Michigan grown Chinook and Cascade hops.",Flavor:"mushroom, figs, nut",Glass:"Becker",Temperature:"40-45°F"},{Name:"Milk Goblin II",Brewery:"Batch",Type:"Milk Stout",Description:"Nice, creamy and roasty flavors.",Flavor:"mushroom, cream, nut",Glass:"Nonic",Temperature:"50-55°F"},{Name:"Ned the Wheat Wino",Brewery:"Batch",Type:"Wheat Wine",Description:"Bready, oaky, alcohol heat characters. Good Times.",Flavor:"smoked, chilli, peach",Glass:"Snifter",Temperature:"45-50°F"},{Name:"The Noive",Brewery:"Batch",Type:"Kölsch",Description:"The Noive of some people! Delightful and refreshing. Nice and clean, easy drinking, and the right choice for anytime of the day!",Flavor:"filet,apricot,coriander",Glass:"Stange",Temperature:"40-45°F"},{Name:"Old Witty Bastard II",Brewery:"Batch",Type:"Belgian Witbier",Description:"A delicious witbier featuring coriander and orange peel. Yum!",Flavor:"cumin, orange, cilantro",Glass:"Pilsener",Temperature:"45-50°F"},{Name:"Son of a Batch II",Brewery:"Batch",Type:"Double IPA",Description:"Nicely balanced, brewed with cascade and centennial hops.",Flavor:"salt, grilled, bacon",Glass:"Snifter",Temperature:"50-55°F"},{Name:"Unrequited",Brewery:"Batch",Type:"Belgian Sparkling Ale",Description:"A dry/semi-dry sparkling ale featuring fruity and spicy fermentation character with low hop and low malt presence. It’s all about the Belgian yeast, baby!",Flavor:"cloves, seafood",Glass:"Pint",Temperature:"45-50°F"},{Name:"Wheated Kölsch",Brewery:"Batch",Type:"Wheat Kölsch",Description:"Light Refreshing Wheat/Kölsch Hybrid",Flavor:"egg, gouda, crab",Glass:"Stange",Temperature:"40-45°F"},{Name:"Wheated Session IPA",Brewery:"Batch",Type:"Wheat IPA",Description:"Dry hopped with Cascade and Centennial hops for intense hop aromatics.",Flavor:"curry, barbecue, blue cheese",Glass:"Pint",Temperature:"45-50°F"}],t=function(t){return t===e[0]?r:t===e[1]?a:void 0};return{breweries:e,atwater:r,batch:a,selectBrewery:t}}),angular.module("beerApp").factory("recipeService",["$http",function(e){function r(e){n=e}function a(){return n}function t(r){var a={params:{ingredients:r,number:3},headers:{"X-Mashape-Key":"vZ9WxL4aNXmshyMrjTgnMDIq9g2Rp18Q3i8jsn4fyTzUkdG9Vg"}};return e.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients",a)}function o(r){var a={headers:{"X-Mashape-Key":"vZ9WxL4aNXmshyMrjTgnMDIq9g2Rp18Q3i8jsn4fyTzUkdG9Vg"}};return e.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"+r+"/information",a)}var n;return{getRecipes:t,getLink:o,setFlavor:r,getFlavor:a}}]);