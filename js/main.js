$(document).ready(function() {
	var randomLinks = $('a.rand');
	randomLinks.hover(function() {
		$(this).animate({
			'paddingLeft': '20px'
		},1000);
	},function() {
		$(this).animate({
			'paddingLeft': '0'
		},500);
	});
});