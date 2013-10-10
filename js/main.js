
jQuery(document).ready(function() {
	derecha();
	console.log("hello");
})

function derecha() {
	jQuery(".bola").animate({
		'marginLeft': '90%',}, 3000, 'swing', izquierda)
}

function izquierda() {
	jQuery(".bola").animate({
		'marginLeft': '0%',}, 3000, 'swing', derecha)
}

