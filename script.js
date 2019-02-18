started = false;

var getBestTime = function() {
	if(ServerDate.getFullYear() == 1970) {
		// assuming it isn't really 1970 again
		return new Date().getTime()
	}
	return ServerDate.getTime();
}

var setupSound = function(e) {
	var sax = document.getElementById("sax_guy");
	var idealPos = getBestTime() % (sax.duration * 1000);
	sax.currentTime = idealPos / 1000;
	sax.play();
}

begin = function(e) {
	if (e.code == "KeyF" && (!started)) {
		started = true;
		document.body.style.backgroundColor = "black" // "#635638";
		document.body.style.backgroundImage = "url(gandalfsax.gif)";
		document.body.style.backgroundSize = "100%";
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.backgroundPosition = "center";
		document.getElementById("message").innerHTML = "";
		document.documentElement.requestFullscreen();
		setupSound(e);
	}
}

document.body.addEventListener("keydown", begin);
