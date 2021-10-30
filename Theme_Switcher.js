/* Genio2003.tk Theme_Switcher */

function Theme_Switcher(Theme_Name) {
	var element = document.body;
	switch (Theme_Name) {
		case 'dark_theme':
			element.classList.toggle("dark-theme");
			if (element.className == 'dark-theme') {
				document.getElementById("Halloween_Theme_Switch").style.display = "none";
			}
			else {
				document.getElementById("Halloween_Theme_Switch").style.display = "inline-block";
			}
			break;
		case 'halloween_theme':
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
			break;
		default:
		}
}