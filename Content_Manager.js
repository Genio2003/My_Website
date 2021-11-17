/* Genio2003.tk - Content_Switcher */

var element = document.body;

function Content_Switcher(Sel) {
	switch (Sel) {
	case '0':
		document.getElementById("Home").style.display = "inline-block";
		document.getElementById("Projects").style.display = "none";
		document.getElementById("Contacts").style.display = "none";
		break;
	case '1':
		document.getElementById("Home").style.display = "none";
		document.getElementById("Projects").style.display = "inline-block";
		document.getElementById("Contacts").style.display = "none";
		break;
	case '2':
		document.getElementById("Home").style.display = "none";
		document.getElementById("Projects").style.display = "none";
		document.getElementById("Contacts").style.display = "inline-block";
		break;
	default:
	}
}