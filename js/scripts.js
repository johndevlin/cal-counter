if (Modernizr.localstorage) {
	// window.localStorage is available!
} else {
	// no native support for HTML5 storage :(
	// maybe try dojox.storage or a third-party solution
}

$('p#go').click(function() {
    localStorage[$('input.store').attr('name')] = $('input.store').val();
	$('h1 span').empty().append(localStorage["fanny"]);
});


// Clears data and Input values
$('p#reset').click(function() {
    localStorage.clear();
	$("input").val('');
	$('h1 span').empty().html('0');
});