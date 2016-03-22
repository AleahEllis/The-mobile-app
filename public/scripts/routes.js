angular.module('beerApp', []);

//contains lightbox logic for footer
//ui bootstrap models could potentially make this simpler
window.document.onkeydown = function (e)
	{
	    if (!e){
	        e = event;
	    }
	    if (e.keyCode === 27){
	        contact_close();
	    	about_close();
	    }
	}


function contact_open(){
    window.scrollTo(0,0);
    document.getElementById('contact').style.display='block';
    document.getElementById('contactFade').style.display='block';  
};

function about_open(){
    window.scrollTo(0,0);
    document.getElementById('about').style.display='block';
    document.getElementById('aboutFade').style.display='block';  
};


function contact_close(){
    document.getElementById('contact').style.display='none';
    document.getElementById('contactFade').style.display='none';
};


function about_close(){
    document.getElementById('about').style.display='none';
    document.getElementById('aboutFade').style.display='none';
};

// footer is fixed on load, but becomes static on scroll
window.addEventListener('scroll', function (evt) {

  var footer = document.getElementById('footerPosition');
  // This value is your scroll distance from the top
  var distance_from_top = document.body.scrollTop;

  // The user has scrolled to the tippy top of the page. Set appropriate style.
  if (distance_from_top === 0) {
  	footer.style.position = 'fixed';
  }

  // The user has scrolled down the page.
  if(distance_from_top > 0) {
  	footer.style.position = 'static';
  }

});