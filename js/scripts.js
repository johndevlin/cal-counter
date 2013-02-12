if (Modernizr.localstorage) {
	// window.localStorage is available!
} else {
	// no native support for HTML5 storage :(
	// maybe try dojox.storage or a third-party solution
}

$(document).ready(function () {
	$('input#breakfast').val(localStorage["breakfast"]);
	$('input#lunch').val(localStorage["lunch"]);
});

$('.stored').keyup(function () {
    localStorage[$(this).attr('name')] = $(this).val();
});

$('p#display-breakfast').click(function() {
	alert( "I munched " + localStorage.getItem('breakfast') + " calories for breakfast.");
});

$('p#display-lunch').click(function() {
	alert( "I munched " + localStorage.getItem('lunch') + " calories for lunch.");
});


// Clear data
$('p#clear').click(function() {
    localStorage.clear();
});

