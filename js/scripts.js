if (Modernizr.localstorage) {
	// window.localStorage is available!
} else {
	// no native support for HTML5 storage :(
	// maybe try dojox.storage or a third-party solution
}





// Localstorage variables 

var breakfast = localStorage["breakfast"];
var lunch = localStorage["lunch"];
var dinner = localStorage["dinner"];
var snacks = localStorage["snacks"];

var total = Number(breakfast) + Number(lunch) + Number(dinner) + Number(snacks);





// Printing localstorage date to table

$(document).ready(function() {
	// Set the total in a H1's span onload
	$('h1 span').empty().append(total);
	
	// Set totals in a table onload
	$('td#breakfast-total').empty().append(breakfast);
	$('td#lunch-total').empty().append(lunch);
	$('td#dinner-total').empty().append(dinner);
	$('td#snacks-total').empty().append(snacks);
});





// Capturing date

$('p#go').click(function() {
	
	// Gets data from input
    localStorage[$('select option:selected').attr('value')] = $('input.store').val();
	
	// Prints data to H1
	$('h1 span').empty().append(total);
	
	// Reload page
	location.reload();
	
});





// Clears all data and table values

$('p#reset').click(function() {
	
    store.clear()

	localStorage.setItem('breakfast', 0);
	localStorage.setItem('lunch', 0);
	localStorage.setItem('dinner', 0);
	localStorage.setItem('snacks', 0);
	
	$("input").val('');
	$('h1 span').empty().append(total);	
	
	location.reload();
});