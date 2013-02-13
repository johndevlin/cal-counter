if (Modernizr.localstorage) {
	// window.localStorage is available!
} else {
	// no native support for HTML5 storage :(
	// maybe try dojox.storage or a third-party solution
}

// Displays LocalStorage in Input fields & in sidebar
$(document).ready(function () {
	$('input#breakfast').val(localStorage["breakfast"]);
	$('h2#breakfast-total span').append(localStorage["breakfast"]);
	
	$('input#lunch').val(localStorage["lunch"]);
	$('h2#lunch-total span').append(localStorage["lunch"]);
	
	$('input#dinner').val(localStorage["dinner"]);
	$('h2#dinner-total span').append(localStorage["dinner"]);
});

// Saves Input data (from input.stored) as LocalStorage
$('.stored').keyup(function () {
    localStorage[$(this).attr('id')] = $(this).val();
});

// Displays LocalStorage on Click
$('p#display-breakfast').click(function() {
	alert( "I munched " + localStorage.getItem('breakfast') + " calories for breakfast.");
});

$('p#display-lunch').click(function() {
	alert( "I munched " + localStorage.getItem('lunch') + " calories for lunch.");
});

$('p#display-dinner').click(function() {
	alert( "I munched " + localStorage.getItem('dinner') + " calories for dinner.");
});

// Clears data and Input values
$('p#clear').click(function() {
    localStorage.clear();
	$("input").val('');
});

