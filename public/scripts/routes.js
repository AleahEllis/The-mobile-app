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

// modal 
var modal = document.getElementById('myModal');
var yes = document.getElementById("yes");
var no = document.getElementById("no");

yes.onclick = function() {
    modal.style.display = "none";
}

no.onclick = function() {
    alert("Sorry! Since this app is heavily focused on beer, we'd rather you were legal drinking age. Come back when you're 21.");
    history.go(-1);
    return false;
}