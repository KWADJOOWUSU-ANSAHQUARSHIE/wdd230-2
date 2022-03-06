
let hamBtn = document.getElementById("hamBtn");
hamBtn.onclick = toggleMenu;


function toggleMenu(){
	document.querySelector("#navigation").classList.toggle("open");
}