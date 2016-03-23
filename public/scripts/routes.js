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



var modal = document.getElementById('myModal');
var yes = document.getElementById("yes");
var no = document.getElementById("no");


// When the user clicks on <span> (x), close the modal
yes.onclick = function() {
    modal.style.display = "none";
}

no.onclick = function() {
    history.go(-1);
    return false;
}