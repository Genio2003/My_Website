/* Genio2003.tk - The_Theme_Master */

var element = document.body;

function Theme_Master() {
	var Time = new Date().getHours();
	var Day = new Date().getDate();
	var Month = new Date().getMonth();
	if (Month == 9 && Day == 31) {
		Halloween_Theme();
	}
	else {
		if (Time >= 20 || Time < 7) {
		Dark_Theme();
		}
	}
}

function Dark_Theme() {
	element.classList.toggle("dark-theme");
	if (element.className == 'dark-theme') {
		document.getElementById("Dark_Theme_Switch").innerHTML = "🌞";
		document.getElementById("Dark_Theme_Switch").style.backgroundColor= "#87ceeb";
	}
	else {
		document.getElementById("Dark_Theme_Switch").innerHTML = "🌜";
		document.getElementById("Dark_Theme_Switch").style.backgroundColor= "#070058";
	}
}

function Halloween_Theme() {
	element.classList.toggle("halloween-theme");
	if (document.getElementById("Emoji").innerHTML != "🎃") {
		document.getElementById("Gif").src = "https://media.giphy.com/media/ecP7TG62hZb800WiBe/giphy.gif";
		document.getElementById("Emoji").innerHTML = "🎃";
		document.getElementById("Dark_Theme_Switch").style.display = "none";
	}
	else {
		document.getElementById("Gif").src = "https://media.giphy.com/media/gw3IWyGkC0rsazTi/giphy.gif";
		document.getElementById("Emoji").innerHTML = "❤️";
		document.getElementById("Dark_Theme_Switch").style.display = "inline-block";
	}
}

function Override(Theme_Name) {
	switch (Theme_Name) {
	case 'dark_theme':
		Dark_Theme()
		break;
	case 'halloween_theme':
		Halloween_Theme()
		break;
	default:
	}
}