// Expand and Collapse Project Nav
function projectNavShow() {
	document.getElementById("project-nav-button-hide").style.display = "inline";
	document.getElementById("project-nav").className = "project-nav-show";
	document.getElementById("project-nav-button-show").style.display = "none";
}
function projectNavHide() {
	document.getElementById("project-nav-button-show").style.display = "inline";
	document.getElementById("project-nav").className = "project-nav-hide";
	document.getElementById("project-nav-button-hide").style.display = "none";
}

// Project Images Slide Show
var slideshowIndex = 1;
showImage(slideshowIndex);

function changeImage(n) {
	showImage(slideshowIndex += n);
}

function showImage(n) {
	var i;
	var x = document.getElementsByClassName("slideshow_images");
	if (n > x.length) {slideshowIndex = 1}
	if (n < 1) {slideshowIndex = x.length}
	for (i = 0; i < x.length; i++) {
		//x[i].style.display = "none";
		$(x[i]).fadeOut(600, 'swing');
	}
	//x[slideshowIndex-1].style.display = "block";
	$(x[slideshowIndex-1]).fadeIn(400, 'swing');
}
